import {Sequelize} from 'sequelize';

const sequelize = new Sequelize(
    'lgpd-database',
    'postgres',
    'postgres',
    {
        dialect: "postgres",
        host: process.env.DB_HOST || "localhost",
        dialect: 'postgres',
        port: 5432,
        define: {
            timestamps: false
        }
    }
);
export default sequelize