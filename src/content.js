import React, { useEffect } from 'react';
import { FaAngleDown, FaPlay } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { FaCrown } from "react-icons/fa";
import './stylesheets/content.css';
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
function Content(props) {
    useEffect(() => {
        for (var i = 0; i < document.getElementsByClassName("nextbtn").length; i++)
            document.getElementsByClassName("nextbtn")[i].style.left = document.getElementById("morelikethis").offsetWidth - 110 + "px";
    })

    const right = (a) => {
        var element = document.getElementById(a);
        element.scrollLeft = element.scrollLeft + 200;
        console.log("next");
    }

    const left = (a) => {
        var element = document.getElementById(a);
        element.scrollLeft = element.scrollLeft - 200;
        console.log("previous");
    }

    function postop(){
        var contentframe = document.getElementById("contentframe");
        var angleup = document.getElementById("angleup");
       
        contentframe.style.top=window.screen.availHeight-contentframe.offsetHeight-40+"px";
        
    }
    function posbottom(){
        var contentframe = document.getElementById("contentframe");
        var angledown = document.getElementById("angledown");
       
        contentframe.style.top="100%";
        
    }
    const data = [{ name: "jatin" }, { name: "jatin" }, { name: "jatin" }, { name: "jatin" }, { name: "jatin" }, { name: "jatin" }, { name: "jatin" }, { name: "jatin" }, { name: "jatin" }, { name: "jatin" }, { name: "jatin" }, { name: "jatin" }, { name: "jatin" }, { name: "jatin" }, { name: "jatin" }, { name: "jatin" }]
    return (
        <div style={{position:"fixed", width: "100%", height: "100%"}}>
            <div id = "contentpgbanner">
                <div className='slideroverlay'>
                    <div className="slidedesc">
                        <span className="title">Twilight</span><br />
                        <span><button className = "taskbtn"><FaCrown />&nbsp;&nbsp;Premium</button>&nbsp;&nbsp;&nbsp;<button className = "taskbtn"><FaPlay />&nbsp;&nbsp;Play</button>&nbsp;&nbsp;&nbsp;<button className = "taskbtn"><FaPlus />&nbsp;&nbsp;List</button></span>
                        <br /><br />
                        <span className="text">('The House of Paper') is a Spanish heist crime drama television series created by Álex Pina. The series traces two long-prepared heists led by the Professor (Álvaro Morte), one on the Royal Mint of Spain, and one on the Bank of Spain, told from the perspective of one of the robbers, Tokyo (Úrsula Corberó).</span>
                    </div>
                    <center>
                        <button style={{ background: "none", border: "none", transform: "translateY(90vh)" }} className="heading" id = "angleup" onClick = {postop}><FaAngleUp /></button>
                    </center>
                </div>
            </div>
            <div style={{ width: "100%",transition:"1s ease", height: "100%", background: "#101010",position:"absolute",top:"100%",overflow:"auto" }} id = "contentframe">
                <br /><br/>
                <center>
                <button style={{ background: "none",color:"white", border: "none" }} className="heading" id = "angledown" onClick = {posbottom}><FaAngleDown /></button>
                </center>
                
                <span className="heading"> Trailers & Teasers</span><br /><br />
                <div style={{ paddingLeft: "20px" }}><img src="https://cdn.wallpapersafari.com/23/48/BjR80O.jpg" className="media"></img></div>
                <br /><br /><br />

                <br /><br />
                <span className="heading"> More Like This</span>

                <div style={{ width: "100%", overflow: "hidden", display: "flex", scrollBehavior: "smooth", behavior: 'smooth' }} id="morelikethis">
                    <button onClick={() => right("morelikethis")} className="nextbtn"><span className="heading"> <FaAngleRight /> </span> </button>
                    <button onClick={() => left("morelikethis")} className="previousbtn"> <span className="heading"> <FaAngleLeft /> </span> </button>
                    {data.map((element, index) => (<div key={index} style={{ padding: "10px" }}><img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3669/593669-v" className="media"></img></div>))}
                </div>
                <br/><br/>
            </div>

            </div>


     
    );
}

export default Content;