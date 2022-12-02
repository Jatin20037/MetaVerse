import React from 'react';
import './stylesheets/login.css';
function Login() {
    function bg() {
        document.getElementById("mainlogin").style.backgroundImage = "url(https://wallpapercave.com/wp/wp1934739.jpg)";

        function bg1() {
            document.getElementById("mainlogin").style.backgroundImage = "url(https://wallpaperaccess.com/full/6366.jpg)";
            function bg2() {
                document.getElementById("mainlogin").style.backgroundImage = "url(https://airwallpaper.com/wp-content/uploads/wall004/Free-download-Movie-Wallpaper-HD.jpg)";
                function bg3() {
                    document.getElementById("mainlogin").style.backgroundImage = "url(https://wallpaperaccess.com/full/329598.jpg)";

                    const tm = setTimeout(bg, 3000);

                } const tm4 = setTimeout(bg3, 5000);

            } const tm3 = setTimeout(bg2, 5000);

        } const tm2 = setTimeout(bg1, 5000);
    }
    const tm1 = setTimeout(bg, 5000);
    return (
        <div id="mainlogin">
            <div className='slideroverlay'>
                <center>
<div id = "login">
<span className = "heading"><span style = {{color:"red"}}>LOG</span> IN</span><br/><br/>
<input className = "formfield" placeholder="Email"></input><br/><br/>
<input className = "formfield" placeholder="Password"></input><br/><br/><br/><br/>
<button className = "formfield" id = "loginbtn"><span id = "loginbtcont"><span style = {{color:"red"}}>LOG </span><span style = {{color:"black"}}> IN</span></span></button><br/><br/>
</div>
</center>
            </div>
        </div>
    );
}

export default Login;