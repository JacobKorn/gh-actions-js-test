const core = require('@actions/core');
const github = require('@actions/github');

try {
  const nameToGreet = core.getInput('who-to-greet');
  const hello = `Hello ${nameToGreet}! JS ACTION YOLO`
  console.log(hello);

  const time = (new Date()).toTimeString();
  core.setOutput("time", time);

  const message = `Message from hello js (${ hello })`;
  core.setOutput("message", message);

  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);

} catch (error) {
  core.setFailed(error.message);
}
