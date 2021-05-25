const wakeUp = () => 'Acordando!!!';
const breakfast = () => 'Bora tomar cafe!!!';
const sleep = () => 'Partiu dormir!!!';

const doingThings = (action) => {
  console.log(action());
}

doingThings(wakeUp);
doingThings(breakfast);
doingThings(sleep);
