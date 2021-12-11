import p1 from './assets/chat_head_img/p1.jpg'
import p2 from './assets/chat_head_img/p2.jpg'
import p3 from './assets/chat_head_img/p3.jpg'
import p4 from './assets/chat_head_img/p4.jpg'
import p5 from './assets/chat_head_img/p5.jpg'
import p6 from './assets/chat_head_img/p6.jpg'
import p7 from './assets/chat_head_img/p7.jpg'
import p8 from './assets/chat_head_img/p8.jpg'
import chat_search from './assets/chat_search.svg'
import bg_head from './assets/chat_head_img/chat_hover.svg'
import './layout/messenger.css';
import React from "react";
import Sidebr from './Sidebr';
import { Link } from 'react-router-dom';
import Navi from './Navi';

function Messenger() {

    return (
        <div className="bg_chat">
            <><Navi /></>
            <><Sidebr /></>
            <div className="App_chat">
                <body className="App-body_chat">
                    <div class="menubar">
                        <div class="lit_menu">
                            <p>Art talk</p>
                        </div>
                    </div>
                    <br /><br /><br /><br />
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <div className="chat_cont">
                        <div className="chat_header">
                            <img src={chat_search} className="chat_search" alt="chat_search" />
                        </div>
                        <div className="chat_list">
                        </div>
                    </div>
                    <div className="bg_chat_head">
                        <img src={bg_head} className="bg_head" alt="bg_head" />
                            <div className="frame_chat_head">
                                    <div class="circle" style={{ '--total': 8}}>
                                        <div class="stat" style={{ '--i': 1 }}>
                                            <img src={p1} className="p1" alt="p1" />
                                        </div>
                                        <div class="stat" style={{ '--i': 2 }}>
                                            <img src={p2} className="p2" alt="p2" />
                                        </div>
                                        <div class="stat" style={{ '--i': 3 }}>
                                            <img src={p3} className="p3" alt="p3" />
                                        </div>
                                        <div class="stat" style={{ '--i': 4 }}>
                                            <img src={p4} className="p4" alt="p4" />
                                        </div>
                                        <div class="stat" style={{ '--i': 5 }}>
                                            <img src={p5} className="p5" alt="p5" />
                                        </div>
                                        <div class="stat" style={{ '--i': 6 }}>
                                            <img src={p6} className="p6" alt="p6" />
                                        </div>
                                        <div class="stat" style={{ '--i': 7 }}>
                                            <img src={p7} className="p7" alt="p7" />
                                        </div>
                                        <div class="stat" style={{ '--i': 8 }}>
                                            <img src={p8} className="p8" alt="p8" />
                                        </div>
                                    </div>
                            </div>
                    </div>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                </body>
            </div>
        </div>
);}

export default Messenger;