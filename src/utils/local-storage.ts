export function getParsedLocalStorageValue(key: string, defaultValue?: any): any {
  return JSON.parse(window.localStorage.getItem(key) || JSON.stringify(defaultValue));
}

export function setLocalStorageValue(key: string, value: any) {
  return window.localStorage.setItem(key, JSON.stringify(value));
}
