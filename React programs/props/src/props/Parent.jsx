import { Child } from "./child"
import { images } from "./data"





function Parent(){
    return(
        <>
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-2"> 
        <Child photos={images}/>
        </div>
        </>
    )
}
export {Parent}