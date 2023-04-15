import axios from "axios";

export const createArticle=(body)=>axios.post("/api/v1/articles/create",body);