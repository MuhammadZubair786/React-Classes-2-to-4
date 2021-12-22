import {
   
    Link,useLocation
  } from "react-router-dom";

function Home(){

    let location = useLocation();

    console.log(location)

   

    return(
        <>
        <h1>Home</h1>

        <Link to='/about'>About Page</Link>
        <Link to='/user'>User Page</Link>
        </>
    )
}

export default Home