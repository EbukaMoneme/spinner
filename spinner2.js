let shapes = ['|', '/', '-', '\\', '|']
  let time = 100;
  for (let shape of shapes) {
    setTimeout(() => {
      process.stdout.write('\r' + String(shape) + '      ');
    }, time);
    time += 200;
}
