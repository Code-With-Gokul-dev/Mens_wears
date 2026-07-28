import mongoose, { Schema } from "mongoose";


const userSchema = new mongoose.Schema({
    username: { type: String },
    email: { type: String, unique: true },
    passwordHash: { type: String, unique: true },
    profile: { type: Object, default: {} },
    address: { type: Object, default: {} },
    cart: { type: Object, default: {} },
    orders: { type: Array, default: [] },
    role: {
        type: String, default: "user"
    }

}, {
    timestamps: true,

    collection: "userData"
});

const User = mongoose.model("User", userSchema);

export default User;