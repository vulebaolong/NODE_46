import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _cars from  "./cars.js";
import _chats from  "./chats.js";
import _permissions from  "./permissions.js";
import _role_permissions from  "./role_permissions.js";
import _roles from  "./roles.js";
import _users from  "./users.js";
import _video_type from  "./video_type.js";
import _videos from  "./videos.js";

export default function initModels(sequelize) {
  const cars = _cars.init(sequelize, DataTypes);
  const chats = _chats.init(sequelize, DataTypes);
  const permissions = _permissions.init(sequelize, DataTypes);
  const role_permissions = _role_permissions.init(sequelize, DataTypes);
  const roles = _roles.init(sequelize, DataTypes);
  const users = _users.init(sequelize, DataTypes);
  const video_type = _video_type.init(sequelize, DataTypes);
  const videos = _videos.init(sequelize, DataTypes);

  role_permissions.belongsTo(permissions, { as: "permission", foreignKey: "permission_id"});
  permissions.hasMany(role_permissions, { as: "role_permissions", foreignKey: "permission_id"});
  role_permissions.belongsTo(roles, { as: "role", foreignKey: "role_id"});
  roles.hasMany(role_permissions, { as: "role_permissions", foreignKey: "role_id"});
  chats.belongsTo(users, { as: "user_id_sender_user", foreignKey: "user_id_sender"});
  users.hasMany(chats, { as: "chats", foreignKey: "user_id_sender"});
  chats.belongsTo(users, { as: "user_id_recipient_user", foreignKey: "user_id_recipient"});
  users.hasMany(chats, { as: "user_id_recipient_chats", foreignKey: "user_id_recipient"});

  return {
    cars,
    chats,
    permissions,
    role_permissions,
    roles,
    users,
    video_type,
    videos,
  };
}
