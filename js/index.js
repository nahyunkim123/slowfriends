const trackWidth = document.querySelector('.track').offsetWidth;

const Camel = document.getElementById('Camel');
const Hedgehog = document.getElementById('Hedgehog');
const Sauropod = document.getElementById('Sauropod');
const Seal = document.getElementById('Seal');
const Snail = document.getElementById('Snail');
const Sloth = document.getElementById('Sloth');

const message = document.getElementById('message');
const txt = document.getElementById('txt');

function startRace() {
  Camel.style.left = '0px';
  Hedgehog.style.left = '0px';
  Sauropod.style.left = '0px';
  Seal.style.left = '0px';
  Snail.style.left = '0px';
  Sloth.style.left = '0px';

  let intervalId1 = setInterval(moveAnimal.bind(null, Camel), getRandomDelay());
  let intervalId2 = setInterval(moveAnimal.bind(null, Hedgehog), getRandomDelay());
  let intervalId3 = setInterval(moveAnimal.bind(null, Sauropod), getRandomDelay());
  let intervalId4 = setInterval(moveAnimal.bind(null, Seal), getRandomDelay());
  let intervalId5 = setInterval(moveAnimal.bind(null, Snail), getRandomDelay());
  let intervalId6 = setInterval(moveAnimal.bind(null, Sloth), getRandomDelay());

  function moveAnimal(animal) {
    var currentPosition = parseInt(animal.style.left);

    if (currentPosition >= trackWidth) {
      clearInterval(intervalId1);
      clearInterval(intervalId2);
      clearInterval(intervalId3);
      clearInterval(intervalId4);
      clearInterval(intervalId5);
      clearInterval(intervalId6);

      switch (animal) {
        case Camel:
          txt.textContent = "축하합니다! 낙타가 승리했습니다!";
          break;
          case Hedgehog:
            txt.textContent = "축하합니다! 고슴도치가 승리했습니다!";
            break;
            case Sauropod:
              txt.textContent = "축하합니다! 공룡이 승리했습니다!";
              break;
              case Seal:
                txt.textContent = "축하합니다! 물개가 승리했습니다!";
                break;
                case Snail:
                  txt.textContent = "축하합니다! 달팽이가 승리했습니다!";
                  break;
                  case Sloth:
                    txt.textContent = "축하합니다! 나무늘보가 승리했습니다!";
                    break;
                    default:
                      txt.textContent = "경주가 종료되었습니다!";
                    }
                    message.style.display = 'block'; 
                  } else {
                    currentPosition += getRandomSpeed();
      animal.style.left = currentPosition + 'px';
    }
  }

  function getRandomDelay() {
    return Math.floor(Math.random() * (1000 - 500 + 1)) + 500;
  }

  function getRandomSpeed() {
    return Math.floor(Math.random() * (20 - 5 + 1)) + 5;
  }
}
