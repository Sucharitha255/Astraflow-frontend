import { useState } from "react";

import API from "../services/api";

export default function EventForm({

setPrediction,

setLoading

}){

const [form,setForm]=useState({

event_type:"planned",

event_cause:"construction",

priority:"High",

zone:"Central Zone 2",

hour:10,

historical_frequency:5,

requires_road_closure:true

})


const handleChange=(e)=>{

const{

name,

value,

type,

checked

}=e.target


setForm({

...form,

[name]:

type==="checkbox"

? checked

: value

})

}


const submit=async()=>{

try{

setLoading(true)

const response=await API.post(

"/predict/",

form

)

setPrediction(

response.data

)

localStorage.setItem(

"astraflow_result",

JSON.stringify(

response.data

)

)

}

catch(error){

console.log(

error

)

}

finally{

setLoading(false)

}

}


return(

<div className="bg-white p-8 rounded-3xl shadow-lg mt-10">

<h2 className="text-2xl font-bold mb-2">

Create Event

</h2>

<p className="text-gray-500 mb-6">

Enter event details to generate AI-powered traffic recommendations.

</p>


<div className="grid md:grid-cols-2 gap-4">


<select

name="event_type"

value={form.event_type}

onChange={handleChange}

className="border p-3 rounded"

>

<option>

planned

</option>

<option>

unplanned

</option>

</select>


<select

name="event_cause"

value={form.event_cause}

onChange={handleChange}

className="border p-3 rounded"

>

<option>

construction

</option>

<option>

public_event

</option>

<option>

accident

</option>

<option>

vehicle_breakdown

</option>

</select>


<select

name="priority"

value={form.priority}

onChange={handleChange}

className="border p-3 rounded"

>

<option>

Low

</option>

<option>

Medium

</option>

<option>

High

</option>

</select>


<select

name="zone"

value={form.zone}

onChange={handleChange}

className="border p-3 rounded"

>

<option>

Central Zone 2

</option>

<option>

North Zone 1

</option>

<option>

South Zone 1

</option>

<option>

East Zone 1

</option>

<option>

West Zone 1

</option>

</select>


<input

type="number"

name="hour"

value={form.hour}

onChange={handleChange}

className="border p-3 rounded"

/>


<input

type="number"

name="historical_frequency"

value={form.historical_frequency}

onChange={handleChange}

className="border p-3 rounded"

/>


<div className="flex items-center gap-3">

<input

type="checkbox"

name="requires_road_closure"

checked={form.requires_road_closure}

onChange={handleChange}

/>

<label>

Road Closure

</label>

</div>

</div>


<button

onClick={submit}

className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl mt-8"

>

Predict

</button>

</div>

)

}
const response=await API.post(

"/predict/",

form

)