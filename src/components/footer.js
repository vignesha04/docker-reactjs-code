import React, { Component } from 'react';


export default class Footer extends Component {
  render() {
    return (
      <footer className="page-footer">
                <div className="container">
                  <div className="row">
                    <div className="col l6 s12">
                      <h5 className="white-text">Sample project by PERSEVERANCE 1st Batch</h5>
                      <p className="grey-text text-lighten-4"> ReactJs Application deployment by using Kubernetes.</p>
                      <p className="grey-text text-lighten-4"> Workflow of the Application deployment:</p>
                      <p className="grey-text text-lighten-4"> Git → Jenkins → SonarQube → Docker → Kubernetes</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                      <h5 className="white-text">Links</h5>
                      <ul>
                        <li><a className="grey-text text-lighten-3" href="#!">click here</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="footer-copyright">
                  <div className="container">
                  © 2024 Copyright Text
                  <a className="grey-text text-lighten-4 right" href="#!">Thank You</a>
                  </div>
                </div>
              </footer>
    );
  }
}
