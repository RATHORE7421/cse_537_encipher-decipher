import React from 'react';
import ReactDOM from 'react';
import './App.css';

function App() {
  //function that encipher the data of encipher box
  const encipher=()=>{
    //fetch data of encipher box
    var s=document.getElementById("encipher_box").innerHTML;
    //function which will do the conversion 
     let str1=conversion(s);
     //converted data is rendered in this box
    document.getElementById('decipher_box').innerHTML=str1;
    }
    
    //function that decipher the data of decipher box
    const decipher=()=>{
      //fetch data of decipher box
    var s=document.getElementById('decipher_box').innerHTML;
    //function which will do the conversion 
     let str1=conversion(s);
     //converted data is rendered in this box
    document.getElementById('encipher_box').innerHTML=str1;
    }

    ////function that will do the conversion 
    function conversion(s)
{
let out = "";
for(let i=0 ; i<s.length ; i++){
  //if an alphabet is present
if(s[i]!=' '){
  //if character is small case alphabet
if(s[i]>='a' && s[i]<='z'){
out =out.concat(String.fromCharCode('z'.charCodeAt(0)-(s[i].charCodeAt(0)-97)));
}
//if character is uppercase alphabet
else if(s[i]>='A' && s[i]<='Z'){
out=out.concat(String.fromCharCode('Z'.charCodeAt(0)-(s[i].charCodeAt(0)-65)));
}
}else if(s[i]==' '){
out=out.concat(' ');
}
}
return out;
}

    

  return (
    <>
    <div className='Heading'>
<h1>Resolve Secrets</h1>
</div>
<div className='align'>
<div >
<div className='box'  id='encipher_box' contentEditable={true}></div>
<button onClick={encipher}>Encipher</button>
</div>

<div>
<div className='box' id='decipher_box' contentEditable={true}></div>
<button onClick={decipher}>Decipher</button>
</div>
</div>

</>
);
}
//export this file
export default App;
