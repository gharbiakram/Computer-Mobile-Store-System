export class User {
  constructor(name, email = "", phone = "", age = "") {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.age = age;
    this.cart = [];
  }

  // Add to cart
  addToCart(item) {
    const existing = this.cart.find(p => p.name === item.name);
    if (existing) {
      existing.quantity += item.quantity;
    } else {
      this.cart.push(item);
    }
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
    localStorage.setItem('user', JSON.stringify(this));
  }

  static load() {
    const userData = localStorage.getItem('user');
    if (userData) {
      const obj = JSON.parse(userData);
      const user = new User(obj.name, obj.email, obj.phone, obj.age);
      user.cart = obj.cart || [];
      return user;
    } else {
      const user = new User("Guest");
      user.save();
      return user;
    }
  }
}
