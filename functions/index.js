
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51Kg7hKSGgx5uJzRcC9RiodXxrBp6Jqbelkb8AX2ocKcCzJ9fWdtoRvWgWX4f7khjIHgcMsZuUhKPZl8HhrYPXUub001Vjyc6cl");

//API

//app config
const app = express();

//middlewares
app.use(cors({origin: true}));
app.use(express.json());

//api routes
app.get("/", (req, res) => res.status(200).send("hello world"));

app.post('/payment/create',async(req,res)=>{
    const total = req.query.total;

    console.log('Payment request recieved',total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
        payment_method_types:["card"]
    });
    res.status(201).send({
        clientSecret:paymentIntent.client_secret,
})
})

//listen command
exports.api = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


//http://localhost:5001/clone-ac334/us-central1/api