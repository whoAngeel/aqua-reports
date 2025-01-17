import { Schema, model } from "mongoose";
import { IReport } from "../interfaces/report.type";

const ReportSchema = new Schema<IReport>({
    description: {
        type: String,
        required: true
    },
    type: String, // * se pue de quitar
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
    images: [{

        description: String,
        url: String
    }],
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
    },
    history:[{
        description: String,
        date: Date
    }]

}, {
    timestamps: true,
    versionKey: false
})

const ReportModel = model('reports', ReportSchema)

export {
    ReportModel
}