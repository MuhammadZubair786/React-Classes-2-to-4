import { useHistory ,useRouteMatch, useLocation} from "react-router-dom";

function About(){
    let data = useRouteMatch()
    let location = useLocation();

    console.log(location)

    console.log(data)
    let history = useHistory()
    return(
        <>
        <h1>About</h1>
        <button onClick={()=>{history.push('/')}}>Home</button>
        <button onClick={()=>{history.push('/user')}}>User</button>
        </>
    )
}

export default About