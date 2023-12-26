const product = require("../schema/productSchema");

const addProduct = async(request,response,next)=>{
    try {
        const { productName, category, brand, unitPrice, quantityInStock, unitOfMeasure } = request.body;
        const newProductResponse = await product.create({productName,category,brand,unitPrice,quantityInStock,unitOfMeasure})
        if(newProductResponse){
            return response.status(201).json({
                status:201,
                message:"successfully added"
            })
        }
        else{
            return response.status(402).json({
                status:402,
                message:"some Error occured"
            })
        }

    } catch (error) {
        console.log(error)
        return response.status(500).json({
            status:500,
            message:"server error "+error
        })   
    }
}

const getAllProducts = async (request, response) => {
    try {
      // Retrieve all products from the database
      const products = await product.find({});
        if(products){
           return  response.status(200).json({ data:products,status:200 });
        }
        else{
           return response.status(402).json({ message:"some error occured",status:402 });
        }
      // Respond with the list of products
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error'+error,status:500 });
    }
  };

module.exports = {addProduct,getAllProducts}