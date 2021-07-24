import React from "react";
import { CustomCard } from "../CardComponents/CustomCard";
import styles from "./product.module.css";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { ProductBox } from "./productBox";

const arr = [
    {
        img: "https://www.revv.co.in/grapheneImages/PDP/flash.svg",
        message: "1",
        class: styles.paper,
        id:1
    },
    {
        img: "https://www.revv.co.in/grapheneImages/PDP/flash.svg",
        message: "3",
        class: styles.paper,
        id:2
    },
    {
        img: "https://www.revv.co.in/grapheneImages/PDP/flash.svg",
        message: "6",
        class: styles.paper,
        id:3
    },
    {
        img: null,
        message: "12",
        class: styles.paper,
        id:4
    },
    {
        img: null,
        message: "24",
        class: styles.paper,
        id:5
    },
    {
        img: null,
        message: "36",
        class: styles.paper,
        id:6
    }
]
export const Product = () => {
    const [state, setState] = React.useState(arr);

    const handleClick = (id) => {
        
        const updatedArr = state.map(el => el.id === id ? { ...el, class: styles.paper1 } : { ...el, class: styles.paper });
        setState(updatedArr);
    }

    return (
        <>           
            <CustomCard type="secondary">               
                <div className={styles.Container1}>
                <h1 className={styles.header1}>Maruti Alto 800</h1>
                </div>
                <h2 className={styles.header2}>Subscription Tenure</h2>
                <Grid container spacing={1} style={{ padding: 25, marginTop: -30 }}>
                    {
                        state.map((el) => {
                            return <ProductBox handleClick={handleClick} key={el.id} el={el}/>
                        })
                    }
                </Grid>
                <p style={{marginTop:0}}><span className={styles.p1}>₹ 14,399</span><span className={styles.p2}>/month</span><s className={styles.p3}>₹16,000</s><span className={styles.p4}>(10% Off)</span></p>
                <p className={styles.p5}>(Inclusive of taxes)</p>
                <div  className={styles.Button1}>
                    <p style={{paddingTop:16}}><span style={{color:"white",fontSize:18,marginLeft:"40%"}}>{`Proceed >`}</span></p>
                </div>
                <Grid container spacing={2} style={{marginLeft:25,fontSize: "12.5px"}}>
                    <Grid item xs={6}>
                        <p style={{marginBottom:3}}>Expected date of delivery</p>
                        <div style={{display:"flex"}}>
                        <p style={{marginTop:0,marginLeft:0,fontSize:13,fontWeight:"bold"}}>Between 24th and 25th jul</p>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <p style={{marginBottom:3}}>Place of delivery</p>
                        <p style={{marginTop:0,fontSize:13,fontWeight:"bold"}}>At your doorstep</p>
                    </Grid>
                </Grid>
                <div style={{display:"flex"}}>
                <img style={{marginTop:-7,width:10,marginLeft:30}} src="https://www.revv.co.in/grapheneImages/PDP/flash.svg" alt="icon"/>
                <p  style={{fontSize:11,marginTop:0,marginLeft:5,color:"#c9b410"}}><span className={styles.effect1}>Due to high demand, delivery timelines may be impacted</span></p>
                </div>
                <div style={{ marginLeft: 25 }}>
                    <img src="https://www.revv.co.in/grapheneImages/PDP/green-tick-icon.svg" alt="tick" />
                   <span style={{marginLeft:"5%",fontSize:15}}> Extend anytime at normal prices</span><span style={{marginLeft:"25%",color:"#1caba2",cursor:"pointer"}}><u onClick={""}>Details</u></span>
                </div>
                <div style={{marginLeft:25,marginBottom:20,marginTop:10}}>
                    <img src="https://www.revv.co.in/grapheneImages/PDP/green-tick-icon.svg" alt="tick" />
                    <span style={{marginLeft:"5%",fontSize:15}}> Return anytime, Just pay fee difference</span><span style={{ marginLeft: "15%", color:"#1caba2",cursor:"pointer"}}><u onClick={""}>Details</u></span>
                </div>
                <Button style={{marginLeft:"25px"}} className={styles.Button2} variant="outlined">
                    <img src="https://www.revv.co.in/grapheneImages/PDP/call-icon.svg" alt="call"/>
                    <span style={{ marginLeft: 10, marginRight: 10, color:"#1caba2"}}>Dial </span><span style={{marginRight:10,fontWeight:"bold"}}>8860003555</span>  <span style={{color:"#1caba2"}}>to get to us</span>
                </Button>
           </CustomCard>          
        </>
   )
}