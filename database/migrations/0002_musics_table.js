const tableOptions = 'musics';

module.exports = {
    up: (queryInterface, DataTypes) => queryInterface.createTable(tableOptions, {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        composer_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: {
                    tableName: 'composers'
                },
                key: 'id',
            }
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
    }),
    down: (queryInterface, DataTypes) => queryInterface.dropTable(tableOptions)
}
