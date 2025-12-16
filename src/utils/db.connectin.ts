import mongoose from "mongoose";

(async function () {
    try {
       await mongoose.connect("mongodb://localhost/eam-project");
       console.log('mongoose db is connected');
       return true
    } catch (error) {
        console.log({status:500, errorMsg:error});
    }
})();