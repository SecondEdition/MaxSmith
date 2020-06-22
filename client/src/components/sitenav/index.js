import React, { Fragment } from 'react';
import '../../App.css';
import Modal from '../modal/';
import AboutMe from '../aboutme/';


class SiteNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
        }
        showModal = () => {
        this.setState(prev=>({
            show: !prev.show
        }));
    };
    render() {
        return (
            <Fragment>
                <nav role="navigation" className="site-nav">
                    <ul className="site-nav-list">
                        {/* link to portfolio page */}
                        <li className="site-nav-list-item">
                            <a 
                                className="site-nav-link"
                                href="#Works">
                            Works
                            </a>
                        </li>

                        {/* link to info overlay */}
                        <li className="site-nav-list-item">
                            <a 
                                className="site-nav-link"
                                href="#About"
                                onClick={e => {
                                this.showModal();
                                }}
                                >
                            About
                            </a>
                        </li>

                        {/* link to contact form overlay */}
                        <li className="site-nav-list-item">
                            <a 
                                className="site-nav-link"    
                                href="#Contact">
                            Contact
                            </a>
                        </li>
                    </ul>
                </nav>
                <Modal onClose={this.showModal} show={this.state.show}>
                    <AboutMe />
                </Modal>
            </Fragment>

        );
    }
}

export default SiteNav;