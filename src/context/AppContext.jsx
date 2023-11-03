import { createContext } from "react";
const products = [

    {
        "id": 1,
        "title": "Pink-life",
        "description": "The bouquet brings happiness to the recipient and the giver, giving love, durable with time",
        "price": 549,
        "category": "flower",
        "thumbnail":"data:image/jpeg;base64,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"
        
       
        
    },
    {
        "id": 2,
        "title": "Duck-love",
        "description": "The bouquet brings happiness to the recipient and the giver, giving love, durable with time",
        "price": 899,
        "category": "flower",
        "thumbnail": "data:image/jpeg;base64,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",
        
    },
    {
        "id": 3,
        "title": "Yellow with you",
        "description": "The bouquet brings happiness to the recipient and the giver, giving love, durable with time",
        "price": 1249,
        "category": "flower",
        "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
        
    },
    {
        "id": 4,
        "title": "Yellow with you",
        "description": "The bouquet brings happiness to the recipient and the giver, giving love, durable with time",
        "price": 1249,
        "category": "flower",
        "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
        
    },
    {
        "id": 5,
        "title": "Yellow with you",
        "description": "The bouquet brings happiness to the recipient and the giver, giving love, durable with time",
        "price": 1249,
        "category": "flower",
        "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
        
    },
    {
        "id": 6,
        "title": "Yellow with you",
        "description": "The bouquet brings happiness to the recipient and the giver, giving love, durable with time",
        "price": 1249,
        "category": "flower",
        "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
        
    },
    {
        "id": 7,
        "title": "Yellow with you",
        "description": "The bouquet brings happiness to the recipient and the giver, giving love, durable with time",
        "price": 1249,
        "category": "flower",
        "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
        
    },
    {
        "id": 8,
        "title": "Yellow with you",
        "description": "The bouquet brings happiness to the recipient and the giver, giving love, durable with time",
        "price": 1249,
        "category": "flower",
        "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
        
    },
    {
        "id": 9,
        "title": "Yellow with you",
        "description": "The bouquet brings happiness to the recipient and the giver, giving love, durable with time",
        "price": 1249,
        "category": "flower",
        "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
        
    },
    {
        "id": 10,
        "title": "Yellow with you",
        "description": "The bouquet brings happiness to the recipient and the giver, giving love, durable with time",
        "price": 1249,
        "category": "flower",
        "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
        
    },
    {
        "id": 11,
        "title": "Yellow with you",
        "description": "The bouquet brings happiness to the recipient and the giver, giving love, durable with time",
        "price": 1249,
        "category": "flower",
        "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
        
    },
    {
        "id": 12,
        "title": "Yellow with you",
        "description": "The bouquet brings happiness to the recipient and the giver, giving love, durable with time",
        "price": 1249,
        "category": "flower",
        "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
        
    },
    {
        "id": 13,
        "title": "Yellow with you",
        "description": "The bouquet brings happiness to the recipient and the giver, giving love, durable with time",
        "price": 1249,
        "category": "flower",
        "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
        
    },
    {
        "id": 14,
        "title": "Yellow with you",
        "description": "The bouquet brings happiness to the recipient and the giver, giving love, durable with time",
        "price": 1249,
        "category": "flower",
        "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
        
    },
    
]
//cung cấp dữ liệu sản phẩm cho toàn bộ cửa hàng 
//hiển thị danh sách sản phẩm trong trang <Product />

export const AppContext = createContext({});

const AppProvider = ({ children }) => {

    const findProductById = (id) => {
        return products.find(product => product.id === +id) //ở đây có thể để là poduct.id == id vì id (cái id có ngoặc hồng) nhận vào nó dạng chuỗi mà cái id == id kia là dạng số  ,  muốn để === thì thêm dấu + để đổi lại thành dạng số ok

    };

    
    return (
        <AppContext.Provider value={{ products, findProductById }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;