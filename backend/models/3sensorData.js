const mongoose = require('mongoose');

const sensorDataSchema = new mongoose.Schema({
    vehicleID: { type: String, required: true, ref: 'VehicleInfo' },
    engineTemp: Number,
    batteryHealth: String,
    brakePadWear: Number,
    dateLogged: { type: Date, default: Date.now }
});

module.exports = mongoose.model('SensorData', sensorDataSchema);
