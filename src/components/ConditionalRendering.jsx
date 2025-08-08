import React from 'react'
import PropTypes from 'prop-types'

const ConditionalRendering = ({name,isGreeting}) => {
 return ( isGreeting ? <h1>welcome, {name} {shared()}</h1>:<h1>this is the second option</h1>)


 
}


const  shared =  ()=>{
return (<h1>this is the shared function</h1>)
}


export default ConditionalRendering
