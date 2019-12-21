import Axios from "axios";
import {
  FETCH_ANNUAL_REPORT,
  FETCH_ANNUAL_REPORT_SUCCESS,
  FETCH_ANNUAL_REPORT_FAILURE,
  START_ANNUAL_REPORT_LOADER
} from "./types";
import Config from "../../config";
export const getAnnualReport = selectedYear => {
  return dispatch => {
    dispatch({ type: FETCH_ANNUAL_REPORT });
    Axios.get("http://192.168.60.72/TimeKeeper/api/report/annual-overview-stored/" + selectedYear, Config.authHeader)
      .then(res => {
        console.log("data", res.data);
        let data = res.data.ar.map(x => {
          return {
            project: x.project.name,
            total: x.total,
            jan: x.hours[0],
            feb: x.hours[1],
            mar: x.hours[2],
            apr: x.hours[3],
            may: x.hours[4],
            jun: x.hours[5],
            jul: x.hours[6],
            aug: x.hours[7],
            sep: x.hours[8],
            oct: x.hours[9],
            nov: x.hours[10],
            dec: x.hours[11]
          };
        });
        dispatch({ type: FETCH_ANNUAL_REPORT_SUCCESS, payload: data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: FETCH_ANNUAL_REPORT_FAILURE, payload: err });
      });
  };
};

export const startLoading = () => {
  return dispatch => {
    dispatch({ type: FETCH_ANNUAL_REPORT });
  };
};