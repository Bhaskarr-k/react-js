
import { Allproducts } from "./Allproducts";
import { Header } from "./Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Laptop } from "./laptop";
import { Camera } from "./Camera";
import { Mobile } from "./Mobile";



function App(){
  return(
    <>
    <Header/>
    {/* <Allproducts/>  */}
     <Laptop/>
    {/* <Camera/>  */}
    <Mobile/>
    
    </>
  )
}
export default App