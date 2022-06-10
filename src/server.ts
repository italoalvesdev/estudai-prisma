import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'

import { routes } from './routes'

const app = express()
dotenv.config()

app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(process.env.PORT || 3333, () =>
  console.log('🔥 Server started at http://localhost:3333')
)
