import data from "./data.json";

export default (request, response) => response.status(200).json(data);