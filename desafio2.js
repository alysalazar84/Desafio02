function makeUniqueCode(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var characterslength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * characterslength));
    }
    return result;
}



class ProductManager{
    constructor(products=[]){
        this.products=products;
    }
    
    getProducts(){
        if(this.products.length===0){
            console.log("El product Manager esta vacio")
        }
        else {
            console.log(this.products)
        }
    }

    addProduct(product){
        if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock){
            console.log("El producto no contiene las propiedades requeridas: Title, Description, Price, Thumbnail, Code o Stock.")
        }
        else if (this.products.some((products)=>products.code===product.code)){
            console.log("Este elemento ya esta dentro." + product.title + product.code)
        }
        else {
            this.products.push(product)
            console.log("se agrego el elemento de titulo: "+product.title)
        }
    }
    getProductById(id){

        const idFound = this.products.find(products=> products.code === id)
        if (idFound) {
            console.log(idFound)
        } else {
            console.log("Not Found")
        }
        
    }
}


const jorge = {title:"Jorge", description:"un pibito", price:200, thumbnail:"jorgito.jpg",code:makeUniqueCode(8),stock:4}

const matias = {title:"Matias", description:"otro pibito", price:250, thumbnail:"matute.jpg",code:makeUniqueCode(8),stock:5}

const productManagerUno = new ProductManager

console.log("****PRIMERO CHEQUEO EL ARRAY VACIO")
productManagerUno.getProducts()

console.log("****LUEGO AGREGO UN OBJETO")
productManagerUno.addProduct(jorge)

console.log("****LUEGO CONSULTO NUEVAMENTE GETPRODUCTS")
productManagerUno.getProducts()

console.log("****AGREGO UN NUEVO OBJETO COMPLETO AL ARRAY, Y LUEGO OTRO INCOMPLETO, Y LUEGO VUELVO A TRATAR DE INGRESAR ALGO QUE YA ESTABA")
productManagerUno.addProduct(matias)

productManagerUno.addProduct({title:"algoVacio"})

productManagerUno.addProduct(jorge)

console.log("****LUEGO OTRA VEZ CONSULTO NUEVAMENTE GETPRODUCTS")

productManagerUno.getProducts()

console.log("****LUEGO CHEQUEO UBICAR ELEMENTOS CON UN ID EXISTENTE")
//En este caso, como el id es generado por una funcion, y siempre se genera uno distinto en cada iteracion del programa
// lo que hago es pasarle la propiedad code de un producto
productManagerUno.getProductById(matias.code)

console.log("****LUEGO CHEQUEO UBICAR ELEMENTOS QUE NO EXISTAN")

productManagerUno.getProductById("chango")