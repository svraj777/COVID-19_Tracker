import React, { Component } from "react";
import Cards from "./Components/Cards/Cards";
import Charts from "./Components/Charts/charts";
import DropDown from "./Components/DropDownSelector/Dropdown";
import { FetchData } from "./Components/Api/api";
import style from "./App.css";
class App extends Component {
  state = {
    data: {},
    conutry: "",
  };
  async componentDidMount() {
    const data = await FetchData();
    //  console.log(data);
    this.setState({ data: data });
  }

  handleCountryChange = async (conutry) => {
    console.log(conutry);
    const data = await FetchData(conutry);
    console.log(data);
    this.setState({ data: data, conutry: conutry });
  };
  render() {
    const { data, conutry } = this.state;
    return (
      <div className="container">
        <h1>COVID-19 Tracker</h1>
        <Cards data={data} />
        <DropDown handleCountryChange={this.handleCountryChange}></DropDown>
        <Charts data={data} conutry={conutry}></Charts>
      </div>
    );
  }
}

export default App;
