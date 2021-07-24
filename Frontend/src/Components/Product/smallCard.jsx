import React from "react";
import styles from "./smallCard.module.css";
import Divider from '@material-ui/core/Divider';

export const SmallCard = ({ item }) => {
    // console.log(item)
    return (
        <>
            <div className={styles.container}>
            <img className={styles.icon} src={item.img} alt="icon"/>
            <p className={styles.pTag1}>{item.name}</p>
            <p className={styles.pTag2}>{item.description}</p>
            </div>
        </>
    )
}

export const SmallCards = (item) => {
    return (
        <>
            <img  src={item.img} alt="icon"/>
            <p>{item.name}</p>
            <p>{ item.description}</p>
        </>
    )
}

export const SmallCard3 = ({item}) => {
    return (
        <>
            <div className={styles.container3}>
                <div className={styles.container4}>
                    <p className={styles.pTag4}>{item.name}</p>
                </div>
                <div className={styles.container5}>
                    <img className={styles.image1} src="https://www.revv.co.in/grapheneImages/newopen/mark.svg" alt="icon"/>
                </div>
                <div>
                    <img className={styles.image2} src="https://www.revv.co.in/grapheneImages/newopen/cross.svg" alt="icon"/>
                </div>
            </div>
            <Divider/>
        </>
    )
}