import bcrypt from 'bcrypt';

function validateFields(name, email, password){
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
    return await bcrypt.compare(pass, userPass)
}


export {validateFields, validatePass, createHash, checkPass}