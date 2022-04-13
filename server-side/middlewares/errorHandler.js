module.exports = function errorHandler(err, req, res, next) {
    if(err == 400) {
        res.send(`Bad Request`);
    }else if(err == 401) {
        res.send('This user is unauthorized')
    }else if(err == 403) {
        res.send('This user role is forbidden to access this page');
    }else if(err == 404) {
        res.send('Username and Password not found');
    }else if(err == 406) {
        res.send('This user Not Acceptable');
    }else if(err == 409) {
        res.send('This Username already used');
    }else {
        res.status(500).json({ message: "Internal Server Error" });
    }
};