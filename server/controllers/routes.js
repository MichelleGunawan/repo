exports.getTest = async(req, res) => {
    res.status(200).json({
        message: "Test API is working!",
    })
}

exports.register = async(req, res) => {
    res.status(200).json({
        message: "Register API is working!",
    })
}