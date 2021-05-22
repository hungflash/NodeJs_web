module.exports = {
    multiplemongoosetoolobject: function (mongooseArray) {
        return mongooseArray.map((cour) => cour.toObject());
    },
    mongooseTOobject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
