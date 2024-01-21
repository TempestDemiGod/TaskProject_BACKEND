import { configDotenv } from 'dotenv'
configDotenv()

export const URI_FRONT_END  = process.env.url_link || ''

export const TOKEN_SECRET = 'tasks project'

export const PORT_BACK_END = 3000

export const URI_DB = 'mongodb+srv://rcorreal2:ZMJ9LAkJ6IwrOEP1@cluster0.qkklljm.mongodb.net/MongoDBCourse?retryWrites=true&w=majority'