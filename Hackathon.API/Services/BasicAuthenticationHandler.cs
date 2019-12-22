
using Hackathon.DAL;
using Hackathon.Domain;
using Microsoft.AspNetCore.Authentication;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
using System.Security.Claims;
using System.Text;
using System.Text.Encodings.Web;
using System.Threading.Tasks;

namespace Hackathon.API.Services
{
    public class BasicAuthenticationHandler : AuthenticationHandler<AuthenticationSchemeOptions>
    {
        private UnitOfWork _unit;
        public BasicAuthenticationHandler(
                        IOptionsMonitor<AuthenticationSchemeOptions> options,
                        ILoggerFactory logger, UrlEncoder encoder,
                        ISystemClock clock,
                        HackathonContext context) : base(options, logger, encoder, clock)
        {
            _unit = new UnitOfWork(context);
        }

        protected override async Task<AuthenticateResult> HandleAuthenticateAsync()
        {
            if (!Request.Headers.ContainsKey("Authorization")) return AuthenticateResult.Fail("No credentials present");
            User user = null;

            try
            {
                var authHeader = AuthenticationHeaderValue.Parse(Request.Headers["Authorization"]);  // am9obmRvOiRjaDAwbA==
                var credBytes = Convert.FromBase64String(authHeader.Parameter);  // am9obmRvOiRjaDAwbA==
                var credentials = Encoding.UTF8.GetString(credBytes).Split(new[] { ':' }, 2);
                var username = credentials[0];
                var password = credentials[1];
                user = _unit.Users.Get(x => x.Username == username && x.Password == password).FirstOrDefault();
            }
            catch
            {
                return AuthenticateResult.Fail("Invalid authorization header");
            }
            if (user == null)
            {
                return AuthenticateResult.Fail("Invalid credentials");
            }
            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Name, user.Username),
                new Claim("FullName", user.FullName)
            };
            var identity = new ClaimsIdentity(claims, Scheme.Name);
            var principle = new ClaimsPrincipal(identity);
            var ticket = new AuthenticationTicket(principle, Scheme.Name);
            return AuthenticateResult.Success(ticket);
        }
    }
}
