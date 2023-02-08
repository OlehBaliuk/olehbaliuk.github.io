const apiRoutes = {
    getUsers: () => 'users',
    getAlbums: user => `albums?userId=${user.id}`,
    getPosts: userId => `posts?userId=${userId}`,
};

export default apiRoutes;
