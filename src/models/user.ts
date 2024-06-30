import { Model, Schema, model } from "mongoose";
import { ILocation, User } from "../interfaces/user.type";

const LocationSchema = new Schema<ILocation>({
    address: {
        type: String,
    },
    state: String,
    municipality: String,
    postalCode: String
}, {
    timestamps: true,
    versionKey: false
})

const UserSchema = new Schema<User>({

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
export default UserModel