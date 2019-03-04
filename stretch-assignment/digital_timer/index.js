// Set Time of Arrival
const arrival = new Date();
let timer;

// Get Time on Page
function showElapsed() {
    let rightNow = (new Date()).getTime(),
        distance = Math.floor((rightNow - arrival) / 10).toString().split(''),
        sTens = distance[3] == undefined ? 0 : distance[0];
    if (distance[1] == undefined) {
        sOnes = 0,
            mHuns = 0,
            mTens = distance[0];
    } else if (distance[2] == undefined) {
        sOnes = 0,
            mHuns = distance[0],
            mTens = distance[1];
    } else if (distance[3] == undefined) {
        sOnes = distance[0],
            mHuns = distance[1],
            mTens = distance[2];
    } else {
        sOnes = distance[1],
            mHuns = distance[2],
            mTens = distance[3];
    }

    // Get and name digits
    const secondTens = document.getElementById('secondTens');
    const secondOnes = document.getElementById('secondOnes');
    const msHundreds = document.getElementById('msHundreds');
    const msTens = document.getElementById('msTens');
    // Set individual digit behaviors
    // Second Tens Posion
    secondTens.innerText = sTens;
    secondOnes.innerText = sOnes;
    msHundreds.innerText = mHuns;
    msTens.innerText = mTens;
}
timer = setInterval(showElapsed, 10)