import { ImageController } from "./controller/ImageController";
import {UserController} from "./controller/UserController";
import {AuthorizationController} from "./controller/AuthorizationController";

export const Routes = [
    {
        method: "post",
        route: "/login",
        controller: AuthorizationController,
        action: "login"
    },
    {
    method: "get",
    route: "/images",
    controller: ImageController,
    action: "all"
}];