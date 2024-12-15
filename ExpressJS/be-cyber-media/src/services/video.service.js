import models from "../common/sequelize/init.sequelize.js";

const videoService = {
   videoList: async () => { 
      const videos = await models.videos.findAll({ raw: true });
      return videos
    }
}

export default videoService