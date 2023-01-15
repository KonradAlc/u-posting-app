import { ApiClient, PublicApiClient } from "@/api/client.js";
import { AccountsRoutes, PostsRoutes } from "@/api/routes";

export const AccountsApi = {
  postLogin(data) {
    return PublicApiClient.post(AccountsRoutes.LOGIN, data);
  },
  postRegister(data) {
    return PublicApiClient.post(AccountsRoutes.REGISTER, data);
  },
  getUserData() {
    return ApiClient.get(AccountsRoutes.GET_USER_DATA);
  },
};

export const PostsApi = {
  getPosts(params) {
    return PublicApiClient.get(PostsRoutes.GET_POSTS, params);
  },
  getPost(id) {
    return PublicApiClient.get(PostsRoutes.GET_POST.replace(":id", id));
  },
  createPost(data) {
    return ApiClient.post(PostsRoutes.CREATE_POST, data);
  },
  updatePost(id, data) {
    return ApiClient.put(PostsRoutes.UPDATE_POST.replace(":id", id), data);
  },
  deletePost(id) {
    return ApiClient.delete(PostsRoutes.DELETE_POST.replace(":id", id));
  },
};
