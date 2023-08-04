const bcrypt = require("bcrypt");
const saltRound = 5;

const encryptPwd = async (password) => {
    try {
        const hashedPassword = await bcrypt.hash(password, saltRound);
        return hashedPassword;
    } catch (error) {
        throw error;
    }
};


// const encryptPwd = async (password) => {
//     try {
//         const hashedPassword = await bcrypt.hash(password, saltRound);
//         return hashedPassword;
//     } 

//     catch (error) {
//         throw error;
//     }
// };

const decryptPwd = (data, hashPwd) => {
    const decrypted = bcrypt.compareSync(data, hashPwd);
    return decrypted;
    // hasilnya true / false
};

module.exports; encryptPwd, decryptPwd;