import React from "react";

class ChildTest extends React.Component {
  render() {
    console.log(this.props);
    //let name = this.props.name;
    //let age = this.props.age;
    let a = "";
    let { name, age, address, arrJobs } = this.props;
    return (
      <>
        <div>
          Child Component: {name} - {age} - {address}
        </div>
        <div className="Jobs-lists">
          {
            (a = arrJobs.map((item, index) => {
              return (
                <div key={item.id}>
                  {item.title} - {item.salary}
                </div>
              );
            }))
          }
          {console.log("check map:", a)}
        </div>
      </>
    );
  }
}

export default ChildTest;
