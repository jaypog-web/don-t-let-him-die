console.log('testing alchemy lab JS');

// Start with apparatus view hidden and Him view unbound
$('.apparatusView').hide();

//Function to switch between views
function changeView(viewArea, currentDisp) {
    $('.displayView').hide();
    $(currentDisp).fadeIn(1500);
}

// Function to target the correct div and toggle view
$('.viewButton').on('click', function () {
    var findName = this.getAttribute('id');
    var currentDisplay = '.' + findName + "View";

    changeView(this, currentDisplay);
});

//Change states of the selection items for Him view. These items will be "reverted" upon clicking the apparatus view, and vice versa.
//For the future -- figure out how to actually unbind click function/remove class from #him and #apparatus, currently just basically painting over a dead fly
$('#him').on('click', function () {
    //For HIM
    $(this).html('<h3>VIEW <br> HIM</h3><img src="images/him-icon-clicked.png" class="resizeImg">');

    $(this).css('color', 'var(--Turquoise)');
    $(this).css('cursor', 'default');

    //For APPARATUS
    $('#apparatus').css('color', '#ffffff');
    $('#apparatus').css('cursor', 'pointer');
    $('#apparatus').html('<h3>VIEW <br> APPARATUS</h3><img src="images/apparatus-icon.png" class="resizeImg">');
});

$('#apparatus').on('click', function () {
    //For APPARATUS
    $(this).html('<h3>VIEW <br> APPARATUS</h3><img src="images/apparatus-icon-clicked.png" class="resizeImg">');

    $(this).css('color', 'var(--Turquoise)');
    $(this).css('cursor', 'default');

    //For HIM
    $('#him').css('color', '#ffffff');
    $('#him').css('cursor', 'pointer');
    $('#him').bind('click');
    $('#him').html('<h3>VIEW <br> HIM</h3><img src="images/him-icon.png" class="resizeImg">');
});

$('#him').on('click', function () {
    $(this).removeClass('.viewButton');
    $(this).removeClass('.hover');

    $(this).addClass('.viewButtonClicked');
});

// Please code reset states!!!!!!!!!!!
// Reset states, to return each altered item to its "good" state
function goodState() {
    $('.himView').css('background-image', 'url("../images/vatview_good.gif")');
    $('.apparatusView').css('background-image', 'url("../images/apparatusView_good.gif")');
}

function tempGood() {
    $('#temp').css('background-image', 'url("../images/temp-icon.png")');
}

function energyGood() {
    $('#energy').css('background-image', 'url("../images/energy-icon.png")');
}

function levelsGood() {
    $('#levels').css('background-image', 'url("../images/levels-icon.png")');
}

function cloneGood() {
    $('#cloning').css('background-image', 'url("../images/clone-icon.png")');
}


//This function is used to switch the character and the apparatus to their risky/warning states when an element is low
function riskyState() {
    $('.himView').css('background-image', 'url("../images/vatview_risk.gif")');
    $('.apparatusView').css('background-image', 'url("../images/apparatusView_risk.gif")');
}

//These functions switch to the header icons' alert states
function tempAlert() {
    $('#temp').css('background-image', 'url("../images/temp-icon-alert.png")');
}

function energyAlert() {
    $('#energy').css('background-image', 'url("../images/energy-icon-alert.png")');
}

function levelsAlert() {
    $('#levels').css('background-image', 'url("../images/levels-icon-alert.png")');
}

function cloneAlert() {
    $('#cloning').css('background-image', 'url("../images/clone-icon-alert.png")');
}

//Clone random function uses a random value to decide if the cloning process succeeds or fails. Higher chance of failing than succeeding (7/10 vs 3/10).
//If the cloning fails, the user can try again. If the cloning succeeds or is still in process, the user cannot attempt another cloning.
function cloneSuccess() {
    var flipRandom = Math.random();
    console.log(flipRandom);

    if (flipRandom < 0.7) {
        $('.cloneChamber').css('background-image', 'url("../images/clone-dissolve.gif")');
        $('.cloneUpdate').html('<h2>CLONE STATUS:</h2> <h3>FAILED</h3>');

        $('.cloneButton').toggle('.cloneButton');
    }
    else if (flipRandom >= 0.7) {
        $('.cloneChamber').css('background-image', 'url("../images/clone-success.gif")');
        $('.cloneUpdate').html('<h2>CLONE STATUS:</h2> <h3>SUCCESS</h3>');

        $('.cloneButton').remove('.cloneButton');
    }
}

//Change clone chamber upon clicking clone button. Also remove the option/suggestion to clone again, and call the riskyState function
$('.cloneButton').on('click', function () {
    $('.cloneChamber').css('background-image', 'url("../images/clone-develop.gif")');
    $('.cloneUpdate').html('<h2>CLONE STATUS:</h2> <h3>DEVELOPING...</h3>');

    $('.cloneButton').toggle('.cloneButton');

    riskyState();
    energyAlert();

    //The clone's success is set to a timer: it develops for 5 seconds before either failing or succeeding.
    setTimeout(cloneSuccess, 5000);
    //To test
    console.log('delayed after clicking');
});