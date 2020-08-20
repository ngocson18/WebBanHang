'use strict'

const ultil = require('util');
const db = require('../connection');
const { response } = require('express');

module.exports = {
    getNewProducts: (req, res) => {
        let sql = `SELECT * FROM product ORDER BY created ASC limit 6`;
        db.query(sql, (err, response) => {
            if(err) throw err;
            res.json(response);
        })
    },
    getSaleProducts: (req, res) => {
        let sql = `SELECT * FROM product ORDER BY discount DESC limit 6`;
        db.query(sql, (err, response) => {
            if(err) throw err;
            res.json(response);
        })
    }
}