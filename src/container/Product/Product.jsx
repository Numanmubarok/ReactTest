import React, {Component, Fragment} from 'react'
import ayam from '../../img/ayamPotong.jpg'
import CardProduct from '../CardProduct/CardProduct'
class Product extends Component {

    state={
        order: 5
    }

    handleCounter = (newValue) => {
        this.setState({
            order: newValue
        })
    }
    render(){
        return(
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <img src="" alt=""/>
                    </div>
                    <div className="troley">
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>
                <CardProduct onCounter={(value)=> this.handleCounter(value)}/>
            </Fragment>
        )
    }
}

export default Product;