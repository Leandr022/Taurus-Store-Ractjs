const products = [
    {id: '1', name: 'Abrigo1', category: 'abrigos', price: 18000, stock: 10, description:'Lorem' , img: '../components/img/abrigo1.jpg'},
    {id: '2', name: 'Abrigo2', category: 'abrigos', price: 18000, stock: 8, description:'Lorem' , img: '../components/img/abrigo2.jpg'},
    {id: '3', name: 'Camiseta1', category: 'camisetas', price: 7500, stock: 14, description:'Lorem' , img: '../components/img/camiseta1.jpg'},
    {id: '4', name: 'Camiseta2', category: 'camisetas', price: 7500, stock: 7, description:'Lorem' , img: '../components/img/camiseta2.jpg'},
    {id: '5', name: 'Pantalones1', category: 'pantalones', price: 11500, stock: 20, description:'Lorem' , img: '../components/img/pantalones1.jpg'},
    {id: '6', name: 'Pantalones2', category: 'pantalones', price: 12000, stock: 5, description:'Lorem' , img: '../components/img/pantalones2.jpg' },
]



export const mFetch = (id) => new Promise((res) =>{
        setTimeout(() => {
            res(id ? products.find(product => product.id === id) : products)
        }, 1000);

    })



