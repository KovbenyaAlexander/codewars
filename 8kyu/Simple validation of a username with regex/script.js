function validateUsr(username) {
    if (!username) {
        return false;
    }

    if ((username.match(/[a-z0-9_]/gm).length === username.length) &&
        username.length > 3 && username.length < 13) {
        return true;
    }
    return false;
}




validateUsr1(`dsfgdf___gAXXVFDZf159sBCCdfYY`);