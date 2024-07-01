import { Schema, model } from "mongoose";
import { IReport } from "../interfaces/report.type";

const ReportSchema = new Schema<IReport>({
    description: {
        type: String,
        required: true
    },
    type: String,
    status: {
        type: String,
        enum: ['pending', 'resolved', 'rejected', 'false', 'closed', 'cannot be resolved'],
        default: 'pending'
    },
    reportedBy: {
        type: Schema.Types.ObjectId, 
        ref: 'users', 
        required: true
    },
    images: [String],
    priority: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'low'
    },
    location: {
        address: String,
        state: String,
        municipality: String,
        latitude: Number,
        longitude: Number
    }

}, {
    timestamps: true,
    versionKey: false
})

const ReportModel = model('reports', ReportSchema)

export {
    ReportModel
}