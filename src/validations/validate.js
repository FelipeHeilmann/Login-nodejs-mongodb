

function validateFields(req, res){
    if(!name && !email && !password){
        return false
    }
}
function validatePass(password, confirmPassword){
    if(password !== confirmPassword){
        return false
    }
}

async function createHash(pass){
    const salt = await bcrypt.genSalt(12)
    const passHash = await bcrypt.hash(pass, salt)
    return passHash
}

async function checkPass(pass, userPass){
    const result = await bcrypt.compare(pass, userPass)
    return result
}



export {validateFields, validatePass, createHash, checkPass}