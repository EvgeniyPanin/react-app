export const maxLengthCreator = (max) => (value) => {
    if (value.length > max) {
        return 'Не более 15 символов';
    }
    return undefined;
}