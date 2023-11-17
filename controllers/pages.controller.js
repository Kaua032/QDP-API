const Reserve = require("../models/Reserve.js");

const PageLoginController = async (req, res) => {
  if (req.session.userId) {
    const reserves = Reserve.findAll();

    res.render("mapReserves", { reserves });
  } else {
    res.render("login");
  }
};
