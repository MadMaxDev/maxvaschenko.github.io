import React from 'react';
import {__App__} from '../containers/styled';

class Product extends React.Component {
  constructor() {
    super();
    this.state = {
      checked: false
    };
  }

  handlerInput(event){
    this.setState({checked: !this.state.checked})
  }

  render() {
    const productPrice = this.props.productPrice;
    const propductQuantity = this.props.propductQuantity;
    let sellPrice = productPrice*propductQuantity;
    console.log('sellPrice', sellPrice);
    return <tr><td>{this.props.productName} <button onClick={this.props.deleteItem.bind(null, this.props.index)}>delete</button></td><td>{this.props.productPrice}</td><td>{this.props.propductQuantity}</td><td>{sellPrice}</td><td>
      <input type="checkbox" onChange={this.state.checked ? ::this.handlerInput : this.props.sellPriceNumer.bind(null, sellPrice)}/></td></tr>
  }
}

class ProductAdder extends React.Component {
  constructor() {
    super();
    this.state = {
      newProd: {name: '', price: 0, quantity: 0}
    };
  }

  handlerEditName(event) {
    this.setState({name: event.target.value});
  }
  handlerEditPrice(event) {
    this.setState({price: event.target.value});
  }
  handlerEditQuantity(event) {
    this.setState({quantity: event.target.value});
  }


  render() {
    let newItem = {name: this.state.name, price: this.state.price, quantity: this.state.quantity};
    console.log(newItem);
    return <div className="productAddItem">
      <span>Название</span><input type="text" value={this.state.name} onChange={::this.handlerEditName}/>
      <span>Кол-во</span><input type="text" value={this.state.price} onChange={::this.handlerEditPrice}/>
      <span>Цена</span><input type="text" value={this.state.quantity} onChange={::this.handlerEditQuantity}/>
      <button onClick={this.props.pushNewItem.bind(null, newItem)}>Add</button>
    </div>
  }

}




class App extends React.Component {
  constructor() {
    super();
    this.state = {
      prods: [
        {name: 'Буряк', price: 23, quantity: 3},
        {name: 'Морква', price: 45, quantity: 5},
        {name: 'Помидоры', price: 22, quantity: 10},
        {name: 'Бананы', price: 15, quantity: 34},
      ],
      summ: 0
    };
  }

  deleteItem(index) {
    this.state.prods.splice(index, 1);
    this.setState({prods: this.state.prods})
  }

  pushNewItem(newProd) {
    this.setState({prods: [...this.state.prods, newProd]})
  }

  sellPriceNumer(sellPrice) {
      let sellResultValue = 0;
      sellResultValue = sellResultValue + sellPrice;
      this.setState({summ: this.state.summ + sellResultValue});
      console.log('sellResultValue', sellResultValue);
      console.log('sellPriceinsellPriceNumer', sellPrice)
  }
  render() {
    const ProductList = this.state.prods.map((item, index) => {
      return <Product
             key={index}
             deleteItem={::this.deleteItem}
             index={index}
             productName={item.name}
             productPrice={item.price}
             propductQuantity={item.quantity}
             sellPriceNumer={::this.sellPriceNumer}
             />;
    });
    return <__App__>
      <table>
        <tbody>
        {ProductList}
        </tbody>
      </table>
      <ProductAdder
        pushNewItem={::this.pushNewItem}
      />
      <p>Сумма:{this.state.summ}</p>
    </__App__>
  }
}


export default App;

