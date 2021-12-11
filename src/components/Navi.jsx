import notification from './assets/Notification.svg';
import account from './assets/Account.svg';
import logo from './assets/logo.svg';
import sr_logo from './assets/sr_logo.svg';
import './layout/home.css';
import Overlay from 'react-bootstrap/Overlay'
import Popover from 'react-bootstrap/Popover'
import React from "react";
import { Link } from 'react-router-dom';

function Navi() {
    const [show, setShow] = React.useState(false);
    const [target, setTarget] = React.useState(null);
    const ref = React.useRef(null);
    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    };

    const [display_logo, setState] = React.useState("flex");
    const [display_logo_sl, setState2] = React.useState("none");

    React.useEffect(() => {
        if (typeof window !== "undefined") {
            window.onscroll = () => {
                let currentScrollPos = window.pageYOffset;
                let maxScroll = document.body.scrollHeight - window.innerHeight;
                if (currentScrollPos > 0 && currentScrollPos < maxScroll+1) {
                    setState("none")
                    setState2("flex")
                } else {
                    setState2("none")
                    setState("flex")
                }
            }
        }
    }, []);
    return (
        <div>
            <div className="logo_pos_chat" style={{ display: display_logo }}>
                <Link to="/" className="btn-action">
                    <img src={logo} className="App-logo" alt="logo" />
                </Link>
            </div>
            <div className="logo_pos_chat_2" style={{ display: display_logo_sl }}>
                <Link to="/" className="btn-action">
                    <img src={sr_logo} className="App-logo" alt="logo" />
                </Link>
            </div>
            <div className="roundedCorner">
                            <div className="act_cont">
                                <div className="noti">
                                    <img src={notification} className="act_bar" alt="notification" height="55px" />
                                </div>
                                <div className="acc">
                                    <img src={account} className="act_bar" alt="account" height="55px" onClick={handleClick} />
                                    <div className="acc_view1" ref={ref} >
                                        <Overlay
                                            show={show}
                                            target={target}
                                            placement="bottom-end"
                                            container={ref}
                                            containerPadding={20}
                                        >
                                <Popover id="popover-contained" placement="left-start">
                                    <Popover.Header as="h3">My Account</Popover.Header>
                                    <Popover.Body>
                                        <div className="ACC_cont">
                                            <div className="myacc_cont">
                                                <div className="signIn">
                                                    <p>Sign In</p>
                                                </div>
                                                <p>OR</p>
                                                <div className="signUp">
                                                    <p>Sign Up</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Popover.Body>
                                </Popover>
                                        </Overlay>
                                    </div>
                                </div>
                            </div>
                        </div>
        </div >
    );
}

export default Navi;