import { useState } from "react";

import EventForm from "../components/EventForm";

import ImpactCard from "../components/ImpactCard";

import RiskCard from "../components/RiskCard";

import ResourceCard from "../components/ResourceCard";

import BarricadeCard from "../components/BarricadeCard";

import DiversionCard from "../components/DiversionCard";

import SimilarEventsTable from "../components/SimilarEventsTable";


export default function Dashboard(){

const [prediction,setPrediction]=useState(null)

const [loading,setLoading]=useState(false)

return(

<div

className="min-h-screen p-8"

style={{background:"#F5EFEB"}}

>


{/* Hero Section */}

<div

className="rounded-3xl p-10 shadow-xl"

style={{background:"#2F4156"}}

>

<h1 className="text-5xl font-bold text-white">

 AI Traffic Command Center

</h1>


<p className="text-xl mt-5 text-[#C8D9E6]">

Forecast event impact and generate AI-powered traffic management recommendations.

</p>


<div className="flex flex-wrap gap-4 mt-8">


<div

className="px-5 py-3 rounded-xl font-semibold"

style={{background:"#567C8D",color:"white"}}

>

📍 Bengaluru Event Intelligence

</div>


<div

className="px-5 py-3 rounded-xl font-semibold"

style={{background:"#567C8D",color:"white"}}

>

🤖 AI Decision Support

</div>


<div

className="px-5 py-3 rounded-xl font-semibold"

style={{background:"#567C8D",color:"white"}}

>

⚡ Real Time Predictions

</div>

</div>

</div>


{/* Stats */}

<div className="grid md:grid-cols-3 gap-8 mt-10">


<div

className="p-8 rounded-3xl shadow-lg hover:scale-105 transition"

style={{

background:"#FFFFFF"

}}

>

<h3

className="text-lg font-semibold"

style={{

color:"#567C8D"

}}

>

AI Modules

</h3>


<p

className="text-5xl font-bold mt-4"

style={{

color:"#2F4156"

}}

>

6

</p>

</div>



<div

className="p-8 rounded-3xl shadow-lg hover:scale-105 transition"

style={{

background:"#C8D9E6"

}}

>

<h3

className="text-lg font-semibold"

style={{

color:"#567C8D"

}}

>

Decision Engines

</h3>


<p

className="text-5xl font-bold mt-4"

style={{

color:"#2F4156"

}}

>

3

</p>

</div>



<div

className="p-8 rounded-3xl shadow-lg hover:scale-105 transition"

style={{

background:"#FFFFFF"

}}

>

<h3

className="text-lg font-semibold"

style={{

color:"#567C8D"

}}

>

Historical Events

</h3>


<p

className="text-5xl font-bold mt-4"

style={{

color:"#2F4156"

}}

>

8000+

</p>

</div>

</div>


{/* Event Form */}

<EventForm

setPrediction={setPrediction}

setLoading={setLoading}

/>


{/* Loading */}

{

loading && (

<div className="flex justify-center mt-10">

<div

className="px-8 py-5 rounded-2xl shadow-lg text-xl font-semibold"

style={{

background:"#567C8D",

color:"white"

}}

>

⚡ Generating Predictions...

</div>

</div>

)

}


{/* Results */}

{

prediction && (

<>

<div className="mt-12">

<h2

className="text-4xl font-bold"

style={{

color:"#2F4156"

}}

>

📊 Prediction Results

</h2>

</div>


<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-8">


<ImpactCard

impact={prediction.impact}

/>


<RiskCard

risk={prediction.risk_score}

/>


<ResourceCard

resources={prediction.recommendations.resources}

/>


<BarricadeCard

barricades={prediction.recommendations.barricades}

/>


<DiversionCard

diversion={prediction.recommendations.diversion}

/>

</div>


<div className="mt-10">

<SimilarEventsTable

events={prediction.similar_events}

/>

</div>

</>

)

}

</div>

)

}