import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ShopSchema = Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            default: 'Point'
        },
        lat: {
            type: [Number],
            required: false
        },
        lng: {
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
        zip: {
            type: String,
            required: true
        }
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    imageUrl: {
        type: String
    },
    websiteUrl: {
        type: String
    },
    avgRating: {
        type: Number
    },
    sentiment: {
        positiveReviews: {
            type: Number,
            default: 0
        },
        neutralReviews: {
            type: Number,
            default: 0
        },
        negativeReviews: {
            type: Number,
            default: 0
        },
        score: {
            type: Number
        },
    },
    totalReviews: {
        type: Number,
        default: 0
    },
    isOpen: {
        type: Boolean,
        default: true
    },
    openYear: {
        type: Number
    },
    categories: {
        type: [String]
    },
    verified: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true
})

export const Shop = mongoose.model('Shop', ShopSchema);
