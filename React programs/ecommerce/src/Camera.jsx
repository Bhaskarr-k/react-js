import { products } from "./data";

function Camera(){
     const camera=products.filter((object)=>object.category==="camera")

    return(
        <>
            <div className="d-flex flex-wrap-nowrap gap-4 m-5">
        {
            camera.map((item,index)=>
            <div>
                <img src={item.image} alt="" />
                <h1>name:{item.name}</h1>
                <h1>price:{item.price}</h1>
                <h1>desc:{item.desc}</h1>
                <h1>{item.category}</h1>
                {item.stockavailability?<button>Add to cart</button>:<button>out of stock</button> }
            </div>
            )
        }
        </div>
        </>
    )
}
export {Camera}