const express = require("express");

const { SolarpanelModel } = require("../models/solarpanel.model");

const solarpanelRouter = express.Router();


// ----------------- solarpanel DATA GET REQUEST ----------------- //

solarpanelRouter.get("/:id", async (request, response) => {
    const ID = request.params.id;

    try {
        const data = await SolarpanelModel.find({ _id: ID });
        response.send(data);
    } catch (error) {
        response.send({ "Message": "Cannot able to get the solarpanel data", "Error": error.message });
    }
});


// ----------------- solarpanel DATA GET REQUEST ----------------- //
// sort, filter, search, pagination

solarpanelRouter.get("/", async (request, response) => {
         console.log(request.query)
    try {
        const page = parseInt(request.query.page) - 1 || 0;
        const limit = parseInt(request.query.limit) || 15;
        const search = request.query.search || "";
        let sort = request.query.sort || "rating" || "lowprice";
        let company = request.query.company || "All";

        

        const companyOptions =  [ "Microtek"
        ,
        "Luminous ",
        "Esptronic",
        "LOOM",
        "HYGRIDSOLAR" ];

        company === "All"
            ? (company = [...companyOptions])
            : (company = request.query.company.split(","));

        request.query.sort ? (sort = request.query.sort.split(",")) : (sort = [sort]);

        let sortBy = {};

        if (sort[1]) {
            sortBy[sort[0]] = sort[1];
        } else {
            sortBy[sort[0]] = "asc";
        }

        const solarpanel = await SolarpanelModel.find({ name: { $regex: search, $options: "i" } })
            .where("company")
            .in([...company])
            .sort(sortBy)
            .skip(page * limit)
            .limit(limit)

        const total = await SolarpanelModel.countDocuments({
            company: { $in: [...company] },
            name: { $regex: search, $options: "i" }
        });

        const solarpanelData = {
            error: false,
            total,
            page: page + 1,
            limit,
            companys: companyOptions,
            solarpanel 
        };

        response.status(200).send(solarpanelData);

    } catch (error) {
        response.send({ "Message": "Failed", "Error": error });
    }
});

// const solarpanel = require('../Assets/solarpanel.json');
// const insertsolarpanel = async () => {
//     try {
//         const docs = await SolarpanelModel.insertMany(solarpanel);
//         return Promise.resolve(docs);
//     } catch (err) {
//         return Promise.reject(err)
//     }
// };

// insertsolarpanel ()
//     .then((docs) => console.log(docs))
//     .catch((err) => console.log(err))


solarpanelRouter.delete("/delete/:id", async (request, response) => {
    const ID = request.params.id;

    try {
        await SolarpanelModel.findByIdAndDelete({ _id: ID });
        response.send({ "Message": ` Item of id: ${ID} is successfully deleted from cart` });
    } catch (error) {
        response.send({ "Message": "Cannot able to get the data", "Error": error.message });
    }
});


// ----------------  DATA UPDATE REQUEST ---------------- //
solarpanelRouter.patch("/update/:id", async (request, response) => {
    const ID = request.params.id;
    const payload = request.body;

    try {
        await SolarpanelModel.findByIdAndUpdate({ _id: ID }, payload);
        response.send({ "Message": `Item of id: ${ID} is successfully updated ` });
    } catch (error) {
        response.send({ "Message": "Cannot able to update the data", "Error": error.message });
    }
});

// ----------------post one data --------------------

solarpanelRouter.post("/add", async (request, response) => {
    const payload = request.body;
   try {
    const new_ = new SolarpanelModel(payload);
    await new_.save();
    response.send({ "Message": "Item Successfully Added !" })
   } catch (error) {
    
   }
});



module.exports = { solarpanelRouter };