import { Users } from "lucide-react";

export default function ResourceCard({

resources

}){

return(

<div className="bg-green-50 p-6 rounded-3xl shadow-lg">

<div className="flex justify-between">

<h2 className="text-xl font-bold">

Resources

</h2>

<Users/>

</div>

<div className="space-y-2 mt-4">

<p>

👮 Police : {resources.traffic_police}

</p>

<p>

🛣 Routes : {resources.diversion_routes}

</p>

<p>

🚦 Signals : {resources.signal_adjustments}

</p>

</div>

</div>

)

}
