export class Product{

     constructor(product_name, product_brand, product_type, product_price, product_img) {
    this.product_name = product_name;
    this.product_brand = product_brand;
    this.product_img = product_img;
    this.product_price = product_price;
    this.product_type = product_type;
  }

  get priceCategory() {
    if (this.product_price < 500) {
      return "low";
    }
    if (this.product_price <= 1000) {
      return "mid";
    }
    return "high";
  }

      render(){

        const div = document.createElement('div');

        div.className = 'product';

               

        
        /*
        <div class="product" data-brand="apple" data-type="mobile" data-price="high">

        <img src="https://via.placeholder.com/200" alt="iPhone" />

        <h3>iPhone 13</h3>

        <p>$1099</p>

        </div> 
        */
        // The following lines will be used to manipulate the custom attributes of the div like "data-brand" etc
        div.dataset.brand = this.product_brand;

        div.dataset.price = this.product_price;

        div.dataset.type = this.product_type;

        div.innerHTML = `
  <img src="${this.product_img}" alt="Product Image" />
  <h3>${this.product_name}</h3>
  <p>$${this.product_price}</p>
`;
            return div;

      }

}