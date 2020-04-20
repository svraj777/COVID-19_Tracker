import React, { Component } from "react";
import axios from "axios";
const url = "https://covid19.mathdro.id/api";
export const FetchData = async (conutry) => {
  let chnageurl = url;
  if (conutry) {
    chnageurl = `${url}/countries/${conutry}`;
  }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(chnageurl);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    return error;
  }
};

export const fatchDailydata = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    return data.map(({ confirmed, deaths, reportDate: date }) => ({
      confirmed: confirmed.total,
      deaths: deaths.total,
      date,
    }));
  } catch (error) {
    return error;
  }
};

export const fatchCountry = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    return countries.map((countrie) => countrie.name);
  } catch (error) {
    return error;
  }
};
