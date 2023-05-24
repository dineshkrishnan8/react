import React, { useState } from "react";
function Car20()
{
    const[email,setEmail]=useState("")
    const[pass,setpass]=useState("")
    function submitHandler(){
        if(email==="admin@gmail.com" & pass==="124")
        {
            alert("success")
        }
        else
        {
            alert("failed")
        }
    }
    return(<form onSubmit={submitHandler}>
        <div>
            <label htmlfor="email">email:</label>
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}>
            </input>
        </div>
        <div>
            <label htmlfor="pass">password</label>
            <input type="password" value={pass} onChange={(e)=>setpass(e.target.value)}></input>
        </div>
        <div>
            <button>submit</button>
        </div>
    </form>)
}
export default Car20