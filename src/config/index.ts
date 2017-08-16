import * as glob from 'glob'
import * as path from 'path'
import * as dotenv from 'dotenv'

/**
 * Automatically loads all settings files under this folder and export
 * them defaults to global via their own namespace.
 * e.g. settings in `db.js` will be exported in `settings.db.<key ...>`.
 */
const configure = () => {
  dotenv.config()
  let settings = {}
  const files = glob.sync(`${__dirname}/*.ts`, { ignore: '**/index.ts' })

  Object.values(files).forEach((abspath) => {
    const module = require(abspath)
    if (module.default) {
      const prefix = path.parse(abspath).name
      const modcfg = (module.prefix === false) ? module.default : { [prefix]: module.default }
      settings = Object.assign(settings, modcfg)
    }
  })
  return settings
}

export const settings = configure()
