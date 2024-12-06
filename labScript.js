console.log('testing alchemy lab JS');

// Start with apparatus view hidden and Him view unbound
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

    changeView(this, currentDisplay);


});

//Change states of the selection items for Him view. These items will be "reverted" upon clicking the apparatus view, and vice versa
/*$('#him').on('click', function () {
    //For HIM
    $(this).html('<h3>VIEW <br> HIM</h3><img src="images/him-icon-clicked.png" class="resizeImg">');

    $(this).css('color', 'var(--Turquoise)');
    $(this).css('cursor', 'default');

    $(this).unbind('click');

    //For APPARATUS
    $('#apparatus').css('color', '#ffffff');
    $('#apparatus').css('cursor', 'pointer');
    $('#apparatus').bind('click');
    $('#apparatus').html('<h3>VIEW <br> APPARATUS</h3><img src="images/apparatus-icon.png" class="resizeImg">');
});

$('#apparatus').on('click', function () {
    //For APPARATUS
    $(this).html('<h3>VIEW <br> APPARATUS</h3><img src="images/apparatus-icon-clicked.png" class="resizeImg">');

    $(this).css('color', 'var(--Turquoise)');
    $(this).css('cursor', 'default');

    $(this).unbind('click');

    //For HIM
    $('#him').css('color', '#ffffff');
    $('#him').css('cursor', 'pointer');
    $('#him').bind('click');
    $('#him').html('<h3>VIEW <br> HIM</h3><img src="images/him-icon.png" class="resizeImg">');
});
*/

$('#him').on('click', function () {
    $(this).removeClass('.viewButton');
    $(this).removeClass('.hover');

    $(this).addClass('.viewButtonClicked');
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