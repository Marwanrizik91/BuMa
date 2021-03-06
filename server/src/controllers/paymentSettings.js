const queries = require('../models/paymentSettings')


exports.getAllPaymentSettings = (req, res) => {
    queries.getPaymentSettings()
        .then(settings => res.status(200).json({settings, code: 200}))
        .catch(err => {
            console.error(err)
            return res.status(500).json({ error: err.code })
        })
}



exports.getAllPaymentSettingsByUserId = (req, res) => {
    queries.getPaymentSetttingsByUserId(req.params.id)
        .then(settings => res.status(200).json({settings, code: 200}))
        .catch(err => {
            console.error(err)
            return res.status(500).json({ error: err.code })
        })
}



exports.updateSettings = (req, res) => {
    const updatedSettings = {
        userid: req.params.id,
        currency: req.body.currency,
        request_payment_every_value: req.body.request_payment_every_value,
        request_payment_every_unit: req.body.request_payment_every_unit,

    }
    queries.editPaymentSettings(updatedSettings)
    .then(() => res.status(200).json({ message: 'Settings updated successfuly' ,code:200}))
    .catch(err => {
        console.error(err);
        return res.status(500).json({ error: err.code })
    })
}

