import imagen1 from "../components/img/abrigo1.jpg"
import imagen2 from "../components/img/abrigo2.jpg"
import imagen3 from "../components/img/abrigo3.jpg"
import imagen4 from "../components/img/camiseta1.jpg"
import imagen5 from "../components/img/camiseta2.jpg"
import imagen6 from "../components/img/camiseta3.jpg"
import imagen7 from "../components/img/pantalones1.jpg"
import imagen8 from "../components/img/pantalones2.jpg"
import imagen9 from "../components/img/pantalones3.jpg"

const products = [

    {id: '1', name: 'Abrigo1', category: 'abrigos', price: 18000, stock: 10, description:'Lorem' , img:imagen1},
    {id: '2', name: 'Abrigo2', category: 'abrigos', price: 18000, stock: 8, description:'Lorem' , img:imagen2},
    {id: '8', name: 'Abrigo3', category: 'abrigos', price: 18000, stock: 6, description:'Lorem' , img:imagen3},
    {id: '3', name: 'Camiseta1', category: 'camisetas', price: 7500, stock: 14, description:'Lorem' , img:imagen4},
    {id: '4', name: 'Camiseta2', category: 'camisetas', price: 7500, stock: 7, description:'Lorem' , img:imagen5},
    {id: '9', name: 'Camiseta3', category: 'camisetas', price: 7500, stock: 11, description:'Lorem' , img:imagen6},
    {id: '5', name: 'Pantalones1', category: 'pantalones', price: 11500, stock: 20, description:'Lorem' , img:imagen7},
    {id: '6', name: 'Pantalones2', category: 'pantalones', price: 12000, stock: 5, description:'Lorem' , img:imagen8},
    {id: '7', name: 'Pantalones3', category: 'pantalones', price: 12000, stock: 8, description:'Lorem' , img:imagen9},
    
]



export const mFetch = (id) => new Promise((res) =>{
        setTimeout(() => {
            res(id ? products.find(product => product.id === id) : products)
        }, 1000);

    })
