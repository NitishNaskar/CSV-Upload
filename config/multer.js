const multer = require('multer');
const path=require('path');
		
// For Multer Storage
var multerStorage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, path.join(__dirname,'..','uploads'));
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + '_' + file.originalname);
  }
});

// For Single File upload
var multerSigleUpload = multer({ 
    storage: multerStorage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "text/csv") {
          cb(null, true);
        } else {
          cb(null, false);
        }
      }
});

module.exports.uploadedCSV = multerSigleUpload.single('filename');