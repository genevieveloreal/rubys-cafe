import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexWrap: "wrap",
        margin: "10px 0"
    },
    itemName: {
        fontSize: "16px",
        fontWeight: "500",
        flex: "1 0 85%",
    },
    itemPrice: {
        fontSize: "16px",
        fontWeight: "500",
        flex: "0 0 15%",
        textAlign: "right"
    },
    itemDesc: {
        fontSize: "14px",
        flex: "0 0 95%"
    },
    subItems: {
        fontSize: "14px",
        display: "flex",
        flexWrap: "wrap",
        width: "100%",
        margin: "0px 0"
    },
    subItemName: {
        flex: "1 0 90%",
    },
    subItemPrice: {
        flex: "0 0 10%",
        textAlign: "right"
    }

});

export default function MenuItem(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.itemName}>{props.name}</div>
            {
                props.price &&
                <div className={classes.itemPrice}>{props.price}</div>
            }
            {
                props.desc &&
                <div className={classes.itemDesc}>{props.desc}</div>
            }
            {props.items &&
                props.items.map((item, key) =>
                    <div className={classes.subItems}>
                        <div className={classes.subItemName}> {item.name} </div>
                        <div className={classes.subItemPrice}> {item.price} </div>
                    </div>
                )
            }
        </div>
    )
}