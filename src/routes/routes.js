// https://stackoverflow.com/

const Scrapper = require('../modules/stackoverflow');
const adress = require('../modules/Browser/adress');

const { Router} = require('express');
const route = Router();

route.get('/',  (req, res)=> res.send('home'));
route.get("/ask/:search", async (req, res)=>{

    const question = 
    req.params.search;
    const scrapper = new Scrapper();
    await scrapper.startBrowser();
    await scrapper.createNewPage(adress.stackOverflowPtbr);
    await scrapper.searchQuestion(adress.stackOverflowPtbr, question);
    await scrapper.getQuestions()
    .then( result => res.json({result}))
    .finally(()=> scrapper.browser.close());

});


module.exports  = route;
