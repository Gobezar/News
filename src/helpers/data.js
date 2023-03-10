export function getFormatedUnixDate(prop) {
    let timestamp = prop;
    let date = new Date(timestamp * 1000);
    let options = { weekday: 'long', day: 'numeric', year: 'numeric', month: 'long' };
    return date.toLocaleDateString("ru", options)
}
