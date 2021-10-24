const express = require('express');
const router  = express.Router();

module.exports = (db) => {
 router.get('/',(req,res)=>{
   const sql='SELECT thumbnail_url,make,model,year FROM cars'
   db.query(sql)
   .then(data => {
    const cars = data.rows;
    const templateVars={cars}
    res.render('landing',templateVars)
  })
  .catch(err => {
    res
      .status(500)
      .json({ error: err.message });
  });

   })
   return router
};
