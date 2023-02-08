import { httpService } from '../services/instanceHttpService';
import apiRoutes from './apiRoutes';

export const api = {
    getUsers: async () => {
        const response = await httpService.get(apiRoutes.getUsers());

        return response.data;
    },

    getAlbums: async user => {
        const response = await httpService.get(apiRoutes.getAlbums(user));

        return response.data;
    },

    getPosts: async userId => {
        const response = await httpService.get(apiRoutes.getPosts(userId));

        return response.data;
    },
};
