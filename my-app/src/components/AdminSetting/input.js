
import React from 'react'

 const input=({
     placeholder ="please enter",
     input,
     meta,
     discount,
     name,
     disabled =false,
     allowPattern = null,
 })=> {

        const onChange = (event) =>{
            if(allowPattern){
                const regex = new RegExp(allowPattern);
                if(!regex.test(event.target.value)){
                    event.target.value =input.value;
                }
            }
            input.onChange(event);
        }



    return (
        <div>
            <input name={name} onChange={onChange}  type="text" value={input.value} style={{width:"100%"}}  />
        </div>
    )
}

export default input
