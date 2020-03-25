import fetcher from "./fetcher";
import getApiUrl from "./get-api-url";

export const requestFilms = (name = "") => {
    return fetcher(`https://api.tvmaze.com/search/shows?q=${name}`);
}

export const requestQuote = () => {
    const localUrl = getApiUrl("local");
    return fetcher(`${localUrl}get-quote`);
}