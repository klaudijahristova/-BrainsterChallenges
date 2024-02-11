$(function () {
    const carWidth = $("#car1").width();
    const trackWidth = $(window).width() - carWidth;
    let car1Place, car2Place;
    let car1Finished = false;
    let car2Finished = false;

    $("#raceBtn").on('click', function () {
        $("#raceBtn, #startOver").prop("disabled", true);
        const car1ReceTime = Math.floor(Math.random() * 5000 + 1);
        const car2ReceTime = Math.floor(Math.random() * 5000 + 1);
        let counter = 4;

        const timer = setInterval(function () {
            counter--;

            updateRacePositions(car1ReceTime, car2ReceTime);

            if (counter === 0) {
                clearInterval(timer);
                $(".time").hide(); 
                $('#raceTrack').css('opacity', '1');
                raceCar($("#car1"), car1ReceTime, car1Place, 'table1', 'Car1');
                raceCar($("#car2"), car2ReceTime, car2Place, 'table2', 'Car2');
            } else {
                showCountdown(counter);
            }
        }, 1000);
    });

    $('#startOver').on('click', function () {
        if (car1Finished && car2Finished) {
            resetRace();
        }
    });

    function updateRacePositions(car1Time, car2Time) {
        if (car1Time < car2Time) {
            car1Place = "first";
            car2Place = "second";
        } else if (car2Time < car1Time) {
            car1Place = "second";
            car2Place = "first";
        }
    }

    function showCountdown(counter) {
        $('.time').text(counter);
        $('.time').show();
        $('.time').css('z-index', '2001')
        $('#raceTrack').css('opacity', '0.6');
    }

    function raceCar(car, raceTime, place, tableClass, carName) {
        const carClass = carName === 'Car1' ? 'white' : 'red'; 
        car.animate({
            left: trackWidth + "px"
        }, raceTime, function () {
            $(`.${tableClass}`).append(`<tr >
                <td>
                    Finished in: <span class="${carClass}">${place}</span> place with a time of: <span class="${carClass}">${raceTime}</span> milliseconds!
                </td>
            </tr>`);
            localStorage.setItem(carName.toLowerCase(), `<tr>
                <td>
                    <span class="${carClass}">${carName}</span> finished in <span class="${carClass}">${place}</span> place, with a time of <span class="${carClass}">${raceTime}</span> milliseconds!
                </td>
            </tr>`);
           
            if (carName === 'Car1') {
                car1Finished = true;
            } else {
                car2Finished = true;
            }
            showFlag();
            if(car1Finished && car2Finished){
                $("#startOver").prop("disabled", false);
            }
        });
    }
    
    function showFlag() {
        if (car1Finished || car2Finished) {
            $('.flag').show();
            $("#raceTrack").css("opacity", "0.6");
        }
    }

    function resetRace() {
        $('#raceTrack').css('opacity', '1');
        $('.flag').hide();
        $('#car1, #car2').css('left', '0');
        $("#raceBtn, #startOver").prop("disabled", false);
        car1Finished = false;
        car2Finished = false;
    }

    function loadPreviousResults() {
        const previousResultCar1 = localStorage.getItem('car1');
        const previousResultCar2 = localStorage.getItem('car2');
        if (previousResultCar1 && previousResultCar2) {
            $('.table3').append(previousResultCar1);
            $('.table3').append(previousResultCar2);
        }
    }
    loadPreviousResults();
});




