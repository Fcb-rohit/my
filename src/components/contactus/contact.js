import React from "react"

class Contact extends React.Component {
    render() {
        return (
            <section id="contact">
                <div className="row section-head">
                    <div className="two columns header-col">
                        <h1><span>Get In Touch.</span></h1>
                    </div>
                    <div className="ten columns">
                        <p className="lead">Lets start work together, connect with me on this email <a href="mailto:rightrohit96@gmail.com">rightrohit96@gmail.com</a></p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact