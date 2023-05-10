import React from "react";
import Header from './components/Header';
import Footer from "./components/Footer";
import Items from "./components/Items";



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      items: [
        {id: 1,
        title: 'Calacatta Neo',
        img: 'plitka1.jpg',
        desc: 'Lorem ipsum bla-bla-bla',
        category: 'keramogranit',
        price: '1990'},

        {id: 2,
          title: 'Calacatta Superb',
          img: 'plitka2.jpg',
          desc: 'Lorem ipsum bla-bla-bla',
          category: 'keramogranit',
          price: '2390'},

          {id: 3,
            title: 'Calacatta Roma',
            img: 'plitka3.jpg',
            desc: 'Lorem ipsum bla-bla-bla',
            category: 'keramogranit',
            price: '2690'},
            {id: 4,
              title: 'Calacatta Oro',
              img: 'plitka4.jpg',
              desc: 'Lorem ipsum bla-bla-bla',
              category: 'keramogranit',
              price: '2190'},
              {id: 5,
                title: 'Atlantic White',
                img: 'plitka5.jpg',
                desc: 'Lorem ipsum bla-bla-bla',
                category: 'keramogranit',
                price: '2190'},
      ]
    }
    this.addtoOrder = this.addtoOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
  }
  render() {  
   return (
    <div className="wrapper">
      <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
      <Items items={this.state.items} onAdd={this.addtoOrder}/>
      <Footer/>
    </div>
  );}

  deleteOrder (id) {

  }

  addtoOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
      isInArray = true
    })
    if(!isInArray)
    this.setState({orders: [...this.state.orders, item]})
  }
}

export default App;
