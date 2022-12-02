import React from 'react';
import { FaSistrix, FaUser } from 'react-icons/fa';
import './stylesheets/navbar.css'
function Navfun(props) {
    const dropdowndata = [{ lang:"English"},{lang:"Hindi"},{lang:"Japanese"},{lang:"Korean"},{lang:"Tamil"},{lang:"telugu"},{lang:"Bengali"},{lang:"Punjabi"},{lang:"Marathi"},{lang:"Kannada"}];
    return (
        <div>
            <div id="navbarcontainer">
                <span id="logo"><span style={{ color: "red", fontWeight: "bold" }}>Meta</span>Verse</span>
                <span style={{ paddingLeft: "20px" }} id = "navitems">
                   
                        <span className="navcontents">TV Shows
                       <span className="dropdown">
{dropdowndata.map((element)=>(<><div style = {{borderBottom:"1px solid silver",padding:"7px"}}><center>{element.lang}</center></div></>))
}
                       </span>
                        </span>
                       
                   
                        <span className="navcontents">Movies
                        <span className="dropdown">
{dropdowndata.map((element)=>(<><div style = {{borderBottom:"1px solid silver",padding:"7px"}}><center>{element.lang}</center></div></>))
}
                       </span>
                        </span>
                        
                  
                        <span className="navcontents">Sports
                        <span className="dropdown">
{dropdowndata.map((element)=>(<><div style = {{borderBottom:"1px solid silver",padding:"7px"}}><center>{element.lang}</center></div></>))
}
                       </span>
                        </span>
                        {/* <div className="dropdown">

                       
                    </div> */}
                    <span className="navcontents">Kids</span>
                </span>
                <span style={{ float: "right", paddingRight: "30px", width: "20%", display: "inline" }}>
                    <input type="text" placeholder="Search..."></input>

                    <FaSistrix style={{ background: "none" }} />
                    <span  ><FaUser style={{ background: "none",marginLeft:"30px" }} /></span>
                </span>
            </div>
        </div>
    );
}

export default Navfun;