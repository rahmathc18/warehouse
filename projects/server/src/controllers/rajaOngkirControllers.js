const { RAJAONGKIR_KEY, RAJAONGKIR_URL } = process.env;
const axios = require("axios");

module.exports = {
  getProvince: async (req, res) => {
    try {
      const response = await (
        await axios.get(`${RAJAONGKIR_URL}/province`, {
          headers: {
            key: RAJAONGKIR_KEY,
            "content-type": "application/x-www-form-urlencoded",
          },
        })
      ).data;

      return res
        .status(200)
        .json({ raw: response, result: response.rajaongkir.results });
    } catch (error) {
      return res.status(400).send({
        status: false,
        message: error.message,
      });
    }
  },
  getCity: async (req, res) => {
    try {
      const { province_id } = req.params;
      const response = await (
        await axios.get(`${RAJAONGKIR_URL}/city?province=${province_id}`, {
          headers: {
            key: RAJAONGKIR_KEY,
            "content-type": "application/x-www-form-urlencoded",
          },
        })
      ).data;

      return res
        .status(200)
        .json({ raw: response, result: response.rajaongkir.results });
    } catch (error) {
      return res.status(400).send({
        status: false,
        message: error.message,
      });
    }
  },
  getOngkir: async (req, res) => {
    try {
      const { destination, origin, courier } = req.params;

      const response = await (
        await axios.post(`${RAJAONGKIR_URL}/cost`, {
          headers: {
            key: RAJAONGKIR_KEY,
            "content-type": "application/x-www-form-urlencoded",
          },
          form: {
            origin: origin,
            destination: destination,
            weight: 1000,
            courier: courier,
          },
        })
      ).data;

      console.log(response);

      return res.status(200).json({
        status: true,
      });
    } catch (error) {
      return res.status(500).send({
        status: false,
        message: error.message,
      });
    }
  },
};
