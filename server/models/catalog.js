'use strict'

const ultil = require('util');
const db = require('../connection');
const { response } = require('express');

module.exports = {
    getAll: (req, res) => {
        let sql = `SELECT * FROM catalog`;
        db.query(sql, (err, response) => {
            if(err) throw err;
            res.json(response);
        })
    },
    getMainCatalog: (req, res) => {
        let sql = `SELECT * FROM catalog limit 5`;
        db.query(sql, (err, response) => {
            if(err) throw err;
            res.json(response);
        })
    }
}