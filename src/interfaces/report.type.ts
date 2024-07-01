import { Document, ObjectId } from "mongoose"

export interface IHistory {
    description: string,
    date: Date,
}
export interface IRLocation{
    address?: string
    state?: string,
    municipality?: string,
    latitude?: number,
    longitude?: number
}
interface IImages{
    description?:string,
    url?: string
}
export interface IReport extends Document {
    description: string
    type?: string
    status: 'pending' | 'resolved' | 'rejected' | 'false' | 'closed' | 'cannot be resolved'
    reportedBy?: ObjectId
    images?: IImages[]
    priority: 'low' | 'medium' | 'high' 
    location: IRLocation
    history?: IHistory[]
}

