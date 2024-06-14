import useWebSocket from "react-use-websocket";
export function Home ({ variable}){

const we_URL = 'ws :// localhost: 8000'
useWebSocket(WS_URL, {
    queryParams: { variable }
    })
    
    return 
    <h1> hello, {variable}</h1>
}