import Sidebr from './Sidebr';
import './layout/publish.css';
import React from "react";
import Navi from './Navi';

function Publish() {

    return (
        <div className="bg_chat">
            <><Navi /></>
            <><Sidebr/></>

            <div className="App_chat">
                <body className="App-body_chat">
                    <div class="menubar">
                            <div class="lit_menu" style={{ marginLeft: '40px' }}>
                                <p>Art talk</p>
                            </div>
                    </div>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

                    <div className="frame_cont">
                        <div class="frame">
                            <div class="image-content">
                                <div class="image-itemone "></div>
                                <div class="image-itemtwo"></div>
                                <div class="image-itemthree"></div>
                                <div class="image-itemfour"></div>
                                <div class="image-itemfive"></div>
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
    );
}

export default Publish;