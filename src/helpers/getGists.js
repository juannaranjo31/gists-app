
export const getGists = async (username) => {
    
    const url = `https://api.github.com/users/${username}/gists`;
    const resp = await fetch(url);
    const data = await resp.json();

    return data;

    



}
