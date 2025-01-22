const video = {
   "/video/video-list": {
      get: {
         tags: ["Videos"],
         security: [{ anhLongToken: [] }],
         parameters: [
            {
               name: "page",
               in: "query",
               description: "nếu không truyền là 1",
            },
            {
               name: "pageSize",
               in: "query",
               description: "nếu không truyền là 10",
            },
         ],
         responses: {
            200: {
               description: `oke`,
            },
         },
      },
   },
   "/video/video-detail/{id}": {
      get: {
         tags: ["Videos"],
         security: [{ anhLongToken: [] }],
         responses: {
            200: {
               description: `oke`,
            },
         },
         parameters: [
            {
               name: "id",
               in: "path",
               description: "ID của video",
               required: true,
               schema: {
                  type: "string",
               },
            },
         ],
      },
   },
   "/video/video-create": {
      post: {
         tags: ["Videos"],
         security: [{ anhLongToken: [] }],
         responses: {
            200: {
               description: `oke`,
            },
         },
         requestBody: {
            description: "dữ liệu để tạo 1 video",
            content: {
               "application/json": {
                  schema: {
                     type: "object",
                     properties: {
                        video_name: { type: "string" },
                        desription: { type: "string" },
                        views: { type: "number" },
                     },
                  },
               },
            },
         },
      },
   },
   "/video/video-update": {
      post: {
         tags: ["Videos"],
         security: [{ anhLongToken: [] }],
         responses: {
            200: {
               description: `oke`,
            },
         },
         requestBody: {
            description: "dữ liệu để tạo 1 video",
            content: {
               "multipart/form-data": {
                  schema: {
                     type: "object",
                     properties: {
                        file: {
                           type: "string",
                           format: "binary",
                        },
                        files: {
                           type: "array",
                           items: {
                              type: "string",
                              format: "binary",
                           },
                        },
                     },
                  },
               },
            },
         },
      },
   },
};

export default video;
