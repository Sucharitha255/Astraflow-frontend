import {

useEffect,

useState

} from "react";

import {

ShieldAlert,

TrafficCone,

Route,

Users

} from "lucide-react";


export default function CommandCenter(){

const [

data,

setData

]=useState(null);


useEffect(()=>{

const stored=

localStorage.getItem(

"astraflow_result"

)


if(stored){

setData(

JSON.parse(

stored

)

)

}

},[])


if(!data)

return(

<div className="min-h-screen flex justify-center items-center text-2xl font-bold">

Please generate a prediction from Dashboard first.

</div>

)


const resources=

data.recommendations.resources;


const barricades=

data.recommendations.barricades;


const diversion=

data.recommendations.diversion;


return(

<div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-100 p-10">


<h1 className="text-5xl font-bold">

Traffic Operations Center

</h1>


<p className="text-gray-500 mt-3 mb-10">

AI generated traffic management actions.

</p>


<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">


{/* Police */}

<div className="bg-red-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">

<div className="flex justify-between">

<h2 className="text-xl font-bold">

Deploy Police

</h2>

<Users/>

</div>


<p className="text-5xl font-bold mt-6">

{resources.traffic_police}

</p>


<p className="mt-2 text-gray-500">

Officers required

</p>

</div>


{/* Barricades */}

<div className="bg-blue-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">

<div className="flex justify-between">

<h2 className="text-xl font-bold">

Barricades

</h2>

<TrafficCone/>

</div>


<p className="text-5xl font-bold mt-6">

{barricades}

</p>


<p className="mt-2 text-gray-500">

Recommended

</p>

</div>


{/* Diversion */}

<div className="bg-purple-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">

<div className="flex justify-between">

<h2 className="text-xl font-bold">

Diversion

</h2>

<Route/>

</div>


<p className="text-2xl font-bold mt-6">

{

diversion.diversion_required

?

"Activate"

:

"Monitor"

}

</p>


<p className="mt-2 text-gray-500">

{

diversion.strategy

}

</p>

</div>


{/* Risk */}

<div className="bg-yellow-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">

<div className="flex justify-between">

<h2 className="text-xl font-bold">

Risk

</h2>

<ShieldAlert/>

</div>


<p className="text-5xl font-bold mt-6">

{

data.risk_score

}

</p>


<p className="mt-2 text-gray-500">

Current risk score

</p>

</div>

</div>


<div className="bg-white p-8 rounded-3xl shadow-lg mt-10">

<h2 className="text-3xl font-bold mb-8">

AI Action Plan

</h2>


<div className="space-y-6">

<div className="border-l-4 border-red-500 pl-5">

Deploy

{

resources.traffic_police

}

traffic police officers

</div>


<div className="border-l-4 border-blue-500 pl-5">

Install

{

barricades

}

barricades

</div>


<div className="border-l-4 border-purple-500 pl-5">

{

diversion.strategy

}

</div>


<div className="border-l-4 border-yellow-500 pl-5">

Priority :

{

resources.priority

}

</div>

</div>

</div>

</div>

)

}