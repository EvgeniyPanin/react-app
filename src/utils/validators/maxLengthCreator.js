export const maxLengthCreator = (max) => (value) => {
    if (value.length < 15) {
        return 'Не более 15 символов'
    }
    return undefined;
}