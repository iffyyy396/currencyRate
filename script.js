function startup() {
  $.ajax({
                // api Link
    url: `https://openexchangerates.org/api/latest.json?app_id=937ca04ec4e0466a9c5b7f939763da26`,
                // When It Will Run Successfully
    success: function(data) {
        console.log(data);
        let PKR = data.rates.PKR;
        let USD = data.rates.USD;
        let AUD = data.rates.AED;
        let EUR = data.rates.EUR;
        let JPY = data.rates.JPY;
        let SAR = data.rates.SAR;
        let QAR = data.rates.QAR;
        let INR = data.rates.INR;
        
var ctx = document.getElementById("myChart");
var myLineChart = new Chart(ctx, {
    type: 'bar',
    data:{
        labels: ["PKR", "USD", "AUD", "EUR", "JPY", "SAR", "INR","QAR"],
        datasets: [{
            label:'Highest Rates',
            data: [PKR, USD, AUD, EUR, JPY, SAR, INR, QAR],
            backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
                'rgba(75, 192, 192)',
                'rgba(153, 102, 255)',
                'rgba(255, 159, 64)',
                'rgba(54, 162, 235)',
                'rgba(75, 192, 192)'

            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});  
    },  
                // If It Will Not Run
    error: function(err) {
        console.log(err);
    }
    })

}