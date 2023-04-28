export default (sequelize, DataTypes) => {
  const Video = sequelize.define(
    "Video",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      platform: {
        type: DataTypes.STRING,
        allowNull: "web",
      },
      createdBy: {
        type: DataTypes.STRING,
        defaultValue: "Web User",
      },
      createdAt: {
        allowNull: true,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: true,
        type: DataTypes.DATE,
      },
    },
    {
      tableName: "videos",
    }
  );
  Video.associate = function (models) {
    // associations can be defined here
  };
  return Video;
};
