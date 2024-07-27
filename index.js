/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
export default (app) => {
  // Your code here
  app.log.info("Yay, the app was loaded!");

  app.on("repository_ruleset.created", async (context) => {
    const issueComment = context.issue({
      body: "Thanks for opening this issue!",
    });
    //return context.octokit.issues.createComment(issueComment);
  });
  app.on("repository_ruleset.edited", async (context) => {
    const issueComment = context.issue({
      body: "Thanks for opening this issue!",
    });
    //return context.octokit.issues.createComment(issueComment);
  });
  app.on("repository_ruleset.deleted", async (context) => {
    const issueComment = context.issue({
      body: "Thanks for opening this issue!",
    });
    //return context.octokit.issues.createComment(issueComment);
  });
  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
