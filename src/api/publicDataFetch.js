import axios from "axios";

export const OrgList=()=>axios.get("/api/v1/organisations/list");
export const articleList=()=>axios.get("/api/v1/articles/list");