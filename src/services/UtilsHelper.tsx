export const checkValidString = (value: any) => {
    return !(typeof (value) !== "string" || value.length <= 0);
}
