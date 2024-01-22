import { configDotenv } from 'dotenv'
configDotenv()

export const URI_FRONT_END  = process.env.url_link || ''

export const TOKEN_SECRET = 'tasks project'

export const PORT_BACK_END = 5000

export const URI_DB = process.env.URI_DB || ''