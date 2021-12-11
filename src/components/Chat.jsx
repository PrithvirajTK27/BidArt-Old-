import rec1 from './assets/rec1.png';
import rec2 from './assets/rec2.png';
import rec3 from './assets/rec3.png';
import rec4 from './assets/rec4.png';
import './layout/chat.css';
import React from "react";
import Sidebr from './Sidebr';
import Navi from './Navi';

function Chat() {

    return (

        <div className="bg_chat">
            <><Navi /></>
            <>
                <Sidebr />
            </>
            <div className="App_chat">
                <body className="App-body_chat">
                    <div class="menubar">
                        <div class="lit_menu" style={{ marginLeft: '40px' }}>
                            <p>Art talk</p>
                            </div>
                    </div>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br /><br /><br /><br />
                    <div className="frame_cont">
                    <div class="frame">
                        <div class="rec">
                            <p> shared with you</p>
                            <img src={rec1} className="rec1" alt="rec1" />
                            <img src={rec2} className="rec2" alt="rec2" />
                            <img src={rec3} className="rec3" alt="rec3" />
                            <img src={rec4} className="rec4" alt="rec4" />
                        </div>
                        </div>
                        </div>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                </body>
            </div>

            <div class="footer">
                <div class="footer_body">
                    <div class="each_footer">
                        <h1> About </h1>
                        <p> News </p>
                        <p> Career </p>
                        <p> Policies </p>
                        <br /><br />
                    </div>
                    <div class="each_footer">
                        <h1> Support </h1>
                        <p> Help </p>
                        <p> Raise issue </p>
                    </div>
                    <div class="each_footer">
                        <h1> Contact </h1>
                        <p> Facebook </p>
                        <p> Email </p>
                        <p> Twitter </p>
                    </div>
                </div>
            </div>
        </div>
);}

export default Chat;