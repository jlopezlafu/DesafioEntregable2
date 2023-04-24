const fs = require("fs");

class ProductManager {
    constructor(path) {
        this.path = path;
        this.products = [];
        const productsString = fs.readFileSync(this.path, "utf-8");
        const products = JSON.parse(productsString);
        this.products = products;
    }
    addProduct(product) {
        if (
            !product.title ||
            !product.description ||
            !product.price ||
            !product.thumbnail ||
            !product.code ||
            !product.stock
        ) {
            throw new Error("Missing fields");
        }

        let nextId = this.getNextId();
        newProduct.id = nextId;
        const allProductsArray = this.read();
        allProductsArray.push(newProduct);
        this.write(allProductsArray);
    }

    getNextId() {
        let lastId = 0;
        let allProductsArray = this.read(this.file);
        if (allProductsArray.length > 0) {
            lastId = allProductsArray[allProductsArray.length - 1].id;
        }
        return lastId + 1;
    }
    createProduct(product) {
        this.products.push(product);
        const productsString = JSON.stringify(this.products);
        fs.writeFileSync("productos.json", productsString);

    }
    updateProduct(product) {
        fs.writeFileSync("productos.json", productsString);

    }
    deleteProdcut(product) {
        fs.writeFileSync("productos.json", productsString);

    }
    getAllProducts() {
        return this.products;

    }
    getProductById() {
        fs.writeFileSync("productos.json", productsString);

    }

}

const productManager = new ProductManager();
productManager.createProduct({
    title: 'remera',
    description: 'Remera Azul',
    price: 3000,
    thumbnail: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/685/943/products/img_14011-5a0175d71af606b29816393560687328-480-0.jpg',
    code: 'Abc124',
    stock: 200,
})
productManager.createProduct({
    title: 'remera',
    description: 'Remera rosa',
    price: 3000,
    thumbnail: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/685/943/products/img_14011-5a0175d71af606b29816393560687328-480-0.jpg',
    code: 'Abc124',
    stock: 200,
})
console.log(productManager.addProduct(product));
console.log(productManager.addProduct(product2));
console.log(productManager.getProducts());