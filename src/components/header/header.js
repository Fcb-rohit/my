import React from "react"

class Header extends React.Component {
    render() {
        let resumeData = this.props.data;
        return (
            <header id="home">
                <nav id="nav-wrap">
                    <a class="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a class="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                    <ul id="nav" class="nav">
                        <li class="current"><a class="smoothscroll" href="#home">Home</a></li>
                        <li><a class="smoothscroll" href="#about">About</a></li>
                        <li><a class="smoothscroll" href="#resume">Resume</a></li>
                        <li><a class="smoothscroll" href="#portfolio">Works</a></li>
                        <li><a class="smoothscroll" href="#testimonials">Testimonials</a></li>
                        <li><a class="smoothscroll" href="#contact">Contact</a></li>
                    </ul>
                </nav>>
                <div class="row banner">
                    <div class="banner-text">
                        <h1 class="responsive-headline">I'm {resumeData.name}.</h1>
                        <h3>{resumeData.intro} Let's <a class="smoothscroll" href="#about">start scrolling</a> and learn more <a class="smoothscroll" href="#about">about me</a>.</h3>
                        <hr />
                        <ul class="social">
                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
                <p class="scrolldown">
                    <a class="smoothscroll" href="#about"><i class="icon-down-circle"></i></a>
                </p>
            </header>
        )
    }
}

export default Header