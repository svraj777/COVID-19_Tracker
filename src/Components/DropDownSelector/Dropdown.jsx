import React, { useState, useEffect } from "react";
import { fatchCountry } from "../Api/api";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./Dropdown.css";

const Coutreypicker = ({ handleCountryChange }) => {
  const [fatchcountries, setfatchcountries] = useState([]);

  useEffect(() => {
    const fatchCountrie = async () => {
      setfatchcountries(await fatchCountry());
    };
    fatchCountrie();
  }, [setfatchcountries]);
  // console.log(fatchcountries);
  return (
    <div className="conatainer">
      <FormControl className={styles.formControl}>
        <NativeSelect
          defaultValue=""
          onChange={(e) => handleCountryChange(e.target.value)}
        >
          <option value="">Global</option>
          {fatchcountries.map((contry, i) => (
            <option value={contry} key={i}>
              {contry}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default Coutreypicker;
