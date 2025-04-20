import { Product } from "./product.js";

export const productList = [
  new Product("0", "iPhone 13", "apple", "mobile", 1099, "https://via.placeholder.com/200", {
    storage: "128GB",
    camera: "12MP Dual",
    display: "6.1 inch OLED"
  },{
    black: "https://via.placeholder.com/400/000000",
    blue: "https://via.placeholder.com/400/0000FF",
    red: "https://via.placeholder.com/400/FF0000"
  }),
  new Product("1", "Samsung Galaxy S21", "samsung", "mobile", 799, "https://via.placeholder.com/200", {
    storage: "256GB",
    camera: "64MP Triple",
    display: "6.2 inch AMOLED"
  },{
    black: "https://via.placeholder.com/400/000000",
    blue: "https://via.placeholder.com/400/0000FF",
    red: "https://via.placeholder.com/400/FF0000"
  }),
  new Product("2", "Dell XPS 13", "dell", "laptop", 1299, "https://via.placeholder.com/200", {
    cpu: "Intel i7",
    ram: "16GB",
    storage: "512GB SSD"
  },{
    black: "https://via.placeholder.com/400/000000",
    blue: "https://via.placeholder.com/400/0000FF",
    red: "https://via.placeholder.com/400/FF0000"
  }),
  new Product("3", "MacBook Pro", "apple", "laptop", 1999, "https://via.placeholder.com/200", {
    cpu: "Apple M2",
    ram: "16GB",
    storage: "1TB SSD"
  },{
    black: "https://via.placeholder.com/400/000000",
    blue: "https://via.placeholder.com/400/0000FF",
    red: "https://via.placeholder.com/400/FF0000"
  }),
  new Product("4", "Dell Inspiron", "dell", "laptop", 499, "https://via.placeholder.com/200", {
    cpu: "Intel i5",
    ram: "8GB",
    storage: "256GB SSD"
  },{
    black: "https://via.placeholder.com/400/000000",
    blue: "https://via.placeholder.com/400/0000FF",
    red: "https://via.placeholder.com/400/FF0000"
  }),
  new Product("5", "iPhone SE", "apple", "mobile", 399, "https://via.placeholder.com/200", {
    storage: "64GB",
    camera: "12MP Single",
    display: "4.7 inch Retina"
  },{
    black: "https://via.placeholder.com/400/000000",
    blue: "https://via.placeholder.com/400/0000FF",
    red: "https://via.placeholder.com/400/FF0000"
  }),
  new Product("6", "Predator Helios 300", "Acer", "laptop", 400, "https://via.placeholder.com/200", {
    cpu: "Intel i7",
    ram: "16GB",
    gpu: "NVIDIA GTX 1660Ti"
  },{
    black: "https://via.placeholder.com/400/000000",
    blue: "https://via.placeholder.com/400/0000FF",
    red: "https://via.placeholder.com/400/FF0000"
  })
];
