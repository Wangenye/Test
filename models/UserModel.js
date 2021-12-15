const mongoose = require('mongoose')
const bcrypt = require('bcrypt')


const UserSchema = new mongoose.Schema({

    name: {
        required: true,
        type: String
    },

    email: {
        required: true,
        type: String,
        unique: true
    },
    password: {
        required: true,
        type: String
    },

    // isAdmin: {
    //     type: Boolean,
    //     required: true,
    //     default: false
    // },

}, {
    timestamps: true,
})

UserSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

UserSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model('User', UserSchema)

module.exports = User