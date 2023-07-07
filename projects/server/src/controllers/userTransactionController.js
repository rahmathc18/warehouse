const { Sequelize } = require("sequelize");

//import model
const db = require("../models");
const user = db.user;
const product = db.product;
const transaction = db.transaction;
const transaction_item = db.transaction_item;

module.exports = {
  fetchAll: async (req, res) => {
    try {
      const { user_id } = req.query;

      const data = await transaction.findAll({
        where: {
          user_id: user_id,
        },
        include: [
          {
            model: transaction_item,
          },
        ],
      });

      console.log(data);
      res.json(data);
    } catch (error) {
      console.log(error);
      res.status(400).send("Failed");
    }
  },
};
