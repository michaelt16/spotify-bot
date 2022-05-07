module.exports ={
    name:'scheduele',
    description: "this is a scheduele command!",
    execute(message,args){

        // https://www.freecodecamp.org/news/schedule-a-job-in-node-with-nodecron/ 
        const nodeCron = require("node-cron");

        const timed = "0 12 19 * *";
        const test = "* * * * * *"

        
        const job = nodeCron.schedule(test , function jobYouNeedToExecute() {
            
            // console.log(new Date().toLocaleString());
            // console.log("poop every second")

            // message.channel.send(new Date().toLocaleString())
            message.channel.send("Payment is due today + $3 to your account.")
            
          });

          job.start()
          
    }
}