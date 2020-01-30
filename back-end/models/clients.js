const { Schema, model } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const NewsSchema = new Schema({
    codigo: {
        type: String,
    },
    cliente: {
        type: String,
    },
    data: {
        type: Date
    },
    itens:[{
    }],
    valorTotal: Number
}, {
    timestamps: true,
});

NewsSchema.plugin(mongoosePaginate)
module.exports = model('Clients', NewsSchema);