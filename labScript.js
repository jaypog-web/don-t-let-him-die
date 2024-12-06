console.log('testing alchemy lab JS');

// Start with apparatus view hidden
$('.apparatusView').hide();

//Function to switch between views
function changeView(viewArea, currentDisp) {
    console.log('testing changeView();');

    $('.displayView').hide();
    $(currentDisp).fadeIn(1500);
}

// Function to target the correct div and toggle view
$('.viewButton').on('click', function () {
    var findName = this.getAttribute('id');
    var currentDisplay = '.' + findName + "View";
    console.log(currentDisplay);

    changeView(this, currentDisplay);
});

//This function is used to switch the character and the apparatus to their risky/warning states when an element is low
function riskyState() {
    $('.himView').css('background-image', 'url("../images/vatview_risk.gif")');
    $('.apparatusView').css('background-image', 'url("../images/apparatusView_risk.gif")');
}

//Change clone chamber upon clicking clone button. Also remove the option/suggestion to clone again, and call the riskyState function
$('.cloneButton').on('click', function () {
    $('.cloneChamber').css('background-image', 'url("../images/clone-develop.gif")');
    $('.cloneUpdate').html('<h2>CLONE STATUS:</h2> <h3>DEVELOPING...</h3>');
    $('.cloneButton').addClass('cloneButtonPressed');
    $('.cloneButton').removeClass('cloneButton');

    riskyState();

    $(this).unbind('click');
});