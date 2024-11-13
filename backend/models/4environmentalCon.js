// Climate and Weather: High temperatures, humidity, or cold can affect vehicle health and part wear.
// Road Conditions: Information on rough terrains, frequent stops, and congested areas.


const mongoose = require('mongoose');

const environmentalConditionsSchema = new mongoose.Schema({
    vehicleID: { type: String, required: true, ref: 'VehicleInfo' },
    roadType: String,
    weatherConditions: String,
    region: String,
    dateLogged: { type: Date, default: Date.now }
});

module.exports = mongoose.model('EnvironmentalConditions', environmentalConditionsSchema);
