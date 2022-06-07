const csv=require('../models/csv');

module.exports.homePage=function(req,res){
    
    csv.find({},function(err,docs){
        if(err){
            console.log("Error ! ...",err);
            return;
        }


        return res.render('index',{
            csvlist: docs
        });
    });
    

    
}