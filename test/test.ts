const parser = require("../src/Parser");
parser.dependencyTreeParser(1)
setTimeout(async() => {
  console.log(parser.getDependenceTreeMap());
  let res = await parser.saveDependencyTreeJson('./test');
  console.log(res);
}, 1000);
