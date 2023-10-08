export const extractDateOnly = (dateString: string) => {
    return dateString.split("T")[0];
}