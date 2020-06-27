import React, { useState, useEffect } from 'react'

export default () => {
    const [feature, setFeature] = useState([])

    useEffect(() => {
        ;(async () => {
            fetch('http://localhost:4000/feature')
                .then((res) => res.json())
                .then((result) => {
                    setFeature(result)
                })
        })()
    }, [])

    return (
        <ul>
            {feature.map((item) => (
                <li key={item.id}>{item.text}</li>
            ))}
        </ul>
    )
}
