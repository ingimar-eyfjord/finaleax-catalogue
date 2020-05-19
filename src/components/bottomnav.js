import React from 'react';
import { Link } from 'react-router-dom'
export default function BottomNav(props) {

    let style = { display: "block" }
    if (props.whishlist.length == 0) {
        style = {
            display: "none"
        }
    }
    let Cartstyle = { display: "block" }
    if (props.cart.length == 0) {
        Cartstyle = {
            display: "none"
        }
    }


    return (

        <div style={props.Paralexstyle} className="BottomNav cardNoRadiusBottom">
            <div>
                <div className="home menuIcon"></div>
                <p>Home</p>
            </div>
            <Link to="/cart">
                <div className="shopping menuIcon"></div>
                <p>My Cart</p>
                <div style={Cartstyle} className="wishLength">{props.cart.length}</div>
            </Link>
            <div>
                <div className="heart menuIcon"></div>
                <p>Wishlist</p>
                <div style={style} className="wishLength">{props.whishlist.length}</div>
            </div>
        </div>
    )
}