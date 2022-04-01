const Browser = require("../Browser");

class SO extends Browser {

    searchQuestion = async (stackoverflowUrl, userQuestion) => {   

        const formattedUserQuestion =  String(userQuestion).split(" ").join("+");
        console.log(formattedUserQuestion);
        await this.navigateTo(`${stackoverflowUrl}/search?q=${formattedUserQuestion}`);
    }

    getQuestions = async ()=>{
       await this.page.waitForTimeout(6000);
       const questions = await this.page.evaluate(()=>{
            const links = [];
            const questions = document.querySelectorAll("a.question-hyperlink");
            for(question of questions ) links.push(question.href);
            return links;
        });

        return questions;

    }
    
}

module.exports = SO;