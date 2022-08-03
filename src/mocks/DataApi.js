

const products = [
    {id:'01', name:'remera', description:"Lorem ipsum dolor sit amet", price:1250, img:'https://picsum.photos/200', stock:5,},
    {id:'02', name:'pantalon', description:"Lorem ipsum dolor sit amet", price:2300, img:'https://picsum.photos/201', stock:15},
    {id:'03', name:'campera', description:"Lorem ipsum dolor sit amet", price:3800, img:'https://picsum.photos/202', stock:7},
    {id:'04', name:'buzo', description:"Lorem ipsum dolor sit amet", price:2900, img:'https://picsum.photos/203', stock:3},
    {id:'05', name:'buzo', description:"Lorem ipsum dolor sit amet", price:2900, img:'https://picsum.photos/203', stock:3},
    {id:'06', name:'buzo', description:"Lorem ipsum dolor sit amet", price:2900, img:'https://picsum.photos/203', stock:3},
    ]


const data = new Promise((resolve, reject) => {
    
    let condition = true
        setTimeout(()=> {
    if(condition){
            resolve(products)
    }else{
            reject('Error')
    }}, 2000)
    
})

export default data;