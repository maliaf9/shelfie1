import React, {Component} from 'react';
import './Form.css';
import Axios from 'axios';



class Form extends Component{
   constructor(props){
       super(props);
       this.state= {
           
           newProduct: [],
           newImg: '',
           newName: '',
           newPrice: '',
           text: ''
       }
   }

   componentDidMount(){
    Axios.get('/api/inventory').then( res => {
        console.log(res.data);
        this.setState({
            inventory: res.data
        })
    })
    }
    
   handleChange = (e) => {
       this.setState({
        text: e.target.value
       }
       )

   }

   createProduct = () => {
       const {newName, newImg, newPrice} = this.state;
    Axios.post('/api/products', {newName, newImg, newPrice}).then( res => {
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

    // cancelForm(){

    // }

    removeProduct = ( id ) => {
        Axios.delete(`/api/inventory/${id}` ).then( response => {
        this.setState({ inventory: response.data });
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { newImg, newName, newPrice} = this.state;

        Axios.post('/api/inventory', {newImg, newName, newPrice});
    }


   render(){
       const {newImg, newName, newPrice, inventory} = this.state;
 
       return (
           <form onSubmit={this.handleSubmit}>
               <div>
                   Image URL:
                   <input placeHolder='url' type = 'text' name='productImage' value={newImg} onChange={this.handleChange}/>
               </div>
            <div>
                Product Name:
                <input placeHolder='Type Name' type = 'text' name='productName' value={newName} onChange={this.handleChange}/>
            </div>
            <div>
                Price:
                <input placeHolder='0' type = 'text' name='productPrice' value={newPrice} onChange={this.handleChange}/>
            </div>

            <button onClick={this.handleSubmit}>Add</button>

           </form>
       )
   }

}

export default Form;


