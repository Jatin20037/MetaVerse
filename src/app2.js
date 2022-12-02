import React, { useEffect, useState } from 'react';
import './stylesheets/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel';
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
function App2(props) {
    console.log(document.getElementsByClassName("nextbtn"));
    useEffect(() => {
        for (var i = 0; i < document.getElementsByClassName("nextbtn").length; i++)
            document.getElementsByClassName("nextbtn")[i].style.left = document.getElementById("latestrelease").offsetWidth - 110 + "px";
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

    const data = [{ name: "jatin" }, { name: "jatin" }, { name: "jatin" }, { name: "jatin" }, { name: "jatin" }, { name: "jatin" }, { name: "jatin" }, { name: "jatin" }, { name: "jatin" }, { name: "jatin" }, { name: "jatin" }, { name: "jatin" }, { name: "jatin" }, { name: "jatin" }, { name: "jatin" }, { name: "jatin" }]
    return (
        <div style={{ width: "100%", height: "auto", background: "#101010" }}>


            <Carousel id="carousel" style={{ height: "70%" }}>
                <Carousel.Item >

                    <div className="backgrounddiv">

                        <div className='slideroverlay'>
                            <div className="slidedesc">
                                <span className="title">Money Heist</span><br />
                                <span><button style= {{background:"rgba(255,255,255,0.4)",paddingLeft:"10px",paddingRight:"10px",borderRadius:"5px",border:"none"}}><FaPlay/>&nbsp;&nbsp;Play</button>&nbsp;&nbsp;&nbsp;<button style= {{background:"rgba(255,255,255,0.4)",paddingLeft:"10px",paddingRight:"10px",borderRadius:"5px",border:"none"}}><FaPlus/>&nbsp;&nbsp;List</button></span>
                                <br /><br/>
                                <span className="text">('The House of Paper') is a Spanish heist crime drama television series created by Álex Pina. The series traces two long-prepared heists led by the Professor (Álvaro Morte), one on the Royal Mint of Spain, and one on the Bank of Spain, told from the perspective of one of the robbers, Tokyo (Úrsula Corberó).</span>
                            </div>

                        </div>
                    </div>

                </Carousel.Item>
                <Carousel.Item >

                    <div className="backgrounddiv">

                        <div className='slideroverlay'>
                            <div className="slidedesc">
                                <span className="title">Money Heist</span><br />
                                <span><button style= {{background:"rgba(255,255,255,0.4)",paddingLeft:"10px",paddingRight:"10px",borderRadius:"5px",border:"none"}}><FaPlay/>&nbsp;&nbsp;Play</button>&nbsp;&nbsp;&nbsp;<button style= {{background:"rgba(255,255,255,0.4)",paddingLeft:"10px",paddingRight:"10px",borderRadius:"5px",border:"none"}}><FaPlus/>&nbsp;&nbsp;List</button></span>
                                <br /><br/>
                                <span className="text">('The House of Paper') is a Spanish heist crime drama television series created by Álex Pina. The series traces two long-prepared heists led by the Professor (Álvaro Morte), one on the Royal Mint of Spain, and one on the Bank of Spain, told from the perspective of one of the robbers, Tokyo (Úrsula Corberó).</span>
                            </div>
                        </div>
                    </div>

                </Carousel.Item>
                <Carousel.Item >


                    <div className="backgrounddiv">
                        <div className='slideroverlay'>
                            <div className="slidedesc">
                                <span className="title">Money Heist</span><br />
                                <span><button style= {{background:"rgba(255,255,255,0.4)",paddingLeft:"10px",paddingRight:"10px",borderRadius:"5px",border:"none"}}><FaPlay/>&nbsp;&nbsp;Play</button>&nbsp;&nbsp;&nbsp;<button style= {{background:"rgba(255,255,255,0.4)",paddingLeft:"10px",paddingRight:"10px",borderRadius:"5px",border:"none"}}><FaPlus/>&nbsp;&nbsp;List</button></span>
                                <br /><br/>
                                <span className="text">('The House of Paper') is a Spanish heist crime drama television series created by Álex Pina. The series traces two long-prepared heists led by the Professor (Álvaro Morte), one on the Royal Mint of Spain, and one on the Bank of Spain, told from the perspective of one of the robbers, Tokyo (Úrsula Corberó).</span>
                            </div>

                        </div>

                    </div>

                </Carousel.Item>

            </Carousel>

            <div>
                <br /><br />
                <span className="heading"> Latest Releases</span>

                <div style={{ width: "100%", overflow: "hidden", display: "flex", scrollBehavior: "smooth", behavior: 'smooth' }} id="latestrelease">
                    <button onClick={() => right("latestrelease")} className="nextbtn"><span className="heading"> <FaAngleRight /> </span> </button>
                    <button onClick={() => left("latestrelease")} className="previousbtn"> <span className="heading"> <FaAngleLeft /> </span> </button>
                    {data.map((element, index) => (<div key={index} style={{ padding: "10px" }}><img src="https://cdn.wallpapersafari.com/23/48/BjR80O.jpg" className="media"></img></div>))}
                </div>
            </div>


            <br /><br />
            <span className="heading"> Best In Sports</span>

            <div style={{ width: "100%", overflow: "hidden", display: "flex", scrollBehavior: "smooth" }} id="bestinsports">
                <button onClick={() => right("bestinsports")} className="nextbtn"> <span className="heading"> <FaAngleRight /> </span> </button>
                <button onClick={() => left("bestinsports")} className="previousbtn"> <span className="heading"> <FaAngleLeft /> </span> </button>
                {data.map((element, index) => (<div key={index} style={{ padding: "10px" }}><img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1541/1421541-h-56d1a405c923" className="media" ></img></div>))}
            </div>



            <br /><br />
            <span className="heading"> Popular Shows</span>

            <div style={{ width: "100%", overflow: "hidden", display: "flex", scrollBehavior: "smooth" }} id="popularshows">
                <button onClick={() => right("popularshows")} className="nextbtn"> <span className="heading"> <FaAngleRight /> </span> </button>
                <button onClick={() => left("popularshows")} className="previousbtn"> <span className="heading"> <FaAngleLeft /> </span> </button>
                {data.map((element, index) => (<div key={index} style={{ padding: "10px" }}><img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9411/1329411-v-3ca2edc2e802" className="media" ></img></div>))}
            </div>



            <br /><br />
            <span className="heading"> Movies Recommended For You</span>

            <div style={{ width: "100%", overflow: "hidden", display: "flex", scrollBehavior: "smooth" }} id="moviesrec">
                <button onClick={() => right("moviesrec")} className="nextbtn"> <span className="heading"> <FaAngleRight /> </span> </button>
                <button onClick={() => left("moviesrec")} className="previousbtn"> <span className="heading"> <FaAngleLeft /> </span> </button>
                {data.map((element, index) => (<div key={index} style={{ padding: "10px" }}><img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5462/245462-v" className="media" ></img></div>))}
            </div>


            <br /><br />
            <span className="heading"> Shows Recommended For You</span>

            <div style={{ width: "100%", overflow: "hidden", display: "flex", scrollBehavior: "smooth" }} id="showsrec">
                <button onClick={() => right("showsrec")} className="nextbtn"> <span className="heading"> <FaAngleRight /> </span> </button>
                <button onClick={() => left("showsrec")} className="previousbtn"> <span className="heading"> <FaAngleLeft /> </span> </button>
                {data.map((element, index) => (<div key={index} style={{ padding: "10px" }}><img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/8763/1308763-v-18eb691de01f" className="media" ></img></div>))}
            </div>


            <br /><br />
            <span className="heading"> Popular Movies</span>

            <div style={{ width: "100%", overflow: "hidden", display: "flex" }} id="popularmovies">
                <button onClick={() => right("popularmovies")} className="nextbtn"> <span className="heading"> <FaAngleRight /> </span> </button>
                <button onClick={() => left("popularmovies")} className="previousbtn"> <span className="heading"> <FaAngleLeft /> </span> </button>
                {data.map((element, index) => (<div key={index} style={{ padding: "10px" }}><img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5052/1405052-v-2063bab41935" className="media" ></img></div>))}
            </div>
        </div>
    );
}

export default App2;