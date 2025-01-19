const video = {
   "/video/video-list": {
      get: {
         tags: ["Videos"],
         security: [{ anhLongToken: [] }],
         responses: {
            200: {
               description: `oke`,
            },
         },
      },
   },
};

export default video;
