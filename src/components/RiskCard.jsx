import { ShieldAlert } from "lucide-react";

export default function RiskCard({risk}){

return(

<div className="bg-yellow-50 p-6 rounded-3xl shadow-lg">

<div className="flex justify-between">

<h2 className="text-xl font-bold">

Risk

</h2>

<ShieldAlert/>

</div>

<p className="text-4xl font-bold mt-4">

{risk}

</p>

</div>

)

}