const mongoose = require('mongoose');
const mekanikSchema = new mongoose.Schema ({
    namaMekanik: {
        type: String,
        unique: true,
        required: true,
    },
    spesialisasi: {
        type: String,
        required: true,
    },
    gantiSparepart:{
        type: String,
        required: true,
    },
    biayaSparepart:{
        type: Number,
        required: true,
    },
    biayaServ:{
        type: Number,
    },
    
    totalBiaya:{
        type: Number,
    },

});
const Mekanik = mongoose.model('Mekanik'
, mekanikSchema);

module.exports = Mekanik;