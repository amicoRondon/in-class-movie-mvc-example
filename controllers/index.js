function sayHello(req, woot) {
  woot.send('Hello World WERKJSDFKJSD!')
};

module.exports = {
  sayHello: sayHello
}
