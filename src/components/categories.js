

 
export default function CategoryButton({allCategory, category}) {
    return (
        <div className="flex flex-row justify-around items-center space-x-10 mb-8">

{category.map((item, index) => {
    return ( 
        <button className="bg-white teat-blue-400 rounded w-16" onClick={() => allCategory(item) } key={index} type="button">{item}</button>
    
    )
})}
</div> )
}