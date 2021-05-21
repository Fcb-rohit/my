import React from "react"

class Header extends React.Component {
    render() {
        let resumeData = this.props.data;
        return (
            <header id="home">
                <nav id="nav-wrap">
                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a className="mobile-btn" href="javascript:void(0);" title="Hide navigation">Hide navigation</a>
                    <ul id="nav" className="nav">
                        <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                        <li><a className="smoothscroll" href="#about">About</a></li>
                        <li><a className="smoothscroll" href="#resume">Resume</a></li>
                        <li><a className="smoothscroll" href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <div className="row banner">
                    <div className="banner-text">
                        <h1 className="responsive-headline">I'm {resumeData.name}.</h1>
                        <h3>{resumeData.intro} Let's <a className="smoothscroll" href="#about">start scrolling</a> and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
                        <hr />
                        <ul className="social">
                            <li><a href="mailto:rightrohit96@gmail.com"><i className="fa fa-envelope"></i></a></li>
                            <li><a href="https://twitter.com/code_rohit" target="_blank" rel="noreferrer"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="https://www.instagram.com/itsrohit_kashyap/" target="_blank" rel="noreferrer"><i className="fa fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
                <p className="scrolldown">
                    <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
                </p>
            </header>
        )
    }
}

export default Header