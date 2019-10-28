import React,{useState} from 'react';
import InputNumber from './InputNumber'

function App(){
    const [value] = useState(110);
    return (
        <div>
            <InputNumber value={value} bindChange={e=>{
                console.log(e.target.value)
            }}/>
            <InputNumber defaultValue={value} bindChange={e=>{
                console.log(e.target.value)
            }}/>
        </div>
    )
}

export default App;
