const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try {
    const token = core.getInput("github-token");
    if (token) {
      core.info(`Has token ${token[0]}...`);
    }
    else {
      core.info("No token");
    }
    const client = github.getOctokit(token);
    const app = new App(config, client);
    await app.handleEvent();
  } catch (err) {
    core.setFailed(err);
  }
}

class App {
  constructor(config, client) {
    this.config = config;
    this.client = client;
  }

  async handleEvent() {
    const payload = github.context.payload;

    // if (payload.sender.type === 'Bot') {
    //   return;
    // }

    core.info(payload);
  }
}

run();