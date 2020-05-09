import React, {Component} from 'react';


class ContactUs extends Component{
    render(){
      let resumeData = this.props.resumeData;
        return(
            
      <section id="contact">
      <div className="row">
        <h1>Get In Touch.</h1>
      </div>
        
        
      {/*
        <div className="two columns header-col">
        </div> 
        <div className="ten columns">
          
        </div>
      </div>
      */}
      <div className="row">
        <div className="twelve columns">
          {/* form */}
          <form action method="post" id="contactForm" name="contactForm">
            <fieldset>
              <div>
                <label htmlFor="contactName">Name <span className="required">*</span></label>
                <input type="text"  size={35} id="contactName" name="contactName" />
              </div>
              <div>
                <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                <input type="text"  size={35} id="contactEmail" name="contactEmail" />
              </div>
              {/* <div>
                <label htmlFor="contactSubject">Subject</label>
                <input type="text" defaultValue size={35} id="contactSubject" name="contactSubject" />
              </div> */}
              <div>
                <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                <textarea cols={50} rows={15} id="contactMessage" name="contactMessage"  />
              </div>
              <div>
                <button className="submit">Submit</button>
                <span id="image-loader">
                  <img alt="" src="images/loader.gif" />
                </span>
              </div>
            </fieldset>
          </form> {/* Form End */}
          {/* contact-warning */}
          <div id="message-warning"> Error man</div>
          {/* contact-success */}
          <div id="message-success">
            <i className="fa fa-check" />Your message was sent, thank you!<br />
          </div>
        </div>
        {/*<aside className="four columns footer-widgets">
           <div className="widget widget_contact">
            <h4>Address and Phone</h4>
            <p className="address">
             {resumeData.address}
             </p>
              <span>{resumeData.phoneNumber}</span>
           
          </div> 
           <div className="widget widget_tweets">
            <h4 className="widget-title">Latest Tweets</h4>
            <ul id="twitter">
              <li>
                <span>
                  This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                  Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
                  <a href="#">http://t.co/CGIrdxIlI3</a>
                </span>
                <b><a href="#">2 Days Ago</a></b>
              </li>
              <li>
                <span>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                  eaque ipsa quae ab illo inventore veritatis et quasi
                  <a href="#">http://t.co/CGIrdxIlI3</a>
                </span>
                <b><a href="#">3 Days Ago</a></b>
              </li>
            </ul>
          </div> 
        </aside>*/}
      </div>
    </section>

        )
    }
}

export default ContactUs;