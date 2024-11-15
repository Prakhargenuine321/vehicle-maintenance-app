//Error Codes and Alerts:- 
//Error Codes: These represent diagnostic trouble codes (DTCs) generated by the vehicle's onboard diagnostics (OBD) system.
//Each code signifies a specific issue or potential problem, such as issues with the engine, transmission, or exhaust.

// Alerts: Alerts can indicate immediate attention areas, such as low oil pressure, high engine temperature, or brake system warnings.

const errorCodesSchema = new mongoose.Schema({
    vehicleID: { type: String, required: true, ref: 'VehicleInfo' },
    errorCode: String,
    alertType: String,
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ErrorCode', errorCodesSchema);
