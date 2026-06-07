/*1. Write a function that accepts a GitHub username as an argument and returns the details of that user if the user exists.

Use https://api.github.com/users/<GitHub username>

Use fetch and async/await for this exercise.**/

const userDetails = async function (username) {
    try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        if (!res.ok) {
            throw new Error(`User not found: ${res.status}`);
        }

        const data = await res.json();
        return data;

    } catch (error) {
        console.error(error.message);
        return null;   
    }
};
(async function() {
    const user = await userDetails('OkwukweLydia');
    console.log(user);
    const user2 = await userDetails('Agonsi123');
    console.log(user2);
})();

/*2. Write a class named KCStore that has "products" as it's property. 
    It should also have methods to add, update, view and delete products.
**/

class KCStore {
    constructor() {
        this.products = [];
    }
    
    addProduct(product) {
        this.products.push(product);
        console.log("Product added successfully.");
    }

    updateProduct(oldProduct, newProduct) {
        const index = this.products.indexOf(oldProduct); 
        if (index !== -1) {
            this.products[index] = newProduct;
            console.log("Product updated successfully.");
        }else {
            console.log("Product not found.");
        }
    }
    
    viewProducts() {
        return this.products;
    }   

    deleteProduct(product) {
        const index = this.products.indexOf(product);
        if (index !== -1) {
            this.products.splice(index, 1);
            console.log("Product deleted successfully.");
        }else{
            console.log("Product not found.");
        }
    }
}

const store = new KCStore();
store.addProduct("Laptop");
store.addProduct("Smartphone");
console.log(store.viewProducts());
store.updateProduct("Laptop", "Gaming Laptop");
console.log(store.viewProducts());
store.deleteProduct("Smartphone");
console.log(store.viewProducts());