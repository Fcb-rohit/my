import React from "react"

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="row">
                    <div className="twelve columns">
                        <ul className="social-links">
                        <li><a href="mailto:rightrohit96@gmail.com"><i className="fa fa-envelope"></i></a></li>
                            <li><a href="https://twitter.com/code_rohit" target="_blank"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="https://www.instagram.com/itsrohit_kashyap/" target="_blank"><i className="fa fa-instagram"></i></a></li>
                        </ul>
                        <ul className="copyright">
                        <li>&copy; Copyright {(new Date().getFullYear())} Rohit Kashyap</li>
                        </ul>
                    </div>
                    <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer