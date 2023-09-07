import React from "react";

const Skills = () => {
  return (
    <>
      <div style={{ backgroundColor: "#feefe8" }} id="skill">
        <div className="rounded-top-5" style={{ backgroundColor: "#f8f5f2" }}>
          <div
            className="container rounded-5 "
            style={{ backgroundColor: "#f8f5f2" }}
          >
            <p className="fw-bold fs-2 pt-3">Skills</p>
            <div className="row p-3">
              <div className="col-md-6 mb-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">
                      <img
                        src="./img/data-science.png"
                        width="60px"
                        alt="Data Science"
                      />
                      Data Scientist
                    </h5>
                    <p className="card-text">
                      Yah masih belum bisa masih lagi di tahap Belajar
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">
                      <img
                        src="./img/full-stack.png"
                        width="60px"
                        alt="Full Stack Developer"
                      />
                      Full Stack Developer
                    </h5>
                    <p className="card-text">
                      Sama sih masih belum bisa masih lagi di tahap belajar
                      ehe:v
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{ backgroundColor: "#f8f5f2" }}>
        <p className="mt-3 fw-bold fs-3">Soft Skills</p>
        <div className="row ">
          <div className="col-lg-3 col-6 mb-3">
            <div className="card">
              <div
                style={{ height: "75px" }}
                className="card-body  d-flex align-items-center"
              >
                <h5 className="card-title">
                  <img
                    src="./img/web-analytics.png"
                    width="40px"
                    alt="Data Visual"
                  />
                  Data Visual
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6 mb-3">
            <div className="card">
              <div
                style={{ height: "75px" }}
                className="card-body  d-flex align-items-center"
              >
                <h5 className="card-title">
                  <img
                    src="./img/analysis.png"
                    width="40px"
                    alt="Data Analysis"
                  />
                  Data Analysis
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="card">
              <div
                style={{ height: "75px" }}
                className="card-body  d-flex align-items-center"
              >
                <h5 className="card-title">
                  <img
                    src="./img/game-development.png"
                    width="40px"
                    alt="Game Developer"
                  />
                  Game Developer
                </h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className="card">
              <div
                style={{ height: "75px" }}
                className="card-body  d-flex align-items-center"
              >
                <h5 className="card-title">
                  <img src="./img/computer.png" width="40px" alt="Networking" />
                  Networking
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
