




export default function Buttonprofile({category, newCategory}) {
    
    return (
        <div className="bg-white">
       {category.map((item, index) => {
        return (
            <div className="flex flex-col justify-center items-center space-y-10 ">
            <button type="button" key={index} className="border-2 border-gray-500" onClick={() => newCategory(index)}>{item}</button></div>
        )
       })}



        </div>
    )
}