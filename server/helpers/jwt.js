const jwt = require ("jsonwebtoken");
const secretCode = process.env.SECRET_CODE || "bebas";

const tokenGenerator = (data) => {
    const { id, username, name, email, address, phone, birthdate  } = data;
    const access_token = jwt.sign(
        {
            id,
            username,
            name,
            email,
            address,
            phone,
            birthdate
        },
        secretCode
    );

    return access_token;
};

const tokenVerifier = (data) => {
    const verify = jwt.verify(data, secretCode);

    return verify;
};

module.exports; tokenGenerator, tokenVerifier ;