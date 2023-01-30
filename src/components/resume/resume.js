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
                                <h3>Industrial Training Institute</h3>
                                <p className="info">Diploma in Information technology (IT) <span>&bull;</span> <em className="date">August 2017</em></p>
                            </div>
                        </div> {/*} item end */}
                    </div> {/*} main-col end */}
                </div> {/*} End Education */}
                {/*} Work
      */}
                <div className="row work">
                    <div className="three columns header-col">
                        <h1><span>Present</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>Graposs Edutech</h3>
                                <p className="info">Web & App Developer <span>&bull;</span> <em className="date">September 2017 - Present</em></p>
                                <p>Worked on Core PHP , Worpdress ,AngularJs and Ionic framework</p>
                            </div>
                        </div> {/*} item end */}
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>PagalLyrics.com</h3>
                                <p className="info">FullStack Developer <span>&bull;</span></p>
                                <p>Created a complete database and website pages stucture.</p>
                            </div>
                            <div className="twelve columns">
                                <h3>Parvati Online</h3>
                                <p>Created a wallet and franchise system for this.</p>
                            </div>
                        </div> {/*} item end */}
                        <div className="row item">
                            <div className="twelve columns">
                                <h3>IONIC App</h3>
                                <p className="info">Available on play store named : Setmaro,AbhyasPoint,Eclara,Swastika Academy <span>&bull;</span></p>
                            </div>
                        </div> {/*} item end */}
                    </div> {/*} main-col end */}
                </div> {/*} End Work */}
                {/*} Skills */}
                <div className="row skill">
                    <div className="three columns header-col">
                        <h1><span>Skills</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <div className="bars">
                            <ul className="skills">
                                <li><span className="bar-expand wordpress"></span><em>Wordpress</em></li>
                                <li><span className="bar-expand php"></span><em>Core PHP</em></li>
                                <li><span className="bar-expand jquery"></span><em>Jquery</em></li>
                                <li><span className="bar-expand css"></span><em>CSS</em></li>
                                <li><span className="bar-expand javascript"></span><em>Javascript</em></li>
                                <li><span className="bar-expand ionic"></span><em>Ionic</em></li>
                                <li><span className="bar-expand react"></span><em>React</em></li>
                                <li><span className="bar-expand angular"></span><em>Angular</em></li>
                                <li><span className="bar-expand angular"></span><em>Node Js</em></li>
                                <li><span className="bar-expand angular"></span><em>Python</em></li>
                                <li><span className="bar-expand angular"></span><em>Laravel</em></li>
                                <li><span className="bar-expand angular"></span><em>CodeIgniter</em></li>
                            </ul>
                        </div>{/*} end skill-bars */}
                    </div> {/*} main-col end */}
                </div> {/*} End skills */}
            </section>
        )
    }
}

export default Resume
