const mongoose = require('mongoose');

const vehicleInfoSchema = new mongoose.Schema({
    vehicleID: { type: String, unique: true, required: true },
    make: String,
    model: String,
    year: Number,
    ownerID: String,
    licensePlate: String
});

module.exports = mongoose.model('VehicleInfo', vehicleInfoSchema);
