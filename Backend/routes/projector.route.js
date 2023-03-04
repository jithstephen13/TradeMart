const express = require("express");

const { ProjectorModel } = require("../models/projector.model");

const projectorRouter = express.Router();


// ----------------- projector DATA GET REQUEST ----------------- //

projectorRouter.get("/:id", async (request, response) => {
    const ID = request.params.id;

    try {
        const data = await ProjectorModel.find({ _id: ID });
        response.send(data);
    } catch (error) {
        response.send({ "Message": "Cannot able to get the projector data", "Error": error.message });
    }
});


// ----------------- projector DATA GET REQUEST ----------------- //
// sort, filter, search, pagination

projectorRouter.get("/", async (request, response) => {
         console.log(request.query)
    try {
        const page = parseInt(request.query.page) - 1 || 0;
        const limit = parseInt(request.query.limit) || 15;
        const search = request.query.search || "";
        let sort = request.query.sort || "rating" || "lowprice";
        let company = request.query.company || "All";

        const companyOptions =  [  "ZEBRONICS",
"Keystone",
"Verilux",
"SmithKline",
"Egate",]

        // const companyOptions =  [ "Microtek"
        // ,
        // "Luminous ",
        // "Esptronic",
        // "LOOM",
        // "HYGRIDSOLAR" ];

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

        const projector = await ProjectorModel.find({ name: { $regex: search, $options: "i" } })
            .where("company")
            .in([...company])
            .sort(sortBy)
            .skip(page * limit)
            .limit(limit)

        const total = await ProjectorModel.countDocuments({
            company: { $in: [...company] },
            name: { $regex: search, $options: "i" }
        });

        const projectorData = {
            error: false,
            total,
            page: page + 1,
            limit,
            companys: companyOptions,
            projector
        };

        response.status(200).send(projectorData);

    } catch (error) {
        response.send({ "Message": "Failed", "Error": error });
    }
});

// const projector = require('../Assets/projector.json');
// const insertprojector = async () => {
//     try {
//         const docs = await ProjectorModel.insertMany(projector);
//         return Promise.resolve(docs);
//     } catch (err) {
//         return Promise.reject(err)
//     }
// };

// insertprojector()
//     .then((docs) => console.log(docs))
//     .catch((err) => console.log(err))

projectorRouter.delete("/delete/:id", async (request, response) => {
    const ID = request.params.id;

    try {
        await ProjectorModel.findByIdAndDelete({ _id: ID });
        response.send({ "Message": ` Item of id: ${ID} is successfully deleted from cart` });
    } catch (error) {
        response.send({ "Message": "Cannot able to get the data", "Error": error.message });
    }
});


// ---------------- DATA UPDATE REQUEST ---------------- //
projectorRouter.patch("/update/:id", async (request, response) => {
    const ID = request.params.id;
    const payload = request.body;

    try {
        await ProjectorModel.findByIdAndUpdate({ _id: ID }, payload);
        response.send({ "Message": `Item of id: ${ID} is successfully updated ` });
    } catch (error) {
        response.send({ "Message": "Cannot able to update the data", "Error": error.message });
    }
});

// ----------------post one data --------------------

projectorRouter.post("/add", async (request, response) => {
    const payload = request.body;
   try {
    const new_ = new ProjectorModel(payload);
    await new_.save();
    response.send({ "Message": "Item Successfully Added !" })
   } catch (error) {
    
   }
});


module.exports = { projectorRouter };