import React, { useState, useEffect } from 'react'

export default () => {
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [items, setItems] = useState([])

    useEffect(() => {
        ;(async () => {
            const res = await fetch('http://localhost:4000/items')
            const result = await res.json()

            console.dir(result)


            if (result) {
                setIsLoaded(true)
                setItems(result)
            } else {
                setIsLoaded(true);
                setError('Items Load Error')
            }
        })()
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else {
        return (
            <ul>
                {items.map((item) => (
                    <li key={item.name}>
                        {item.name} {item.price}
                    </li>
                ))}
            </ul>
        )
    }
}
