const { SQLContext } = require('rey-common');
const Composer = require('./composer');

const { Model, DataTypes } = SQLContext.getORMProvider();

class Music extends Model {}

Music.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true
    },
    deleted_at: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    sequelize: SQLContext.getContext(),
    underscored: true,
    paranoid: true,
    tableName: 'musics',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at'
});

Music.associate = (models) => {
    Music.belongsTo(models.Composer, {
        foreignKey: 'composer_id'
    });
};

module.exports = Music;
