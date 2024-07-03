import "dotenv/config";

const config = {
    port: process.env.PORT || 3000,
    db_uri: process.env.DB_URI ,
    secret: process.env.JWT_SECRET as string,
    google_client_id: process.env.GOOGLE_CLIENT_ID as string,
    google_client_secret: process.env.GOOGLE_CLIENT_SECRET as string
}

export {config}