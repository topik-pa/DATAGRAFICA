import dTable from '../../components/shared/dTable/dTable.js'

export const home = {
  init: async () => {
    console.log('Home page')
    await dTable.init()
  }
}
