const express=require('express');
const router=express.Router();
const home=require('../controllers/home');
const csv=require('../controllers/csv');



router.get('/',home.homePage);
router.get('/:id/read',csv.readCsv);
router.post('/upload/csv',csv.create);

module.exports=router;