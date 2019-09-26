function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name)+1} in line.`;
}

function nowServing(katzDeliLine) {
  let firstPerson = katzDeliLine[0];
  if(firstPerson === undefined) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + firstPerson + '.';
  }

  katzDeliLine.unshift();
  return katzDeliLine;
}
