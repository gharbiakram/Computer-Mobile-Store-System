export class User {
    constructor(name) {
      this.name = name;
      this.cart = [];
    }
  
    addToCart(item) {
      this.cart.push(item);
      this.save();
    }
  
    removeFromCart(index) {
      this.cart.splice(index, 1);
      this.save();
    }
  
    updateCartItem(index, newItem) {
      this.cart[index] = newItem;
      this.save();
    }
  
    save() {
      sessionStorage.setItem('user', JSON.stringify(this));
    }
  
    static load() {
      const userData = sessionStorage.getItem('user');
      if (userData) {
        const obj = JSON.parse(userData);
        const user = new User(obj.name);
        user.cart = obj.cart;
        return user;
      } else {
        const user = new User("Guest");
        user.save();
        return user;
      }
    }
  }
  