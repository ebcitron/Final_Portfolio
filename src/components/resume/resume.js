import React, {Component} from 'react';


class Resume extends Component{
    render(){
        return(

                <section id="resume">
                  {/* Education
                ----------------------------------------------- */}
                  <div className="row education">
                    <div className="three columns header-col">
                      <h1><span>Education</span></h1>
                    </div>
                    <div className="nine columns main-col">
                      <div className="row item">
                        <div className="twelve columns">
                          <h3>Lambda School</h3>
                          <p className="info">Full Stack Web Developer <span>•</span> <em className="date">April 2020</em></p>
                          <p>Lambda School is a 9+ month computer science & software engineering program that provides an immersive hands-on curriculum with a focus on computer science, and fullstack web development. Students in this program...
Approach all coding challenges using pair programming.
Utilize agile software development and Git workflow on all projects. 
Gain hands-on experience with client and server testing,
Design original user experiences across a range of web and mobile platforms, from ideation, to wireframing, to final product.
Complete all curriculum course work including: React, Redux, Node, Express, MongoDB, Jest, Python, Django, etc.
Write production-ready code using ReactJS, Redux, and CSS on the frontend and NodeJS and Express on the backend to build single page applications.

                          </p>
                        </div>
                      </div> {/* item end */}
                      <div className="row item">
                        <div className="twelve columns">
                          <h3>School of Cool Designers</h3>
                          <p className="info">B.A. Degree in Graphic Design <span>•</span> <em className="date">March 2003</em></p>
                          <p>
                            This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                            Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                            nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan
                            ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat
                          </p>
                        </div>
                      </div> {/* item end */}
                    </div> {/* main-col end */}
                  </div> {/* End Education */}
                  {/* Work
                ----------------------------------------------- */}
                  <div className="row work">
                    <div className="three columns header-col">
                      <h1><span>Work</span></h1>
                    </div>
                    <div className="nine columns main-col">
                      <div className="row item">
                        <div className="twelve columns">
                          <h3>Awesome Design Studio</h3>
                          <p className="info">Senior UX Designer <span>•</span> <em className="date">March 2010 - Present</em></p>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Nullam dictum felis eu pede mollis pretium.
                          </p>
                        </div>
                      </div> {/* item end */}
                      <div className="row item">
                        <div className="twelve columns">
                          <h3>Super Cool Studio</h3>
                          <p className="info">UX Designer <span>•</span> <em className="date">March 2007 - February 2010</em></p>
                          <p>
                            This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                            Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                            nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan
                            ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat
                          </p>
                        </div>
                      </div> {/* item end */}
                    </div> {/* main-col end */}
                  </div> {/* End Work */}
                  {/* Skills
                ----------------------------------------------- */}
                  <div className="row skill">
                    <div className="three columns header-col">
                      <h1><span>Skills</span></h1>
                    </div>
                    <div className="nine columns main-col">
                      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                        voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                        voluptatem sequi nesciunt.
                      </p>
                      {/* <div className="bars">
                        <ul className="skills">
                          <li><span className="bar-expand photoshop" /><em>Photoshop</em></li>
                          <li><span className="bar-expand illustrator" /><em>Illustrator</em></li>
                          <li><span className="bar-expand wordpress" /><em>Wordpress</em></li>
                          <li><span className="bar-expand css" /><em>CSS</em></li>
                          <li><span className="bar-expand html5" /><em>HTML5</em></li>
                          <li><span className="bar-expand jquery" /><em>jQuery</em></li>
                        </ul>
                      </div>end skill-bars */}
                    </div> {/* main-col end */}
                  </div> {/* End skills */}
                </section>
              );
            }
          }
export default Resume;


