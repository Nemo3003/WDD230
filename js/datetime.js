const day = new Date();

var datetime = "Last Sync: " + day.getDate() + "/"
	+ (day.getMonth()+1)  + "/"
	+ day.getFullYear() + " || "
	+ day.getHours() + ":"
	+ day.getMinutes() + ":"
	+ day.getSeconds();
console.log(datetime)
document.getElementById("date").value = datetime