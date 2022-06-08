import { AppDataSource } from '../data-source'

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been iniatialized!')
  })
  .catch(err => {
    console.error('Error during Data Source iniatiazation', err)
  })
