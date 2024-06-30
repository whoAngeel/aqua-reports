import { Model, Schema, model } from "mongoose";
import { ILocation, IUser } from "../interfaces/user.type";

const LocationSchema = new Schema<ILocation>({
    address: {
        type: String,
    },
    state: String,
    municipality: String,
    postalCode: String
}, {
    versionKey: false
})

const UserSchema = new Schema<IUser>({

    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'resolver', 'reporter'],
        required: true
    },
    location: {
        type: LocationSchema,
        required: function(){
            return this.role === 'resolver'
        }
    }
}, {
    timestamps: true,
    versionKey: false
})


const UserModel = model('users', UserSchema)
export  {
    UserModel
}