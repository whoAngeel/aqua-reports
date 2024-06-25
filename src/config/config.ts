import "dotenv/config";

const config = {
    port: process.env.PORT || 3000,
    db_uri: process.env.DB_URI 
}

export {config}