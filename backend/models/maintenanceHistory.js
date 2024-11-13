// Service Logs: Documenting previous maintenance actions and frequency.
// Parts Replacements: Information on when specific parts (filters, tires, belts) were replaced.



const mongoose = require('mongoose');

const maintenanceHistorySchema = new mongoose.Schema({
    vehicleID: { type: String, required: true, ref: 'VehicleInfo' },
    serviceDate: Date,
    maintenanceType: String,
    partsReplaced: [String],
    serviceCenterID: String
});

module.exports = mongoose.model('MaintenanceHistory', maintenanceHistorySchema);
