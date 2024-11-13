// Manufacturer Recalls: Check for common failures and scheduled recalls.
// Market Insights: Gather data from similar vehicle models for issues that commonly arise.


const recallSchema = new mongoose.Schema({
    vehicleID: { type: String, required: true, ref: 'VehicleInfo' },
    recallDate: Date,
    issueDescription: String,
    manufacturerRecommendation: String
});

module.exports = mongoose.model('RecallIssues', recallSchema);
