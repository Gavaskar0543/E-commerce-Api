const Product = require('../../../model/product');
//get all products
module.exports.product = async function(req,res){
    const allProducts = await Product.find();

    return res.json(200,{
        message:"products available in db",
       data:allProducts
    })
}

//creae
module.exports.create =async function(req,res){
    try{
      
            const newProduct = await Product.create(req.body);
            // Success: New product created
            console.log("New product created:", newProduct);
         
       
      res.json(200,{
            message:"creating post here!",
            data:newProduct 
        })
    }
    catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({ message: "Error in new creating", error: error.message });
      }

}