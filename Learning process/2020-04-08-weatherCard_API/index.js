fetch('https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-075?Authorization=CWB-D8E2CBB4-1040-497F-A564-FDFC9FA4EE20')
.then(function (response) {
    return response.json();
})

.then(function (weatherData) {
    console.log(weatherData);

    var Location = weatherData.records.locations[0].location
    console.log(Location);

    Location.forEach(element => {
        var Name = element.locationName
        var WX = element.weatherElement[6].time[0].elementValue[0].value
        var POP = element.weatherElement[0].time[0].elementValue[0].value
        var MinT = element.weatherElement[8].time[0].elementValue[0].value
        var MaxT = element.weatherElement[12].time[0].elementValue[0].value

        var img_src
        var Suggest
        if (POP == 0) {
            img_src = "https://image.flaticon.com/icons/svg/578/578153.svg"
            Suggest = '可以出去玩'
        } else if (POP < 25) {
            img_src = "https://image.flaticon.com/icons/svg/578/578116.svg"
            Suggest = '建議準備雨具，以備不時之需'

        } else if (POP < 50) {
            img_src = "https://image.flaticon.com/icons/svg/578/578118.svg"
            Suggest = '建議要攜帶雨具'
        } else {
            img_src = "https://image.flaticon.com/icons/svg/578/578132.svg"
            Suggest = '記得攜帶雨具'
        }

        var Card = document.querySelector(".container")
        Card.innerHTML += `
        <div class="card">
            <img src="${img_src}" alt="">
            <div class="card-block">
                <h1>${Name}</h1>
                <p>天氣現象：</p>
                <p>${WX}</p>
                <p>${MinT}&#8451 ~ ${MaxT}&#8451</p>
                <p>降雨機率：${POP}%</p>
                <p>${Suggest}</P>
            </div>
        </div>
        `
    });
});