import { User } from "./user";

export interface Post {
    id?: number;
    userId?: number;
    title?: string;
    body?: string;
    pictureURL?: string;
    pictureThumbnailURL?: string;
    altPicture?: string;
    user?: User;
}
