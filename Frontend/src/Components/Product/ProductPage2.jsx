import React from "react";
import Divider from '@material-ui/core/Divider';
import { SmallCard3 } from "./smallCard";
import Button from '@material-ui/core/Button';

const data = [
    {
        name: "Zero down payment & road tax",
    },
    {
        name: "No long term commitment",
    },
    {
        name: "No loan process, no cibil check",
    },
    {
        name: `Doorstep pick & drop for maintenance & service`,
    }
]
export const ProductPage2 = () => {
    return (
        <>
            <div style={{background:"#868e96",marginTop:20}}>
                <div style={{marginLeft:220,width:"44vw",}}>
                    <h1>Car subscription vs buying</h1>
                    <div>
                        <div>
                        
                        </div>
                     <Divider />
                        {data.map((el,i) => {
                            return <SmallCard3 key={i} item={el}/>
                        })}
                    </div>
                    <Button style={{marginTop:20}} color="transparent" variant="contained">
                        <span style={{color:"#1caba2"}}>View more</span>
                    </Button>
                </div>
            </div>
        </>
    )
}