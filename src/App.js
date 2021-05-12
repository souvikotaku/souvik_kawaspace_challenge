import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [userdata, setUserData] = useState([]);
  const [updatedata, setUpdateData] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20"
      )
      .then((response) => {
        console.log(response.data.results);
        setUserData(response.data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  const updateData = (updatedata) => {
    console.log(updatedata);
    setUpdateData(updatedata);
    console.log(updatedata.name.title);
  };

  return (
    <div className="App" style={{ padding: "10px" }}>
      <br />
      <div
        class="row text-center"
        style={{ paddingLeft: "20%", paddingRight: "20%" }}
      >
        <div className="col-sm-12">
          <div className="card" style={{ boxShadow: "5px 10px 18px #888888" }}>
            <div className="row no-gutters">
              <div className="col-auto">
                <img
                  src={
                    updatedata.picture
                      ? updatedata.picture.large
                      : // : "http://placehold.it/200"
                      userdata[0]
                      ? userdata[0].picture.large
                      : ""
                  }
                  className="img-fluid"
                />
              </div>
              <div className="col">
                <div
                  className="card-block px-2 text-left"
                  style={{ marginLeft: "15px" }}
                >
                  <h4 className="card-title">
                    {updatedata.name
                      ? updatedata.name.title
                      : userdata[0]
                      ? userdata[0].name.title
                      : ""}{" "}
                    {updatedata.name
                      ? updatedata.name.first
                      : userdata[0]
                      ? userdata[0].name.first
                      : ""}{" "}
                    {updatedata.name
                      ? updatedata.name.last
                      : userdata[0]
                      ? userdata[0].name.last
                      : ""}
                  </h4>
                  <p className="card-text">
                    {updatedata.location
                      ? updatedata.location.street.number
                      : userdata[0]
                      ? userdata[0].location.street.number
                      : ""}
                    ,{" "}
                    {updatedata.location
                      ? updatedata.location.street.name
                      : userdata[0]
                      ? userdata[0].location.street.name
                      : ""}
                    ,{" "}
                    {updatedata.location
                      ? updatedata.location.state
                      : userdata[0]
                      ? userdata[0].location.state
                      : ""}
                    ,{" "}
                    {updatedata.location
                      ? updatedata.location.country
                      : userdata[0]
                      ? userdata[0].location.country
                      : ""}
                    ,{" "}
                    {updatedata.location
                      ? updatedata.location.postcode
                      : userdata[0]
                      ? userdata[0].location.postcode
                      : ""}
                    <br />
                    {updatedata.location
                      ? updatedata.location.timezone.offset
                      : userdata[0]
                      ? userdata[0].location.timezone.offset
                      : ""}{" "}
                    -{" "}
                    {updatedata.location
                      ? updatedata.location.timezone.description
                      : userdata[0]
                      ? userdata[0].location.timezone.description
                      : ""}
                    <br />
                    <span style={{ color: "red" }}>
                      {(updatedata
                        ? updatedata.gender
                        : userdata[0]
                        ? userdata[0].gender
                        : ""
                      )
                        .charAt(0)
                        .toUpperCase() +
                        (updatedata
                          ? updatedata.gender
                          : userdata[0]
                          ? userdata[0].gender
                          : ""
                        ).slice(1)}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div class="row ">
        {userdata.map((data) => (
          <div
            class="col-sm-3"
            onClick={() => {
              updateData(data);
            }}
          >
            <div
              class="card text-left"
              style={{ boxShadow: "5px 10px 18px #888888" }}
              id="indicard"
            >
              <div class="card-body">
                <p class="card-text">
                  {data.gender.charAt(0).toUpperCase() + data.gender.slice(1)},{" "}
                  {data.nat}
                </p>
                <h5 class="card-title">
                  {data.name.title} {data.name.first} {data.name.last}
                </h5>
                <p class="card-text" style={{ color: "red" }}>
                  {data.email}
                </p>
                {/* <a href="#" class="btn btn-primary">
                  Go somewhere
                </a> */}
              </div>
            </div>
            <br />
          </div>
        ))}
      </div>
      <br />
      <p>made by souvik das</p>
    </div>
  );
}

export default App;
