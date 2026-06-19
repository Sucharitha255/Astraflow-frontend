import { Link } from "react-router-dom";
import { TrafficCone } from "lucide-react";

export default function Navbar(){

return(

<nav className="bg-slate-950 text-white px-10 py-5 flex justify-between items-center shadow-lg">

<div className="flex items-center gap-3">

<TrafficCone size={32}/>

<h1 className="text-3xl font-bold">

AstraFlow

</h1>

</div>

<div className="flex gap-10 text-lg">

<Link to="/">Home</Link>

<Link to="/dashboard">Dashboard</Link>

<Link to="/command-center">Operations</Link>

<Link to="/insights">Analytics</Link>

</div>

</nav>

)

}