const mongoose = require("mongoose");



const addtocartSchema = mongoose.Schema({
     
      img_src: { type: String, },
      name: { type: String, },
      price:{ type: String, },
      desc: { type: String, },
      rating: { type: String, },
      company: { type: String, },
      desc_2 : { type: String, },
      delear_name :{ type: String, },
      service_id :{ type: String, },
      template_id:{ type: String, },
      key_re:{ type: String, } ,  
      original :{ type: String, } ,
      discount :{ type: String, } ,
      date:{ type: String, },
      qty:{ type: String, },
      user_email:{ type: String, },
      user_name:{ type: String, }

    
}, {
    versionKey: false
});



const CartModel = mongoose.model("cart", addtocartSchema);



module.exports = { CartModel };