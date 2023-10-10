const expressFunction = require('express');
const mongoose = require('mongoose');
const expressApp = expressFunction();

const url = 'mongodb://127.0.0.1:27017/db_it';
const config = {
    autoIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}

var Schema = require('mongoose').Schema;

const userSchema = Schema({
    type: String,
    id: String,
    name: String,
    detail: String,
    quantity: Number,
    price: Number,
    file: String,
    img: String
}, {
    collection: 'products'
});

let Product
try {
    Product = mongoose.model('products')
} catch (error) {
    Product = mongoose.model('products', userSchema);
}

expressApp.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200')
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, PATCH, DELETE, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Option, Authorization')
    return next();
});

expressApp.use(expressFunction.json());
expressApp.use((req, res, next) => {
    mongoose.connect(url, config)
    .then(() => {
        console.log('Connected to MongoDB...');
        next();
    })
    .catch(err => {
        console.log('Cannot connect to MongoDB');
        res.status(501).send('Cannot connect to MongoDB')
    })
})

const addProduct = (productData) => {
    return new Promise ((resolve, reject) => {
        var new_product = new Product(productData);
        new_product.save()
            .then(data => {
                console.log(data);
                resolve({ message: 'Product added successfully' });
            })
            .catch(err => {
                console.error(err);
                reject(new Error('Cannot insert product to DB!'));
            });
    });
}

const getProducts = () => {
    return new Promise((resolve, reject) => {
        Product.find({})
            .then(data => {
                resolve(data || []);
            })
            .catch(err => {
                reject(new Error('Cannot get products!'));
            });
    });
}

// http://localhost:3000/products/add

// {
//     "type": "cpu",
//     "id": "100001",
//     "name": "Intel Core i7 Den 10th",
//     "detail": "The Intel Core i7-10750H is a high-end processor for labtops with six cores based on the Comet Lake architecture",
//     "quantity": 10,
//     "price": 10,
//     "file": "testfile",
//     "img": "testImg"
// }

expressApp.post('/products/add', async (req, res) => {
    console.log('add');
    try {
        const result = await addProduct(req.body);
        console.log(result);
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Cannot insert product to DB!' });
    }
});

//  http://localhost:3000/products/get
expressApp.get('/products/get', async (req, res) => {
    console.log('get');
    try {
        const result = await getProducts();
        console.log(result);
        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Cannot get products!' });
    }
});

expressApp.listen(3000, function(){
    console.log('Listening on port 3000')
})