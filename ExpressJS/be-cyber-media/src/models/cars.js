import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class cars extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    car_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    passengers: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    max_speed: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    gearbox_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fuel_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    price_per_day: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    discount_percentage: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    image_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cars',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "car_id" },
        ]
      },
    ]
  });
  }
}
