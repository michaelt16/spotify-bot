module.exports ={
    name:'when',
    description: "this is a ping command!",
    execute(message,args){

        const CronJob = require("cron").CronJob;

        const timed = "0 12 19 * *";

        const cronJob = new CronJob(
            timed,
            () => {
                console.log("Timestamp: ", new Date());
            },
            null,
            true
        );
        cronJob.start()

        let year = cronJob.nextDates().c.year
        let month = cronJob.nextDates().c.month
        let date = cronJob.nextDates().c.day 
            console.log("Next Payment is:", year, month,date)
            message.channel.send(`Next Payment is: ${year.toString()}/${month.toString()}/${date.toString()}`);
        

    }
}