function createSecretHolder(secret) {

    let obj = {

        value: secret,

        setSecret: function (secret) {
            this.value = secret;
        },

        getSecret() {
            return this.value;
        },

    }

    return obj;

}


