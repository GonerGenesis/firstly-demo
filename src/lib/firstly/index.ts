import { FF_Role } from 'firstly'
import { firstly } from 'firstly/api'
import { auth } from 'firstly/auth'
import { Log } from '@kitql/helpers'

import { task } from './modules/task'

//----------------------------------------
// To switch to postgres (1/2)
//----------------------------------------
// import { createPostgresConnection } from 'remult/postgres'
// import { DATABASE_URL } from '$env/static/private'

//----------------------------------------
// To enable OAuth via Github (1/2)
//----------------------------------------
// import { github } from 'firstly/auth/providers'

/**
 * Your roles, use them in your app !
 */
export const Role = {
  Boss: 'Boss',
}

/**
 * Your logs with a nice prefix, use `log.info("Hello")` / `log.success("Yeah")` / `log.error("Ho nooo!")` and see !
 */
export const log = new Log('firstly-demo')

export const api = firstly({
  //----------------------------------------
  // To switch to postgres (2/2)
  //----------------------------------------
  // dataProvider: await createPostgresConnection({
  //  connectionString: DATABASE_URL,
  // }),

  modules: [
    //----------------------------------------
    // Core Module: auth
    //----------------------------------------
    auth({
      providers: {
        demo: [
          { name: 'Ermin' },
          { name: 'JYC', roles: [FF_Role.Admin] },
          { name: 'Noam', roles: [FF_Role.Admin, Role.Boss] },
        ],

        // password: {},

        // otp: {},

        oAuths: [
          //----------------------------------------
          // To enable OAuth via Github (2/2)
          // Instructions by hovering the method `github`
          //----------------------------------------
          // github(),
        ],
      },
    }),

    //----------------------------------------
    // example of a userland module
    //----------------------------------------
    task({ specialInfo: 'hello from userland' }),

    //----------------------------------------
    // example of a userland inline module
    //----------------------------------------
    {
      name: 'app',
      entities: [],
      controllers: [],
      initApi: async () => {
        log.success('App is ready! 🚀')
      },
    },
  ],
})
