
function Child({photos}){
    console.log(photos)

    return(
        <>
        
        {photos.map((item,index)=> 
        <div className="d-flex flex-column justify-content-center align-items-center gap-2 w-30" key={index}>
        
            <img src={item.image} alt="" />
            <h1>name:{item.name}</h1>
            <h1>price:{item.price}</h1>
           
        </div>
        )}
       </>
    )
}
export {Child}