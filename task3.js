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

    updateProduct(id, newProduct) {
        const product = this.products.find(product => product.id === id); 
        if (!product) {
            console.log("Product not found.");
            return;
        }
        Object.assign(product, newProduct);
        console.log("Product updated successfully.");
    }
    
    viewProducts() {
        return this.products;
    }   

    deleteProduct(id) {
        const index = this.products.findIndex(product => product.id === id);
        if (index !== -1) {
            this.products.splice(index, 1);
            console.log("Product deleted successfully.");
        }else{
            console.log("Product not found.");
        }
    }
}

const store = new KCStore();
store.addProduct({id: 1, name: "Laptop", price: 1000});
store.addProduct({id: 2, name: "Smartphone", price: 500});
console.log(store.viewProducts());
store.updateProduct(1, {id: 1, name: "Gaming Laptop", price: 1500});
console.log(store.viewProducts());
store.deleteProduct(1);
console.log(store.viewProducts());
