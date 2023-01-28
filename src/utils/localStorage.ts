export const getLocalStorage = (key: string): any => {
    const val = localStorage.getItem(key)
    if(!val) return null
    else return JSON.parse(val)
}

export const setLocalStorage = (key: string, val: string | any): void => {
    if(val && key) localStorage?.setItem(key, JSON?.stringify(val))
}

export const removeSingleLocalStorage = (key: string): void => {
    localStorage.removeItem(key)
}

export const clearStorage = (): void => {
    return localStorage.clear()
}