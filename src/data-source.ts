import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "aws-0-us-west-1.pooler.supabase.com",
    port: 6543,
    username: "postgres.nbagkujiugpfzizjqnxn",
    password: "LjXIvHmtNT20MLTZ",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})
