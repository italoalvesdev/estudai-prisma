import app from './config/app';
import env from './config/env'

app.listen(env.port, () =>
  console.log('🔥 Server started at http://localhost:3333')
)
