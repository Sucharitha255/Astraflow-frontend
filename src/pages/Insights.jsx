import {

useEffect,

useState

} from "react";

import {

BarChart,

Bar,

PieChart,

Pie,

Cell,

XAxis,

YAxis,

Tooltip,

ResponsiveContainer

} from "recharts";

import {

getAnalytics

} from "../services/api";


export default function Insights() {

const [data,setData]=useState(null);

const BAR_COLORS=[

"#2563eb",

"#ef4444",

"#22c55e",

"#f59e0b",

"#06b6d4"

]

const PIE_COLORS=[

"#22c55e",

"#eab308",

"#f97316",

"#ef4444"

]

const ZONE_COLORS=[

"#2563eb",

"#22c55e",

"#f97316",

"#8b5cf6",

"#ef4444",

"#06b6d4"

]


useEffect(()=>{

fetchAnalytics();

},[])


async function fetchAnalytics(){

try{

const response=await getAnalytics();

setData(

response.data

)

}

catch(error){

console.log(

error

)

}

}


if(!data)

return(

<div className="min-h-screen flex justify-center items-center text-2xl font-bold">

Loading Analytics...

</div>

)


return(

<div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-100 p-10">


<h1 className="text-5xl font-bold">

Traffic Insights

</h1>


<p className="text-gray-500 mt-3">

Historical analysis and AI powered insights

</p>


{/* Top Stats */}

<div className="grid md:grid-cols-4 gap-8 mt-10">


<div className="bg-blue-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">

<h3 className="text-gray-500">

Total Events

</h3>

<p className="text-5xl font-bold mt-3 text-blue-700">

{data.total_events}

</p>

</div>


<div className="bg-red-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">

<h3 className="text-gray-500">

High Risk Events

</h3>

<p className="text-5xl font-bold mt-3 text-red-700">

{data.high_risk}

</p>

</div>


<div className="bg-green-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">

<h3 className="text-gray-500">

Zones Covered

</h3>

<p className="text-5xl font-bold mt-3 text-green-700">

{data.zones_covered}

</p>

</div>


<div className="bg-purple-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">

<h3 className="text-gray-500">

AI Modules

</h3>

<p className="text-5xl font-bold mt-3 text-purple-700">

{data.ai_modules}

</p>

</div>

</div>


{/* Charts */}

<div className="grid lg:grid-cols-2 gap-10 mt-10">


{/* Event Causes */}

<div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">

<h2 className="text-2xl font-bold mb-6">

Event Causes

</h2>

<div className="h-80">

<ResponsiveContainer>

<BarChart

data={data.event_causes}

>

<XAxis dataKey="cause"/>

<YAxis/>

<Tooltip/>

<Bar dataKey="count">

{

data.event_causes.map(

(_,index)=>(

<Cell

key={index}

fill={BAR_COLORS[index % BAR_COLORS.length]}

/>

)

)

}

</Bar>

</BarChart>

</ResponsiveContainer>

</div>

</div>


{/* Risk Distribution */}

<div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">

<h2 className="text-2xl font-bold mb-6">

Risk Distribution

</h2>

<div className="h-80">

<ResponsiveContainer>

<PieChart>

<Pie

data={data.risk_distribution}

dataKey="value"

outerRadius={110}

label

>

{

data.risk_distribution.map(

(_,index)=>(

<Cell

key={index}

fill={PIE_COLORS[index % PIE_COLORS.length]}

/>

)

)

}

</Pie>

<Tooltip/>

</PieChart>

</ResponsiveContainer>

</div>

</div>


{/* Zone Events */}

<div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition lg:col-span-2">

<h2 className="text-2xl font-bold mb-6">

Zone Wise Events

</h2>

<div className="h-80">

<ResponsiveContainer>

<BarChart

data={data.zone_events}

>

<XAxis dataKey="zone"/>

<YAxis/>

<Tooltip/>

<Bar dataKey="count">

{

data.zone_events.map(

(_,index)=>(

<Cell

key={index}

fill={ZONE_COLORS[index % ZONE_COLORS.length]}

/>

)

)

}

</Bar>

</BarChart>

</ResponsiveContainer>

</div>

</div>

</div>

</div>

)

}