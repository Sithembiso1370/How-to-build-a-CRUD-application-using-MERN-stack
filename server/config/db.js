const mongoose = require('mongoose');mongoose.Promise = global.Promise;


const url = "mongodb+srv://Samantha:20060121$Sm@cluster0.doubvu5.mongodb.net/?retryWrites=true&w=majority"// Connect MongoDB at default port 27017.

let mong = mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});