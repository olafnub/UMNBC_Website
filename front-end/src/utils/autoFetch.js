const autoFetch = async (api) => await (await fetch(api)).json();

export default autoFetch;
