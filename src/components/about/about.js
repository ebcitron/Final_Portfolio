import React, {Component} from 'react';

class About extends Component{
    render(){
      let resumeData = this.props.resumeData
        return(
            <section id="about">
            <div className="row">
              <div className="twelve columns main-col">
                <h2>About Me</h2>
                {resumeData.aboutMe}
                <div className="row">
                  <div className="columns contact-details">
                    <h2>Contact Details</h2>
                    <p className="address">
                      <span>Eli Citron</span><br />
                      <span>926 Judson Ave<br />
                        Evanston, IL 60202 US
                      </span><br />
                      <span>1(224)307-0844</span><br />
                      <span>ebcitron@gmail.com</span>
                    </p>
                  </div>
                  <div className="columns download">
                    <p>
                      <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
                    </p>
                  </div>
                </div> {/* end row */}
              </div> {/* end .main-col */}
            </div>
          </section>
        )
    }
}

export default About;