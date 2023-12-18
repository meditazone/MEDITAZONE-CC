module.exports = fn => (req, res, next) => {
    fn(req, res, next).catch((err) => {
        res.status(500).json({ 
            message: 'Something Went Wrong With The Server, Please Try Again.',
            status: 500,
            error: err.message
        });
    });
}