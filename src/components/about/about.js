import React, {Component} from 'react';

class About extends Component{

  render(){
    let resumeData = this.props.resumeData
    let skillArr = resumeData.skills.map(x=>(x + ",  "))
    skillArr[(skillArr.length -1)] = "postgreSQL";

  
    // function listSkills(x.forEach)=>{
    //   skillArr.forEach(element => {
    //     console.log('element', element)
    //     return element + "  "
    //   });
    // };
    return(
            <section id="about">
            <div className="row">
              <div className="twelve columns main-col">
                <h2>About Me</h2>
                {resumeData.aboutMe}
                <h2>Skills</h2>
                {skillArr}
                
                
                <div className="row">
                  <div className="columns contact-details">
                    <h2>Contact Details</h2>
                    <p className="address">
                      <span>Eli Citron</span><br />
                      <span>Chicago, IL</span>
                      {/* <span>928 Judson Ave<br />
                        Evanston, IL 60202 US
                      </span><br /> */}
                      <span>1(224)307-0844</span><br />
                      <span>ebcitron@gmail.com</span>
                    </p>
                  </div>
                  <div className="columns download">
                    <p>
                      <a href="https://resume.creddle.io/resume/bxtgeys1pyo" className="button"><i className="fa fa-download" />View Resume</a>
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