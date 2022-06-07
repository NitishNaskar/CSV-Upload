const csvpparser=require('csv-parser');
const csvSchema=require('../models/csv');
const csvmulter=require('../config/multer');
const fs = require('fs');
const path = require('path');

module.exports.create = function (req, res) {
  
  try{

    csvmulter.uploadedCSV(req, res, function(err){
      if(err){
        console.log('Error ! In Multer ...', err)
      }
    
      if(req.file){
        csvSchema.create({file_name: req.file.filename});
      }

      return res.redirect('back');
  });

  }catch(err){
      console.log("Error ! ...",err);
      return res.redirect('back');
  }

}


module.exports.readCsv=function(req,res){
    const results = [];

    csvSchema.findById(req.params.id,function(err,docs){

      if(err){
        console.log("Error ! ....",err);
        return;
      }
      
      const coolPath = path.join(__dirname ,'..' ,'/uploads/'+docs.file_name);

      fs.createReadStream(coolPath)
      .pipe(csvpparser())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        res.render('table',{
            headers: Object.keys(results[0]),
            data: results
        });
    });

  });
    
}