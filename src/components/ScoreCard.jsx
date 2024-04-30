import React from 'react'

const ScoreCard = (props) => {

    // console.log(props)

    let cardType=props.cardType

    // console.log(cardType)

    return (
        cardType === "answered" ?
        <>
            <h1>Questions Answered: {props.value}</h1>

            {/* <button onClick={() => props.setValue((value) => value + 1)}></button> */}

        </>
        :
        <>
            <h1>Current Score: {props.value}</h1>
            {/* <button onClick={() => props.setValue((value) => value + 1)}></button> */}
        </>
    )
}

export default ScoreCard