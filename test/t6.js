(async function () {
    const scraper = require('../secs'),
        log = console.log
    log(await scraper.fetchBackendId(169, false))
})()