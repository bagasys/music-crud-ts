const { SQLContext } = require('rey-common');

const { Model, DataTypes } = SQLContext.getORMProvider();

class Composer extends Model {}

Composer.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
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
    tableName: 'composers',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at'
});

Composer.associate = (models) => {
    Composer.hasOne(models.Music); 
};

module.exports = Composer;
