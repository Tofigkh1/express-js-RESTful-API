const mongoose = require("mongoose");


const schema = mongoose.Schema({
    level: String,
    email: String,
    location: String,
    proc_type: String,
    log: String
},{
    versionKey: false,
    timestamps: {
        createdAt: "created_at",
        updatedAt: "update_at"
    }
})

class auditLogs extends mongoose.Model {

}

module.loadClass(auditLogs);
module.exports = mongoose.model("audit_logs", schema)