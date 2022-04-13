const { Usergame } = require('../models');
const checkPassword = require('../helpers/checkPassword');
const encryptPassword = require('../helpers/encryptPassword');
const formatToken = require('../helpers/formatToken');
const { Userbiodata } = require('../models');

class LoginController {

    static entryLogin(req, res) {
        res.render('loginPage');
    };

    static async loginInput(req, res, next) {
        // res.send('Succes login');

        try {
            const { username, password, /**role */ } = req.body

            let user = await Usergame.findOne({ where: {
                username
            }})

            if(user) {
                console.log(user, '==> username found');

                const isPassword = checkPassword(password, user.password);

                if(isPassword) {
                    console.log(isPassword, '==> this is password that already check');

                    /**
                     * pending for checkRole
                     * 
                     * const isRole = await checkRole(role) //this function use to check the role user has made when register
                     * if(isRole == "SuperAdmin") {
                     *  console.log(isRole, '==> this is result isRole');
                     * res.status(200).json({ message: "You are SuperAdmin" });
                     * }else {
                     * res.status(403).json({ message: "You are PlayerUser" });
                     * };
                     */

                    let result = formatToken(user)
                    res.status(200).json(result);
                    res.render('loginSuccessOK');
                }else {
                    throw {
                        error: 400,
                        message: "User input unauthorized Username and Password"
                    }
                }
            }else {
                throw {
                    error: 404,
                    message: "Username and Password not found"
                }
            }
        }catch(error) {
            res.status(500).json(error)
        };
    };

    static success(req, res) {
        res.render('loginSuccessOK');
    };

    static wrong(req, res) {
        res.render('loginWrong');
    };
    
    static entryRegister(req, res) {
        res.render('registerPage');
    };

    static async register(req, res, next) {
        const { username, password, role, full_name, email_address, city, age } = req.body;

        if(role !== 'SuperAdmin' && role !== 'PlayerUser') {
            res.status(400).json({ message: "Role must be filled, either 'SuperAdmin' or 'PlayerUser'" })
            console.log(next, '==> error 400');
        }
        try {
            const user = await Usergame.findOne({ where: {
                username
            }})

            if(user) {
                throw {
                    error: 409,
                    message: "This username already exist"
                }
            }else {
                let passwordEncrypt = encryptPassword(password)

                const userBio = await Userbiodata.create({
                    full_name,
                    email_address,
                    city,
                    age
                })


                const user = await Usergame.create({
                    username,
                    password: passwordEncrypt,
                    role
                })

                res.render('registerSuccessOK')
                res.status(201).json(user)
                return userBio
            }

        }catch(err) {
            next(err)
        }
    };



}

module.exports = LoginController;