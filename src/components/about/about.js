import React from "react"
class About extends React.Component {

    render() {
        let resumeData = this.props.data;
        return (

            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <img className="profile-pic" src="images/profilepic.jpg" alt="" />
                    </div>
                    <div className="nine columns main-col">
                        <h2>About Me</h2>
                       <p>{resumeData.about}</p>
                        <div className="row">
                            <div className="columns contact-details">
                                <h2>Contact Details</h2>
                                <p className="address">
                                    <span>Rohit Kashyap</span><br />
                                    <span>New Delhi, India</span><br />
                                    <span>(+91) 8700 1712 80</span><br />
                                    <span>rightrohit96@gmail.com</span>
                                </p>
                            </div>
                        </div> {/* end row */}
                    </div> {/* end .main-col */}
                </div>
            </section>
        )
    }
}
export default About