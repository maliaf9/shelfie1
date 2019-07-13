import React, {Component} from 'react';
import './Form.css';
import Axios from 'axios';



class Form extends Component{
   constructor(props){
       super(props);
       this.state= {
           
           inventory: [],
           newImg: '',
           newName: '',
           newPrice: '',
           text: ''
           
        }
   }

   componentWillMount(){
       this.handleChangeImage();
       this.handleChangePrice();
       this.handleChangeProduct();
    
    }

    getInventory = ()=>{
        console.log(this.inventory);
        Axios.get('/api/inventory').then( res => {
            console.log(res.data);
            this.setState({
                inventory: res.data
            })
        })

    }
    
   handleChangePrice = (value) => {
       this.setState({
        newPrice: value
       }
       )

   }

   handleChangeImage = (value) => {
    this.setState({
     newImg: value
    }
    )

}

    handleChangeProduct = (value) => {
        this.setState({
        newName: value
        }
        )

    }


   createProduct = () => {
       const {newName, newImg, newPrice} = this.state;
       console.log(this.state);
    Axios.post('/api/products', {newName, newImg, newPrice}).then( res => {
        console.log(this.state);
        this.setState({
            inventory: res.data
        })
    })
}


   
    updateProducts= (id) => {
        Axios.put(`/api/products/${id}`).then(res => {
            console.log('data after update', res.data)
            this.setState({
                inventory: res.data
            })
        })
    }

    

    removeProduct = ( id ) => {
        Axios.delete(`/api/inventory/${id}` ).then( response => {
        this.setState({ inventory: response.data });
        });
    }



   render(){
 
       return (
      <div className="product_container">
           
             <div>
                 <div> Image URL:</div> 
                  <input onChange={(e) => this.handleChangeImage(e.target.value)} placeholder='url' type = 'text' name='newImg'  value={this.newImg}/>
               </div>
            <div>
                <div>Product Name:</div>
               <input onChange={(e) => this.handleChangeProduct(e.target.value)} placeholder='Type Name' type = 'text' name='newName'  value={this.newName}/>
            </div>
             <div>
                 <div>Price:</div>
                 <input onChange={(e) => this.handleChangePrice(e.target.value)} placeholder='0' type = 'number' name='newPrice'  value={this.newPrice}/>
        </div>

            <button onClick={this.createProduct}>Add</button> 

          
        </div>
       )
   }

}

export default Form;


