import { IPostResponse } from './../interfaces/IPostResponse';
import {apiClient} from "./apiClient";

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  }
};

const getPosts = () => apiClient.get<IPostResponse>("/post", config);
const getPostById = (postId: number) => apiClient.get<IPostResponse>("/post/" + postId);


export {
  getPosts,
  getPostById
};