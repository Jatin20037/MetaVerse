import React, { useState } from 'react';
import axios from 'axios';
function Uploader(props) {
    const [upload, setUpload] = useState("");
    const [uploadvideo, setUploadvideo] = useState("");
    const [uploadthumb, setUploadthumb] = useState("");
    const [name ,setName ] = useState("");
    const [desc ,setdesc ] = useState("");
    const [date ,setdate ] = useState();
    const [lang ,setLang ] = useState("");
    const [views,setViews] = useState("");
    const [cate ,setcate ] = useState("");
function field()
{
    setName(document.getElementById("name").value); 
    setdesc(document.getElementById("desc").value);
    setdate(document.getElementById("date").value) ;
    setLang(document.getElementById("lang").value) ;
    setViews(document.getElementById("views").value);
    setcate(document.getElementById("cate").value) ;
}

    function uploader(e) {
        var file1 = e.target.files[0];
        
        const filereader1 = new FileReader();
        filereader1.readAsDataURL(file1);
        filereader1.onloadend = () => {
            setUploadthumb(filereader1.result);
           
        }
        
    }


        function uploader2(e) {
            var file2 = e.target.files[0];
            console.log(file2);
           ;
            const filereader2 = new FileReader();
            filereader2.readAsDataURL(file2);
            filereader2.onloadend = () => {
                setUploadvideo(filereader2.result);
                console.log(filereader2.result);
            }
        }

       
        function send() {
            
            console.log(uploadthumb.name);
            axios.post("http://localhost:3001/cloud", {
               
                thumnail: uploadthumb,
                 video: uploadvideo,
             name:name,
                desc:desc,
                 date:date,
                 lang:lang,
                 views:views,
                 category:cate,
            }).then((res) => {
                console.log(res);
            })

            

    }
    
    return (
        <div>
            <br /><br /><br /><br /><br />
            <div>
                
                <input type="text" id="name" onChange={field} placeholder="name" className="formfield" style = {{color:"black"}}/> <br></br>
                <input type="text" id="desc" onChange={field} placeholder="desc" className="formfield" style = {{color:"black"}} /> <br></br>
                <input type="date" id="date" onChange={field} placeholder="date" className="formfield" style = {{color:"black"}} />   <br></br>
                <input type="text" id="lang" onChange={field} placeholder="lang" className="formfield"  style = {{color:"black"}}/> <br></br>
                <input type="text" id="views" onChange={field} placeholder="views" className="formfield"  style = {{color:"black"}}/> <br></br>
                <input type="text" id="cate" onChange={field} placeholder="cate" className="formfield" style = {{color:"black"}} />   <br></br>
                <input type="file" id="thumb" onChange={uploader} className="formfield" />   <br></br>
                <input type="file" id="upload" onChange={uploader2} className="formfield" />  <br></br>
                <button onClick={send}>submit</button>
                
            </div>
            <video src={upload}></video>
        </div>
    );
}

export default Uploader;