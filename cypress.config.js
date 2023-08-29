const {defineConfig} = require('cypress')

module.exports = defineConfig({
  projectId: 'w7ws4j',
  viewportHeight: 747,
  viewportWidth: 1537,
  watchForFileChanges: false,
  defaultCommandTimeout: 50000,
  e2e: {
    experimentalRunAllSpecs: true,
    baseUrl: 'https://dev-web.seamcor.com/',
    registerUrl: 'https://dev-web.seamcor.com/registration/packages',
    passwordsetUrl:
      'https://api.testsendr.link/?email=r.awais%2Btest016%40testsendr.link',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
})
