const MIN_PORT_NUMBER = 1025;
const MAX_PORT_NUMBER = 60000;

function randomPort() : number {
  return Math.random() * (MAX_PORT_NUMBER - MIN_PORT_NUMBER) + MIN_PORT_NUMBER;
}

export { randomPort };