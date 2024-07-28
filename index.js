import fs from 'fs';
import path from 'path'
import process from 'process'
import jsonfile from 'jsonfile'

export default (app) => {
  app.log.info("GitKompliance was loaded successfully!");
  app.on('label.created', async (context) => {
    var baseDIr = 'rules/repo-ruleset'
    fs.readdir(baseDIr, function (err, files) {
      if (err) {
        console.error("Could not list the directory.", err);
        process.exit(1);
      }
      files.forEach(function (file, index) {
        var filePath = path.join(baseDIr, file);
        jsonfile
          .readFile(filePath)
          .then((data) => {
            context.octokit.rest.repos.createRepoRuleset(data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
    })

  });
};
