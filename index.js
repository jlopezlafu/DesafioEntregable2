const fs = require("fs")

const ProductManager = require("./productManager");

const createFile = async (file_path) => {
    try {
        if (!fs.existsSync(file_path)) {
            await fs.promises.writeFile(file_path, "", "utf8");
        }
    } catch (err) {
        console.log("File creation error", err);
    }
};

const path = "./productos.txt";
createFile(path);
const myProductManager = new ProductManager(path);

const productsToSave = [
    {
        title: 'Remera Rosa',
        description: 'Remera Rosa',
        price: 'USD 10',
        thumbnail: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/685/943/products/img_14011-5a0175d71af606b29816393560687328-640-0.jpg',
        code: 'C0001',
        stock: '5',
    },
    {
        title: 'Remera Negra',
        description: 'Remera Negra',
        price: 'USD 9',
        thumbnail: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbriganti.com.ar%2Fproducts%2Fhxim09525011-remera-hombre-negra-lisa&psig=AOvVaw0KvBGiNUvVilHfIhKSylEQ&ust=1682466035264000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLim-8TYw_4CFQAAAAAdAAAAABAd',
        code: 'C0002',
        stock: '3',
    },
    {
        title: 'Remera Azul',
        description: 'Remera Azul',
        price: 'USD 9',
        thumbnail: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmarcopololp.com.ar%2Fproducto%2Fremera-o-basic-pima%2F&psig=AOvVaw3vyg3QxhTLXTQv4tm8C_Ig&ust=1682466124056000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPChre_Yw_4CFQAAAAAdAAAAABAM',
        code: 'C0003',
        stock: '7',
    },
];

productsToSave.forEach((product) => {
    myProductManager.addProduct(product);
});


const newProduct = {
    title: 'Buzo Negro',
    description: 'Buzo Negro',
    price: 'USD 12',
    thumbnail: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/268/672/products/negro1-be2c9fcafec64f6a2216463391373553-480-0.jpg',
    code: 'C0004',
    stock: '2',
};
const response = myProductManager.updateProduct(1, newProduct);
console.log("Producto actualizado:");
console.log(response);

const response2 = myProductManager.deleteProductById(1);
console.log("Producto eliminado");
console.log(response2);