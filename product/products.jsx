import React, { Component, Fragment } from 'react'
import Logo from '../../component/Img/mudah.png' 
import Apa from '../../component/Img/keranjng.png'
import '../product/products.css'
import CardProducts from '../CardProducts/cardProducts'

class Products extends Component {
    constructor() {
        super()
        this.state = {
             count : 0,
        }
    }
    UbahPoint = (neValue) =>{
        this.setState({
            count: neValue
        })
    }

    render() {
        return (
         <Fragment>
             <div className="navbar ">
                <img src={Logo} alt="" className = "logos" />
                     <h6>Keranjang : <span className="count">{this.state.count}</span>
                <img className="keranjang" src={Apa} alt=""/ > </h6>
             </div>
           < CardProducts ubahKeranjang={(neValue)=>this.UbahPoint(neValue)}/>
         </Fragment>
        )
    }
}

export default Products
