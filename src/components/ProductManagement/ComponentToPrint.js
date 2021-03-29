import React,  { Component } from 'react' ;
import ProductTable from './ProductTable'
class ComponentToPrint extends Component {
  render() {
    return <ProductTable ref={(el) => (this.componentRef = el)} />;
    
  }
}
export default ComponentToPrint;