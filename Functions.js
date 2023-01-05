 studentobj = {
	'yash': 26,
	'vaibhav': 24,
	'rajesh' : 25,
	};
    function findaverageage(studentobj){
        let averageAge = 0;
        let numbers=Object.values(studentobj);
        numbers.forEach((number) => {
            console.log(`${number}`)
            averageAge += number;
            count++;
        });
        averageAge= averageAge/count; 
        return averageAge;
    
    }
    var count=0;
    var Average=findaverageage(studentobj);
    console.log("Average age is: ",Average);