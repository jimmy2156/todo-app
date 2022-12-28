import data from "../data"



export default function List() {
    return (
        <div>

            <div className="bg-white text-4xl h-20 flex flex-col justify-center items-center">5 birthdays today</div>
       {data.map((person) => {
        return (
            <div className="w-96 bg-white hover:bg-gray-200 flex flex-row justify-evenly items-center h-24 border-2">
                
         <img src={person.image} className=" h-16 w-16 object-cover rounded-full" alt={person.name} />
          <div className="mr-6"><h1 className="text-xl font-semibold">{person.name}</h1>
          <h2>{person.age}</h2></div>
          
            </div>
        )
       })}
        </div>
    )
}