const isUndefinedOrEmpty = (value) => {
    if (value === undefined || value === null || value === "") {
        return true;
    }

    return false;
}

export default isUndefinedOrEmpty;