import React, { useEffect, useState } from 'react'


const BitcoinIndex = ( {currency="AUD"}) => {
    const [price, setPrice] = useState()

    useEffect(() => {

        // Only triggers on mount
        fetch(`http://api.coindesk.com/v1/bpi/currentprice/${currency}.json`)
            .then((res) => res.json())
            .then((data) => setPrice(data.bpi[currency].rate))

        // called on unmount
        return () => {
            // cleanup code goes here like closing file
        }
    }, [currency])

    useEffect(() => console.log('effect triggered on mount or any change'))

    useEffect(() => console.log('effect triggered on mount or price change'), [price])


    return (
    <>
        <h1>Bitcoin Index</h1>
        {price ? <p>Current Price ({currency}): {price}</p>: <p>Loading...</p>}
    </>
    )
}

export default BitcoinIndex