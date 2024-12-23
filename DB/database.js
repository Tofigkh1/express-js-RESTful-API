const mongoose = require("mongoose")

let instance = null;

class Database {
    constructor() {
        if (!instance) {
            instance = this;
        }
        return instance
    }

    async connect(options) {
        try{
            console.log("DB conn...");
            let db = await mongoose.connect(options.CONNECTION_STRING);
            this.mongoConnection = db
    
            console.log("DB con.");
        }catch(err){
            console.error(err);
            process.exit(1)
        }
 
        
    }
}

module.exports = Database