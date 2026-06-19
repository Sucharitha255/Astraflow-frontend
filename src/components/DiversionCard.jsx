export default function DiversionCard({diversion}){

return(

<div className="bg-purple-50 p-6 rounded-3xl shadow-lg">
<h2>Diversion</h2>

<p>{diversion.strategy}</p>

</div>

)

}