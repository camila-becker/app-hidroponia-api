module.exports = {
  dialect: "mysql",
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
  host: process.env.DB_HOST,
  define: {
    timestamps: true,
    underscored: true,
  },
  timezone: "-03:00",
};
