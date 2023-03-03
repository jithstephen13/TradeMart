const express = require("express");

const { MedicinModel } = require("../models/medicin.model");

const medicinRouter = express.Router();


// ----------------- medins DATA GET REQUEST ----------------- //

medicinRouter.get("/:id", async (request, response) => {
    const ID = request.params.id;

    try {
        const data = await MedicinModel.find({ _id: ID });
        response.send(data);
    } catch (error) {
        response.send({ "Message": "Cannot able to get the medicin data", "Error": error.message });
    }
});


// ----------------- medins DATA GET REQUEST ----------------- //
// sort, filter, search, pagination

medicinRouter.get("/", async (request, response) => {
         console.log(request.query)
    try {
        const page = parseInt(request.query.page) - 1 || 0;
        const limit = parseInt(request.query.limit) || 15;
        const search = request.query.search || "";
        let sort = request.query.sort || "rating" || "lowprice";
        let company = request.query.company || "All";

        const companyOptions = [ "SmithKline","CiplaLtd","Torrent","MankindPharma" ];

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

        const medins = await MedicinModel.find({ name: { $regex: search, $options: "i" } })
            .where("company")
            .in([...company])
            .sort(sortBy)
            .skip(page * limit)
            .limit(limit)

        const total = await MedicinModel.countDocuments({
            company: { $in: [...company] },
            name: { $regex: search, $options: "i" }
        });

        const medinsData = {
            error: false,
            total,
            page: page + 1,
            limit,
            companys: companyOptions,
            medins
        };

        response.status(200).send(medinsData);

    } catch (error) {
        response.send({ "Message": "Failed", "Error": error });
    }
});

// const medicin = require('../Assets/medicin.json');
// const insertmedicin = async () => {
//     try {
//         const docs = await MedicinModel.insertMany(medicin);
//         return Promise.resolve(docs);
//     } catch (err) {
//         return Promise.reject(err)
//     }
// };

// insertmedicin()
//     .then((docs) => console.log(docs))
//     .catch((err) => console.log(err))


// ---------------- DATA DELETE REQUEST ---------------- //
medicinRouter.delete("/delete/:id", async (request, response) => {
    const ID = request.params.id;

    try {
        await MedicinModel.findByIdAndDelete({ _id: ID });
        response.send({ "Message": ` Item of id: ${ID} is successfully deleted from cart` });
    } catch (error) {
        response.send({ "Message": "Cannot able to get the data", "Error": error.message });
    }
});


// ---------------- CART DATA UPDATE REQUEST ---------------- //
medicinRouter.patch("/update/:id", async (request, response) => {
    const ID = request.params.id;
    const payload = request.body;

    try {
        await MedicinModel.findByIdAndUpdate({ _id: ID }, payload);
        response.send({ "Message": `Item of id: ${ID} is successfully updated from cart` });
    } catch (error) {
        response.send({ "Message": "Cannot able to update the data", "Error": error.message });
    }
});

// ----------------post one data --------------------

medicinRouter.post("/add", async (request, response) => {
    const payload = request.body;
   try {
    const new_ = new MedicinModel(payload);
    await new_.save();
    response.send({ "Message": "Item Successfully Added !" })
   } catch (error) {
    
   }
});


module.exports = { medicinRouter };