import { Link } from "react-router-dom";

import {

Brain,

Shield,

Route,

TrafficCone,

ArrowRight

} from "lucide-react";

export default function Home(){

return(

<div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">


{/* Hero Section */}

<div className="flex flex-col justify-center items-center text-center px-10 pt-28">

<h1 className="text-7xl font-bold">

AstraFlow

</h1>

<p className="text-3xl mt-6 text-blue-300">

AI Powered Event Traffic Command Center

</p>

<p className="max-w-4xl text-gray-300 mt-8 text-lg">

Forecast traffic impact, assess risk, deploy resources,

recommend diversions and learn from historical events.

</p>


<div className="flex gap-6 mt-12">

<Link

to="/dashboard"

className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg font-semibold flex items-center gap-3"

>

Launch Dashboard

<ArrowRight/>

</Link>


<Link

to="/command-center"

className="border border-blue-400 hover:bg-blue-900 px-8 py-4 rounded-xl text-lg"

>

Operations Center

</Link>

</div>

</div>


{/* Feature Cards */}

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 p-16">


<div className="bg-slate-800 p-8 rounded-3xl hover:scale-105 transition">

<Brain

size={40}

className="text-blue-400"

/>

<h2 className="text-2xl font-bold mt-5">

Predict

</h2>

<p className="text-gray-400 mt-4">

Forecast event impact before congestion happens.

</p>

</div>


<div className="bg-slate-800 p-8 rounded-3xl hover:scale-105 transition">

<Shield

size={40}

className="text-red-400"

/>

<h2 className="text-2xl font-bold mt-5">

Assess

</h2>

<p className="text-gray-400 mt-4">

Generate AI risk scores for every event.

</p>

</div>


<div className="bg-slate-800 p-8 rounded-3xl hover:scale-105 transition">

<TrafficCone

size={40}

className="text-orange-400"

/>

<h2 className="text-2xl font-bold mt-5">

Deploy

</h2>

<p className="text-gray-400 mt-4">

Recommend manpower and barricades.

</p>

</div>


<div className="bg-slate-800 p-8 rounded-3xl hover:scale-105 transition">

<Route

size={40}

className="text-green-400"

/>

<h2 className="text-2xl font-bold mt-5">

Divert

</h2>

<p className="text-gray-400 mt-4">

Generate alternate route strategies.

</p>

</div>

</div>


{/* Stats */}

<div className="grid md:grid-cols-3 gap-8 px-16 pb-20">


<div className="bg-slate-800 p-10 rounded-3xl text-center">

<p className="text-5xl font-bold text-blue-400">

8000+

</p>

<p className="mt-4 text-gray-400">

Historical Events

</p>

</div>


<div className="bg-slate-800 p-10 rounded-3xl text-center">

<p className="text-5xl font-bold text-green-400">

6

</p>

<p className="mt-4 text-gray-400">

AI Modules

</p>

</div>


<div className="bg-slate-800 p-10 rounded-3xl text-center">

<p className="text-5xl font-bold text-red-400">

3

</p>

<p className="mt-4 text-gray-400">

Decision Engines

</p>

</div>

</div>

</div>

)

}