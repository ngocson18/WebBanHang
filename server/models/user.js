'use strict'

const util = require('util')
const mysql = require('mysql')
const db = require('../connection')

module.exports = {
  getAllUser: (req, res) => {
    let sql = 'SELECT * FROM user';
    db.query(sql, (err, response) => {
      if (err) throw err;
      res.json(response)
    })
  },
  getUserById: (req, res) => {
    let sql = 'SELECT * FROM user WHERE id = ?'
      db.query(sql, [req.params.id], (err, response) => {
        if (err) throw err;
        res.json(response[0])
    })
  },
  editUserById: (req, res) => {
    let data = req.body;
    let id = req.params.id;
    let sql = 'UPDATE user SET ? WHERE id = ?'
    db.query(sql, [data, id], (err, response) => {
        if (err) throw err
        res.json({message: 'Update success!'})
    })
  },
  addOneUser: (req, res) => {
      let data = req.body;
      let sql = 'INSERT INTO user SET ?'
      db.query(sql, [data], (err, response) => {
          if (err) throw err
          res.json({message: 'Insert success!'})
      })
  },
  deleteUserById: (req, res) => {
      let sql = 'DELETE FROM user WHERE id = ?'
      db.query(sql, [req.params.id], (err, response) => {
          if (err) throw err
          res.json({message: 'Delete success!'})
      })
  }
}