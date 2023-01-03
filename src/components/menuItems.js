



export default function Menu({item}) {
    return (
        <div className="grid grid-rows-5 grid-flow-col gap-4">

            {item.map((menuItem) => {
                const {id, title, img, desc, price} = menuItem;
                return (
                    <article key={id} className="w-[28rem] h-92 bg-white border-2 border-gray-200">
                    <img src={img} alt={title} className="w-[28rem] h-60 object-cover"/>
                    <header className="px-4 py-2 flex flex-row justify-around items-center font-bold">
                        <h1>{title}</h1>
                        <h4>{price}</h4>
                    </header>
                    <p className="px-4 py-2">{desc}</p>



                    </article>
                )
            })}
        </div>
    )
}