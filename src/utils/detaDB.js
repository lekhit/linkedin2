const { Deta } = require('deta');

export const deta=Deta(process.env.DETA_KEY)

export const jobs=deta.Base('jobs2')