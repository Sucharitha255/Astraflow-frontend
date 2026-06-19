export default function SimilarEventsTable({ events }) {

  if (!events || events.length === 0) {

    return (

      <div className="bg-white p-8 rounded-3xl shadow-lg mt-10">

        <h2 className="text-2xl font-bold mb-4">

          Similar Historical Events

        </h2>

        <p className="text-gray-500">

          No similar events found.

        </p>

      </div>

    )

  }

  return (

    <div className="bg-white p-8 rounded-3xl shadow-lg mt-10 overflow-x-auto">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-3xl font-bold">

          Similar Historical Events

        </h2>

        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">

          {events.length} Matches

        </span>

      </div>

      <table className="w-full text-left">

        <thead className="bg-slate-100">

          <tr>

            <th className="p-4">Event Type</th>

            <th className="p-4">Cause</th>

            <th className="p-4">Zone</th>

            <th className="p-4">Junction</th>

          </tr>

        </thead>

        <tbody>

          {

            events.map((event,index)=>(

              <tr

                key={index}

                className="border-b hover:bg-slate-50 transition"

              >

                <td className="p-4">

                  {event.event_type}

                </td>

                <td className="p-4">

                  {event.event_cause}

                </td>

                <td className="p-4">

                  {event.zone}

                </td>

                <td className="p-4">

                  {event.junction}

                </td>

              </tr>

            ))

          }

        </tbody>

      </table>

    </div>

  )

}