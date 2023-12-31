const multer = require('multer');

const fileStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images'); // Folder tempat menyimpan file foto profil
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toDateString() + '-' + file.originalname);
    },
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

const upload = multer({ storage: fileStorage, fileFilter: fileFilter });

module.exports = upload;