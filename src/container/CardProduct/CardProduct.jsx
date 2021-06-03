import React, {Component, Fragment} from 'react'
import ayam from '../../img/ayamPotong.jpg'
class CardProduct extends Component {

    state={
        order: 5
    }
    handleCounter = (newValue) =>{
        this.props.onCounter(newValue)
    }
    handlePlus = () => {
        this.setState({
            order: this.state.order +1
        }, ()=>{
            this.handleCounter(this.state.order);
        })
    } 
    handleMinus = () =>{
        if(this.state.order > 0){
            this.setState({
                order: this.state.order -1
            }, ()=>{
                this.handleCounter(this.state.order);
            })            
        }
    }
    render(){
        return(
                <div className="card">
                    <div className="img-thumb-prod">
                        <img src={ayam} alt="product-img"/>
                    </div>
                    <p className="product-title">Daging Ayam Beku</p>
                    <p className="product-price">Rp.500.000</p>
                    <div className="counter">
                        <button className="minus" onClick={this.handleMinus}>-</button>
                        <input type="text" value={this.state.order}/>
                        <button className="plus" onClick={this.handlePlus}>+</button>
                    </div>
                </div>
        )
    }
}

export default CardProduct;