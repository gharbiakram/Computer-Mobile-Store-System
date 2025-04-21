export class User {
    constructor(name) {
      this.name = name;
      this.cart = [];
    }
  // Adds an item to the cart. If the item already exists, it updates the quantity.
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
    
    /**
 * Loads the user data from sessionStorage.
 * If user data exists, it creates a new User object using the saved data.
 * If no data is found, it creates a default 'Guest' user and saves it.
 */
    static load(){
       // Get the saved user data from sessionStorage
      const userData = localStorage.getItem('user');
      if (userData) {
        // If data exists, parse it from JSON string to object
        const obj = JSON.parse(userData);
        // Create a new User object using the saved name
        const user = new User(obj.name);
         // Restore the cart from the saved object
        user.cart = obj.cart;
        // Return the fully restored user
        return user;
      } else {
         // If no data exists in sessionStorage, create a new default user
        const user = new User("Guest");
        // Save the new user to sessionStorage
        user.save();
        // Return the default user
        return user;
      }
    }
  }
  