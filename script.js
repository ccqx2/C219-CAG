// fullpage
$(document).ready(function () {
    $('#fullpage').fullpage({
        sectionsColor: ['grey', 'lightgray', 'lavenderblush', 'lavender'],
        navigation: true,
        navigationPosition: 'right',
        anchor: ['section1', 'section2', 'section3', 'section4'],
        afterLoad: function (origin, destination, direction) {
            if (destination.index == 0) {
                titles1.play();
                logo.play();
            }
            if (destination.index == 2) {
                runs3.play();
            }
            if (destination.index == 3) {
                cycles4.play();
            }
        }
    });

});

function myFunction() {
    var user = document.getElementById("userin").value;
    document.getElementById("placeuser").innerHTML = "Hello, " + user;
};

// Buttons to sections
$('#gos2').click(function () {
    $.fn.fullpage.moveSectionDown();
});
$('#placeuser').click(function () {
    $.fn.fullpage.moveSectionUp();
});
$('#level1').click(function () {
    $.fn.fullpage.moveSectionDown();
});
$('#completelvl').click(function () {
    $.fn.fullpage.moveSectionUp();
});
$('#level2').click(function () {
    $.fn.fullpage.moveSectionDown();
    $.fn.fullpage.moveSectionDown();
});

// Tippy
tippy('#whats1', {
    content: 'Exercise Tracker is an online app that helps users keep track of their weekly exercise regime.',
    placement: 'bottom',
    trigger: 'click',
});
tippy('#placeuser', {
    content: 'Click to change username.',
    placement: 'bottom',
});
tippy('#lockp2', {
    content: 'Complete previous level first.',
    placement: 'bottom',
});
tippy('#lockp3', {
    content: 'Complete previous level first.',
    placement: 'bottom',
});
tippy('#level1', {
    content: 'Click to proceed with level.',
    placement: 'bottom',
});
tippy('#level2', {
    content: 'Click to proceed with level.',
    placement: 'bottom',
});

// Anime
var titles1 = anime({
    targets: '#titles1',
    scale: 1.1,
    direction: 'alternate',
    easing: 'easeInOutSine'
});
var logo = anime({
    targets: '#logo',
    translateY:-30,
    direction: 'alternate',
    loop:true,
    easing: 'easeInOutSine'
});
var runs3 = anime({
    targets: '#runs3',
    rotate: -10,
    direction: 'alternate',
    easing: 'easeInOutSine'
});
var cycles4 = anime({
    targets: '#cycles4',
    rotate: -10,
    direction: 'alternate',
    easing: 'easeInOutSine'
});

// Chart
// Run
document.querySelector('#rundata').addEventListener('submit', function (event) {
    event.preventDefault();
    var rund1 = document.getElementById("day1s3").value;
    var rund2 = document.getElementById("day2s3").value;
    var rund3 = document.getElementById("day3s3").value;
    var rund4 = document.getElementById("day4s3").value;
    var rund5 = document.getElementById("day5s3").value;
    var rund6 = document.getElementById("day6s3").value;
    var rund7 = document.getElementById("day7s3").value;

    var dataArray = [rund1, rund2, rund3, rund4, rund5, rund6, rund7];

    const labels = [
        'Day 1',
        'Day 2',
        'Day 3',
        'Day 4',
        'Day 5',
        'Day 6',
        'Day 7'
    ];

    var ctx = document.querySelector('#dataChart').getContext('2d');

    var dataChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Kilometers ran',
                borderColor: 'cadetblue',
                data: dataArray
            }]
        },
        options: {}
    });

    var totalkm = parseInt(rund1) + parseInt(rund2) + parseInt(rund3) + parseInt(rund4) + parseInt(rund5) + parseInt(rund6) + parseInt(rund7);
    document.getElementById("totalkm").innerHTML = "Total kilometers ran: " + totalkm + " Km";

    if (parseInt(totalkm) >= 10) {
        document.querySelector('#completelvl').disabled = false;
        document.querySelector('#level2').hidden = false;
        document.querySelector("#lockp2").hidden = true;
    } else {
        document.querySelector('#completelvl').innerHTML = "Try Again.";
    }
});

// Cycle
document.querySelector('#cycledata').addEventListener('submit', function (event) {
    event.preventDefault();
    var cyc1 = document.getElementById("day1s4").value;
    var cyc2 = document.getElementById("day2s4").value;
    var cyc3 = document.getElementById("day3s4").value;
    var cyc4 = document.getElementById("day4s4").value;
    var cyc5 = document.getElementById("day5s4").value;
    var cyc6 = document.getElementById("day6s4").value;
    var cyc7 = document.getElementById("day7s4").value;

    var dataArray2 = [cyc1, cyc2, cyc3, cyc4, cyc5, cyc6, cyc7];

    const labels = [
        'Day 1',
        'Day 2',
        'Day 3',
        'Day 4',
        'Day 5',
        'Day 6',
        'Day 7'
    ];

    var ctx = document.querySelector('#dataChart2').getContext('2d');

    var dataChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Kilometers cycled',
                borderColor: 'cadetblue',
                data: dataArray2
            }]
        },
        options: {}
    });

    var totalkm2 = parseInt(cyc1) + parseInt(cyc2) + parseInt(cyc3) + parseInt(cyc4) + parseInt(cyc5) + parseInt(cyc6) + parseInt(cyc7);
    document.getElementById("totalkm2").innerHTML = "Total kilometers cycled: " + totalkm2 + " Km";

    if (parseInt(totalkm2) >= 20) {
        document.querySelector('#completelvl2').disabled = false;
    }else {
        document.querySelector('#completelvl2').innerHTML = "Try Again.";
    }
});