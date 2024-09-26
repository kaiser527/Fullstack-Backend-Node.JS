import React from "react";
import ChildTest from "./ChildTest";

class Test extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    arrJobs: [
      {
        id: "abcJob1",
        title: "Developer",
        salary: "500$",
      },
      {
        id: "abcJob2",
        title: "Tester",
        salary: "400$",
      },
      {
        id: "abcJob3",
        title: "Project managers",
        salary: "1000$",
      },
    ],
  };
  handleOnChangeFname = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };
  handleOnChangeLname = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };
  handleOnSubmit = (event) => {
    event.preventDefault(event);
    console.log(this.state);
  };
  render() {
    let arr = [
      {
        id: 1,
        name: "kiana",
        age: 16,
      },
      {
        id: 2,
        name: "mei",
        age: 18,
      },
      {
        id: 3,
        name: "bronya",
        age: 17,
      },
    ];
    let filter = arr.filter((item, index) => {
      return item && item.name.includes("n");
    });
    let sortName = arr.sort((item1, item2) => {
      return item1.name.localeCompare(item2.name);
    });
    return (
      <>
        <form>
          <label htmlFor="fname">First name:</label>
          <br />
          <input
            type="text"
            value={this.state.firstName}
            onChange={(event) => this.handleOnChangeFname(event)}
          />
          <br />
          <label htmlFor="lname">Last name:</label>
          <br />
          <input
            type="text"
            value={this.state.lastName}
            onChange={(event) => this.handleOnChangeLname(event)}
          />
          <br />
          <input
            className="button"
            type="button"
            value="Submit"
            onClick={(event) => this.handleOnSubmit(event)}
          />
        </form>
        <div className="filtered-item">
          {filter.map((item, index) => {
            return (
              <div key={item.id}>
                {item.name} - {item.age}
              </div>
            );
          })}
        </div>
        <div>
          {sortName.map((item, index) => {
            return (
              <div key={item.id}>
                {item.name} - {item.age}
              </div>
            );
          })}
        </div>
        <br />
        <ChildTest
          name={this.state.firstName}
          age={"25"}
          address={"mat trang"}
          arrJobs={this.state.arrJobs}
        />
      </>
    );
  }
}

export default Test;
