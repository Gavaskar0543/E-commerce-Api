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
//delete
module.exports.destroy = async function(req,res){

try{
    
    await Product.deleteOne({'_id':req.params.id});

    return res.json(200,{
        data:{
            message:"product deleted sucessfully"
        }
    })
    

}
catch(error){
    return res.json(401,{
        data:{
            message:"not found any product associated with gvien id"
        }
    })
}

}
//get product
module.exports.getProduct = async function(req,res){
   try{
      const item = await Product.findById({'_id':req.params.id});

       res.json(200,{
        data:item
      })
   }
   catch(error){
    return res.json(401,{
        message:"no such product found"
    })
   }
}
//to update
module.exports.update = async function(req,res){
    try{
    const productId = req.params.id;
    const number = req.query.number;
    if (!number) {
        res.status(500).json({ data: { message: "Param number is required for incrementing or decrementing the quantity of product" } });
        return;
    }
    const product = await Product.findOne({'_id':productId});
    const newQuantity = product.quantity +(+number);
    if(newQuantity >= 0){

        const updatedProduct = await Product.findOneAndUpdate({
            _id:productId
        },
        {
            quantity:newQuantity
        },{
            new :true,
            runValidators:true
        }
        );
        res.json(200,{
            data:{
                updatedProduct,
                message:"successfully updated"
            }
        });
       
    }
    else{
        res.json(401,{
            data:{
                message:"quantity cannot be less than zero!"
            }
        })
    }
}
catch (err) {
    console.log(err);
    res.status(500).json({ data: { message: "Error in updating product" } });
}
}