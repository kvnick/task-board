const errors = {
    "auth/wrong-password": "Wrong credentials"
};

export default function prepareFirebaseError(error) {
    let errorCode = error;
    if (typeof error === "object") {
        errorCode = error.code;
    }

    if (Object.keys(errors).indexOf(errorCode) !== -1) {
        return errors[errorCode];
    }
    return error;
}
