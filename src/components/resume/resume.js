import React from "react"

class Resume extends React.Component {
    render() {
        return (
            <section id="resume">
                {/*} Education*/}
                <div className="row education">
                    <div className="three columns header-col">
                        <h1><span>Education</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>Institute of Life</h3>
                                <p className="info">Diploma in Information technology <span>&bull;</span> <em className="date">August 2017</em></p>
                            </div>
                        </div> {/*} item end */}
                    </div> {/*} main-col end */}
                </div> {/*} End Education */}
                {/*} Work
      */}
                <div className="row work">
                    <div className="three columns header-col">
                        <h1><span>Work</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>Graposs Edutech</h3>
                                <p className="info">Web Developer <span>&bull;</span> <em className="date">September 2017 - Present</em></p>
                                <p>Worked on core php , worpdress ,angular js and ionic framework</p>
                            </div>
                        </div> {/*} item end */}
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>PagalLyrics.com</h3>
                                <p className="info">FullStack Developer <span>&bull;</span></p>
                                <p>Created a complete database and website pages stucture.</p>
                            </div>
                        </div> {/*} item end */}
                    </div> {/*} main-col end */}
                </div> {/*} End Work */}
                {/*} Skills
      */}
                <div className="row skill">
                    <div className="three columns header-col">
                        <h1><span>Skills</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <div className="bars">
                            <ul className="skills">
                                <li><span className="bar-expand photoshop"></span><em>Wordpress</em></li>
                                <li><span className="bar-expand illustrator"></span><em>Core PHP</em></li>
                                <li><span className="bar-expand wordpress"></span><em>Jquery</em></li>
                                <li><span className="bar-expand css"></span><em>CSS</em></li>
                                <li><span className="bar-expand css"></span><em>Javascript</em></li>
                                <li><span className="bar-expand css"></span><em>Ionic</em></li>
                            </ul>
                        </div>{/*} end skill-bars */}
                    </div> {/*} main-col end */}
                </div> {/*} End skills */}
            </section>
        )
    }
}

export default Resume