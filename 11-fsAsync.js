const {readFileSync, writeFileSync, readFile, writeFile} = require('fs')

readFile('./content/first.txt','utf-8', (err, result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = result;
    // console.log(result);
    readFile('./content/second.txt','utf-8', (err, result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        // console.log(result);

        writeFile(
            './content/result-async.txt',
            `Here is the result : ${first}, ${second}`,
            (err, result)=>{
                if(err){
                    console.log(err);
                    return;
                }
                console.log(result);
            }
        )
    })
})