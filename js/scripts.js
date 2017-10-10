$(document).ready(function() {
    const cards = [
        '<img src="images/monsters-01.png">',
        '<img src="images/monsters-02.png">',
        '<img src="images/monsters-03.png">',
        '<img src="images/monsters-04.png">',
        '<img src="images/monsters-05.png">',
        '<img src="images/monsters-06.png">',
        '<img src="images/monsters-07.png">',
        '<img src="images/monsters-08.png">',
        '<img src="images/monsters-09.png">',
        '<img src="images/monsters-11.png">',
        '<img src="images/monsters-13.png">',
        '<img src="images/monsters-14.png">',
        '<img src="images/monsters-15.png">',
        '<img src="images/monsters-16.png">',
    ];

    var gridSize = 4;
    var cardsToUse = [];

    $('button').click(function() {
        var userAnswer = $(this).html();
        if (userAnswer === "Easy") {
            gridSize = 4;
        } else if (userAnswer === "Medium") {
            gridSize = 12;
        } else if (userAnswer === "Hard") {
            gridSize = 28;
        }

        cards.map((card, index) => {
            cardsToUse.push(card, card)
        });
        var memoryHTML = "";
        for (let i = 0; i < gridSize; i++) {
            memoryHTML += `<div class="card col-sm-3">`;
            memoryHTML += '<div class="card-holder">';
            memoryHTML += `<div class="card-front">${cardsToUse[i]}</div>`
            memoryHTML += `<div class="card-back"></div>`
            memoryHTML += '</div>'
            memoryHTML += `</div>`;
        }
        $('.mg-stuff').html(memoryHTML);
        $('.card-holder').click(function() {
            $(this).toggleClass('flip')
            var cardsUp = $('.flip');
            if (cardsUp.length === 2) {
                var card1 = cardsUp[0];
                var card2 = cardsUp[1];
                if (card1.innerHTML === card2.innerHTML) {
                    cardsUp.addClass('matched');
                } else {
                    setTimeout(() => {
                        cardsUp.removeClass('flip');
                    }, 2000);
                };
            } else {

            };
        });
    });
});