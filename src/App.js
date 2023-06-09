import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer"
import {IMG_CDN_URL} from "./Constant";
import RestaurantCart from "./components/RestaurantCart"


    


const config =[
    {
        type:"caraousel",
        cards:[{
            offerName:"50% OFF"
        },
        {
            offerName:"No Delivery Charge"
        }
    ]
    },
    {
        type:"restaurants",
        cards:[{
            name:'Burger King',
            image:'https://3.bp.blogspot.com/-82yPQ-rKrIo/VZ1ECOmMe0I/AAAAAAAAHZ0/nf54dwoonRo/s1600/burger-king.jpg',
            cuisines:['Burgers','American'],
            rating:'4.2' 
        },
        {
            name:'Burger King',
            image:'https://3.bp.blogspot.com/-82yPQ-rKrIo/VZ1ECOmMe0I/AAAAAAAAHZ0/nf54dwoonRo/s1600/burger-king.jpg',
            cuisines:['Burgers','American'],
            rating:'4.2'
        }
    ]
    }
]
//console.log(restaurantList[0].data?.cloudinaryImageId)



const AppLayout =()=>{
    return (
        <>
        
        <Header /><Body /><Footer />
        
        </>

    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);