import { Outlet } from "react-router-dom";
import Header from "./header";

const RootLayout=(props)=>{
return(
    <>
    <Header/>
    <Outlet></Outlet> 
    </>
)
}
export default RootLayout;