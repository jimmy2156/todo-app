import { useEffect, useState } from "react"




export const useFetch = (url) => {
    const [loading, setloading] = useState(false)
    const [products, setproducts] = useState([])
    const getProducts = async () => {
        const response = await fetch(url)
        const products = await response.json()
        setproducts(products)
        setloading(true)

    }
    useEffect(() => {
        getProducts()
    }, [url])
    return {
        loading, products, setproducts
    }

}