import { Activity } from "lucide-react";

export default function ImpactCard({impact}){

return(
<div className="bg-red-50 p-6 rounded-3xl shadow-lg">


<div className="flex justify-between">

<h2 className="text-xl font-bold">

Impact

</h2>

<Activity/>

</div>

<p className="text-3xl font-bold mt-4">

{impact.impact_level}

</p>

<p>

Score : {impact.impact_score}

</p>

</div>

)

}