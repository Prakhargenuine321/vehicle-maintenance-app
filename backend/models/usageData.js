const mongoose = require('mongoose');

const usageDataSchema = new mongoose.Schema({
    vehicleID: { type: String, required: true, ref: 'VehicleInfo' },
    mileage: Number,
    drivingPattern: String,
    fuelConsumption: Number,
    dateLogged: { type: Date, default: Date.now }
});

module.exports = mongoose.model('UsageData', usageDataSchema);