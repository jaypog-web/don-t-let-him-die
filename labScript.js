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