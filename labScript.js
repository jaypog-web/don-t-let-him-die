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
    $('.energyBar').html('<img src="images/energyFull.png">');
}

var levelAtrue;
var levelBtrue;
var levelsTally;

if (levelAtrue == levelBtrue) {
    levelsTally = 1;
}
else {
    levelsTally = 0;
}

function levelAGood() {
    $('#levelA').html('<img src="images/purpleFull.png"></img>');

    levelsGood();
}

function levelBGood() {
    $('#levelB').html('<img src="images/orangeFull.png"></img>');
    levelsGood();
}

function levelsGood() {
    $('#levels').css('background-image', 'url("../images/levels-icon.png")');
}

function cloneGood() {
    $('#cloning').css('background-image', 'url("../images/clone-icon.png")');
}

function cloneReset() {
    $('#cloning').css('background-image', 'url("../images/clone-icon.png")');
    $('.cloneChamber').css('background-image', 'url("../images/emptyChamber.png")');
}

var energyLow = 0;
var levelALow = 0;
var levelBLow = 0;

$('.energyBar').on('click', function () {
    energyGood();
    energyLow = 0;
    goodState();
});

$('#levelA').on('click', function () {
    levelAGood();
    levelALow = 0;
    goodState();
});

$('#levelB').on('click', function () {
    levelBGood();
    levelBLow = 0;
    goodState();
});


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
    $('.energyBar').html('<img src="images/energyHalf.png">');

    energyLow = 1;

    //This call will make the energy totally die within a given time frame -- 15 seconds
    setTimeout(energyDead, 15000);
    console.log('energy dead!');

    dissolve();
}

function levelsAlertA() {
    $('#levels').css('background-image', 'url("../images/levels-icon-alert.png")');
    $('#levelA').html('<img src="images/purpleLow.png">');
    levelALow = 1;

    setTimeout(levelADead, 15000);
    console.log('level A dead!');

    dissolve();
}

function levelsAlertB() {
    $('#levels').css('background-image', 'url("../images/levels-icon-alert.png")');
    $('#levelB').html('<img src="images/orangeLow.png">');
    levelBLow = 1;

    setTimeout(levelBDead, 15000);
    console.log('level B dead!');

    dissolve();
}

function cloneAlert() {
    $('#cloning').css('background-image', 'url("../images/clone-icon-alert.png")');
}

//Time set interval where the levels continually drain.
function dropLevels() {
    var randomDrop = Math.random();

    if (randomDrop < 0.3) {
        levelsAlertA();
    }
    if (randomDrop >= 0.3 && randomDrop < 0.6) {
        levelsAlertB();
    }
    if (randomDrop >= 0.6 && randomDrop <= 1) {
        levelsAlertA();
        levelsAlertB();
    }

    console.log('drop levels off');
    riskyState();
}
var dropTimer;
dropTimer = setInterval(dropLevels, 9500);

//Clone random function uses a random value to decide if the cloning process succeeds or fails. Higher chance of failing than succeeding (7/10 vs 3/10).
//If the cloning fails, the user can try again. If the cloning succeeds or is still in process, the user cannot attempt another cloning.
function cloneSuccess() {
    var flipRandom = Math.random();
    console.log(flipRandom);

    if (flipRandom < 0.7) {
        $('.cloneChamber').css('background-image', 'url("../images/clone-dissolve.gif")');
        $('.cloneUpdate').html('<h2>CLONE STATUS:</h2> <h3>FAILED</h3>');
        cloneAlert();

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
    cloneGood();

    $('.cloneButton').toggle('.cloneButton');

    riskyState();
    energyAlert();

    //The clone's success is set to a timer: it develops for 5 seconds before either failing or succeeding.
    setTimeout(cloneSuccess, 5000);
    //To test
    console.log('delayed after clicking');
});


//Totally dead
function deadState() {
    $('.himView').css('background-image', 'url("../images/vatview_failure.gif")');
    $('.apparatusView').css('background-image', 'url("../images/apparatusView_failure.png")');
}


//function which kills the energy completely
function energyDead() {
    if (energyLow = 1) {
        $('.energyBar').html('<img src="images/energyEmpty.png">');
        $('.energyBar').unbind('click');
    }
    $('.energyBar').css('cursor', 'default');

    energyLow = 2;
}

function levelADead() {
    if (levelALow = 1) {
        $('#levelA').html('<img src="images/purpleEmpty.png">');
        $('#levelA').unbind('click');
    }
    $('#levelA').css('cursor', 'default');

    clearInterval(dropTimer);
    levelALow = 2;
}

function levelBDead() {
    if (levelBLow = 1) {
        $('#levelB').html('<img src="images/purpleEmpty.png">');
        $('#levelB').unbind('click');
    }
    $('#levelB').css('cursor', 'default');

    clearInterval(dropTimer);
    levelBLow = 2;
}

var deadMarker;

function dissolve() {
    deadMarker = energyLow + levelALow + levelBLow;
    console.log('deadMarker:', deadMarker);

    if (deadMarker > 3) {
        deadState();
        $('.cloneButton').removeClass('cloneButton');
    }
}


//Reset button, to return to first state
$('.resetButton').on('click', function () {
    goodState();
    energyGood();
    levelAGood();
    levelBGood();
    cloneReset();

    deadMarker = 0;
});

$('.manual').hide();

$('.manualButton').on('click', function () {
    $('.manual').toggle();
});