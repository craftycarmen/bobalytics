import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: false
        },
        coordinates: {
            type: [Number],
            required: false
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
    },
    role: {
        type: String,
        default: 'Shop Owner'
    },
    shops: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Shop'
    }],
    verified: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    lastLogin: {
        type: Date
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

export const User = mongoose.model('User', UserSchema);
