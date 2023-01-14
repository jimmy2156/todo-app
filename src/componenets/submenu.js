

import { useEffect, useRef } from "react"
import sublinks from "../data"


export default function Submenu({ page, setsubMenu, right, subMenu, left}) {
    const container = useRef(null)
    useEffect(() => {
        const styLeee = container.current
        styLeee.style.left = `${left - 120}px`
        styLeee.style.top = `${right + 10}px`
    }, [page])
    
    return (
        
<aside  className=" absolute bg-white text-gray-600 rounded-lg " ref={container}>
{sublinks.filter((item) => item.page === page).map((item, index) => {
    const {links} = item
    return (
        <div key={index} className="flex flex-row justify-center items-center w-auto space-x-8 h-16 mx-6" >{links.map((link, index) => {
            const {url, icon, label} = link
            return (
               
<ul>
    <li key={index} >
    <a href={url}  >{icon} {label}</a>

    </li>
</ul>
            )
        })}</div>
    )
})}

</aside>
        
    )
}