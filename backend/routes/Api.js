const express = require('express');
const Routes = express.Route();

const {User:U,Siswa:S} = require('../config/collection');

Routes.get('/',(req,res) => {
	
});

module.exports = Routes;