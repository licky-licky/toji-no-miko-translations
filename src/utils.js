function saveToSessionStorage(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value))
}

function getFromSessionStorage(key) {
    return JSON.parse(sessionStorage.getItem(key))
}

export { saveToSessionStorage, getFromSessionStorage }