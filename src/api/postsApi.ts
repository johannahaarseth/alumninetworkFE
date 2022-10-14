import { IPostResponse } from './../interfaces/IPostResponse';
import {apiClient} from "./apiClient";

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  }
};

const getPosts = () => {console.log(apiClient.toString()); apiClient.get<IPostResponse>("/post", config)};
const getPostById = (postId: number) => apiClient.get("/post/" + postId);


export {
  getPosts,
  getPostById
};