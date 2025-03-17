import { products } from "./data"
function Allproducts(){

    return(
        <>
        <div className="d-flex flex-wrap-nowrap gap-4 m-5 w-50">
        {
            products.map((item,index)=>
            <div>
                <img src={item.image} alt="" />
                <h1>name:{item.name}</h1>
                <h1>price:{item.price}</h1>
                <h1>desc:{item.desc}</h1>
                {item.stockavailability?<button className="bg-success text-white">Add to cart</button>:<button disabled className="bg-danger text-white">out of stock</button>}

                     {item.quantity <=5&&<h3 className="text-danger">only {item.quantity} left</h3>}
            </div>
            )
        }
        </div>
        </>
    )
}

export {Allproducts}