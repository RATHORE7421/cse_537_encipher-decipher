import React from 'react';
import ReactDOM from 'react';
import './App.css';

function App() {
  const encipher=()=>{
    var s=document.getElementById("encipher_box").innerHTML;
     let str1=conversion(s);
    document.getElementById('decipher_box').innerHTML=str1;
    }
    
    const decipher=()=>{
    var s=document.getElementById('decipher_box').innerHTML;
     let str1=conversion(s);
    document.getElementById('encipher_box').innerHTML=str1;
    }

    function conversion(s)
{
let out = "";
for(let i=0 ; i<s.length ; i++){
if(s[i]!=' '){
if(s[i]>='a' && s[i]<='z'){
out =out.concat(String.fromCharCode('z'.charCodeAt(0)-(s[i].charCodeAt(0)-97)));
}else if(s[i]>='A' && s[i]<='Z'){
out=out.concat(String.fromCharCode('Z'.charCodeAt(0)-(s[i].charCodeAt(0)-65)));
}
}else if(s[i]==' '){
out=out.concat(' ');
}
}console.log(out);
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

export default App;
