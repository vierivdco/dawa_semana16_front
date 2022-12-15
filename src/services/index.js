const baseURL = "http://localhost:6005/movie";

export const get = async (url) => {
    try {
        const response = await fetch(`${baseURL}`);
        return await response.json();
    } catch(error) {
        console.log("error", error);
    }
};