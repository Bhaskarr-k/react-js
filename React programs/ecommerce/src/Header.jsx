import image from "../src/assets/main.jpeg"

function Header(){
    return(
        <>
      
        <div className="d-flex bg-secondary text-white justify-content-center justify-content-between">
            <img src={image} alt="" />
        <h1>laptops</h1>
        <h1>mobilles</h1>
        <h1>camera</h1>
        <h1>smartwatch</h1>
        </div>
        </>
    )
}
export {Header}