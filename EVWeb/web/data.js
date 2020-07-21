var car = ["Audi e-tron 55", "Mercedes EQC", "Audi e-tron 50", "Tesla Model S Perf Raven", "Jaguar I-Pace 90 kWh", "Porsche Taycan 4S 79 kWh", "Tesla Model 3 Performance", "Model 3 LR RWD", "Kia e-Niro 64 kWh", "Kia e-Soul 64 kWh", "Hyundai Kona 64 kWh", "Nissan Leaf 62 kWh", "Nissan e-NV200 40 kWh", "Model 3 Standard Range+", "Nissan Leaf 40 kWh", "VW e-Golf 35.8 kWh", "Hyundai Ioniq 38 kWh", "Kia Soul 30 kWh", "Renault Zoe ZE50", "MG ZS EV (Thai)", "MG ZS EV", "Honda e", "Hyundai Ioniq 28 kWh", "Peugeot e-208", "BMW i3 44 kWh", "BMW i3 22 kWh", "VW e-Up 36.8 kWh", "VW e-Up 18.7 kWh", "Mitsubishi i-MiEV"];
var total = ["2720", "2620", "2560", "2360", "2340", "2320", "1960", "1880", "1860", "1860", "1840", "1820", "1740", "1740", "1700", "1700", "1680", "1680", "1640", "1630", "1640", "1620", "1600", "1600", "1440", "1360", "1280", "1260", "1200"];
var front = ["1360", "1240", "1300", "1200", "1240", "1180", "980", "900", "1020", "1020", "1000", "1020", "1000", "800", "960", "920", "840", "960", "960", "940", "960", "820", "780", "900", "700", "640", "720", "720", "560"];
var rear = ["1360", "1380", "1260", "1160", "1100", "1140", "980", "980", "840", "840", "840", "800", "740", "940", "740", "780", "840", "720", "680", "690", "680", "800", "820", "700", "740", "720", "560", "540", "640"];
var dis = ["50/50", "47/53", "51/49", "51/49", "53/47", "51/49", "50/50", "48/52", "55/45", "55/45", "54/46", "56/44", "57/43", "46/54", "56/44", "54/46", "50/50", "57/43", "59/41", "58/42", "59/41", "51/49", "49/51", "56/44", "49/51", "47/53", "56/44", "57/43", "47/53"];
var battery = ["95 kWh", "~90 kWh", "71 kWh", "100 kWh", "90 kWh", "79 kWh", "~80 kWh", "~80 kWh", "~70 kWh", "~70 kWh", "~70 kWh", "62 kWh", "40 kWh", "~50 kWh", "40 kWh", "36 kWh", "~42 kWh", "~34 kWh", "52 kWh", "~50 kWh", "~50 kWh", "35.5 kWh", "~31 kWh", "50 kWh", "44 kWh", "22 kWh", "36.8 kWh", "18.7 kWh", "16 kWh"];

function loading() {
    var car_list = "";
    var total_list = "";
    var front_list = "";
    var rear_list = "";
    var dis_list = "";
    var battery_list = "";
    var table = "";
    var count = 0;

    for (var i = 0; i < car.length; i++) {
        count += 1
        table = table + "<tr>";
        table = table + "<td><center><h4>" + count + "</h4></center></td>";
        car_list = "<td><center><h4><b>" + car[i] + "</b></h4></center>" + "</td>";
        total_list = "<td><center><h4>" + total[i] + "</h4></center></td>";
        front_list = "<td><center><h4>" + front[i] + "</h4></center></td>";
        rear_list = "<td><center><h4>" + rear[i] + "</h4></center></td>";
        dis_list = "<td><center><h4>" + dis[i] + "</h4></center></td>";
        battery_list = "<td><center><h4>" + battery[i] + "</h4></center></td>";

        table = table + car_list + total_list + front_list + rear_list + dis_list + battery_list + "</tr>";
        // console.log(car[i])
    }
    document.getElementById("table").innerHTML = table;
}

function findbalance() {
    var car_list = "";
    var total_list = "";
    var front_list = "";
    var rear_list = "";
    var dis_list = "";
    var battery_list = "";
    var table = "";
    var count = 0;

    for (var i = 0; i < car.length; i++) {
        if (parseInt(front[i]) == parseInt(rear[i])) {
            count += 1
            table = table + "<tr>";
            table = table + "<td><center><h4>" + count + "</h4></center></td>";
            car_list = "<td><center><h4><b>" + car[i] + "</b></h4></center>" + "</td>";
            total_list = "<td><center><h4>" + total[i] + "</h4></center></td>";
            front_list = "<td><center><h4>" + front[i] + "</h4></center></td>";
            rear_list = "<td><center><h4>" + rear[i] + "</h4></center></td>";
            dis_list = "<td><center><h4>" + dis[i] + "</h4></center></td>";
            battery_list = "<td><center><h4>" + battery[i] + "</h4></center></td>";

            table = table + car_list + total_list + front_list + rear_list + dis_list + battery_list + "</tr>";

        }
        // console.log(car[i])
    }
    document.getElementById("table").innerHTML = table;
}

function findfront() {
    var car_list = "";
    var total_list = "";
    var front_list = "";
    var rear_list = "";
    var dis_list = "";
    var battery_list = "";
    var table = "";
    var count = 0;

    for (var i = 0; i < car.length; i++) {
        if (parseInt(front[i]) > parseInt(rear[i])) {
            count += 1
            table = table + "<tr>";
            table = table + "<td><center><h4>" + count + "</h4></center></td>";
            car_list = "<td><center><h4><b>" + car[i] + "</b></h4></center>" + "</td>";
            total_list = "<td><center><h4>" + total[i] + "</h4></center></td>";
            front_list = "<td><center><h4>" + front[i] + "</h4></center></td>";
            rear_list = "<td><center><h4>" + rear[i] + "</h4></center></td>";
            dis_list = "<td><center><h4>" + dis[i] + "</h4></center></td>";
            battery_list = "<td><center><h4>" + battery[i] + "</h4></center></td>";

            table = table + car_list + total_list + front_list + rear_list + dis_list + battery_list + "</tr>";

            // console.log(car[i])
        }
        document.getElementById("table").innerHTML = table;
    }
}

function findrear() {
    var car_list = "";
    var total_list = "";
    var front_list = "";
    var rear_list = "";
    var dis_list = "";
    var battery_list = "";
    var table = "";
    var count = 0;

    for (var i = 0; i < car.length; i++) {
        if (parseInt(front[i]) < parseInt(rear[i])) {
            count += 1
            table = table + "<tr>";
            table = table + "<td><center><h4>" + count + "</h4></center></td>";
            car_list = "<td><center><h4><b>" + car[i] + "</b></h4></center>" + "</td>";
            total_list = "<td><center><h4>" + total[i] + "</h4></center></td>";
            front_list = "<td><center><h4>" + front[i] + "</h4></center></td>";
            rear_list = "<td><center><h4>" + rear[i] + "</h4></center></td>";
            dis_list = "<td><center><h4>" + dis[i] + "</h4></center></td>";
            battery_list = "<td><center><h4>" + battery[i] + "</h4></center></td>";

            table = table + car_list + total_list + front_list + rear_list + dis_list + battery_list + "</tr>";

        }
        // console.log(car[i])
    }
    document.getElementById("table").innerHTML = table;
}