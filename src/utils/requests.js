import fetcher from "./fetcher";

export const requestFilms = (name = "") => {
    return fetcher(`https://api.tvmaze.com/search/shows?q=${name}`);
}

export const requestQuote = (localUrl = "") => {
    return fetcher(`${localUrl}get-quote`);
}