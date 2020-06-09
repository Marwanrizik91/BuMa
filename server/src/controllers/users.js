const queries = require('../models/users')

exports.getUsers = (req, res) => {
    queries.getUsers()
        .then(users => res.status(200).json({users, code: 200}))
        .catch(err => {
            console.error(err)
            return res.status(500).json({ error: err.code })
        })
}

exports.getOneUser = (req, res) => {
    queries.getUserById(req.params.id)
        .then(user =>
            user.length < 1 ? res.status(404).json({ message: 'No user found' }) :
                res.status(200).json(user))
        .catch(err => {
            console.error(err)
            return res.status(500).json({ error: err.code })
        })
}

exports.addUser = (req, res) => {
    const newUser = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        phone: req.body.phone,
        business_name: req.body.business_name,
        business_logo: req.body.business_logo,
        crn: req.body.crn,
        business_address: req.body.business_address
    };

    queries.addUser(newUser)
        .then(() => {
            res.status(200).json({ message: 'user added successfully',code: 200 })
        })
        .catch(err => {
            console.error(err)
            return res.status(500).json({ error: err.code })
        });
}

exports.deleteUser = (req, res) => {
    const id = req.params.id
    queries.deleteUser(id)
        .then(() => res.status(200).json({ message: 'User Deleted successfully', code: 200 }))
        .catch(err => {
            console.error(err);
            return res.status(500).json({ error: err.code })
        })
}

exports.updateUser = (req, res) => {
    const newUser = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        phone: req.body.phone,
        business_name: req.body.business_name,
        business_logo: req.body.business_logo,
        crn: req.body.crn,
        business_address: req.body.business_address
    };
    queries.editUser(newUser)
    .then(() => res.status(200).json({ message: 'user updated successfuly' }))
    .catch(err => {
        console.error(err);
        return res.status(500).json({ error: err.code })
    })
}