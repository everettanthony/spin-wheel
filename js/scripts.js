
const wheelInner = document.querySelector('.wheel-inner');
const wheelBtn = document.querySelector('.wheel-btn');
const wheelPrizes = document.querySelectorAll('.wheel-prize');
const fragment = document.createDocumentFragment();
const prizesArr = ['250000','10000','2500','1','5000','1000000','250','100','50000','50','20000','10'];
let activeBtn = false;
let deg = 0;

displayPrizes();
wheelBtn.addEventListener('click', spin);

function displayPrizes() {
    prizesArr.forEach((prize, index) => {
        const sliceDiv = document.createElement('div');
        const prizeSpan = document.createElement('span');
        sliceDiv.classList.add('wheel-slice');
        prizeSpan.textContent = prizesArr[index];
        sliceDiv.appendChild(prizeSpan);

        wheelInner.appendChild(sliceDiv);
    });
}

function updateBtnStatus(isActive) {
    isActive ? wheelBtn.classList.add('disabled')
             : wheelBtn.classList.remove('disabled');
}

function spin() {
    activeBtn = true;

    updateBtnStatus(activeBtn);

    setTimeout(() => {
        activeBtn = false;
        updateBtnStatus(activeBtn);
    }, 5100);

    let spins = Math.floor(Math.random() * 7) + 9;
    console.log("spins: " + spins);  

    let wheelAngle = Math.floor(Math.random() * 12) * 30;
    console.log("wheelAngle: " + wheelAngle);

    let sectorAngle = Math.floor(Math.random() * 14) + 1;
    sectorAngle *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;      
    console.log("sectorAngle: " + sectorAngle);

    deg += 360 * spins + wheelAngle + sectorAngle;
    wheelInner.style.transform = `rotate(${deg}deg)`;

    setTimeout(() => (deg -= sectorAngle), 100); 

    let index = Math.floor((deg - sectorAngle) / 30) % 12;  

    console.log("prize index: " + index);
    console.log("prize: " + prizesArr[index]);
}