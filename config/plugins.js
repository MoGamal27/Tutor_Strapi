module.exports = ({ env }) => ({
    "github-publish": {
      owner: "MoGamal27", // The GitHub organisation or user
      repo: "Tutor_Strapi", // The name of the repository
      workflow_id: "rebuild.yml", // The workflow_id or filename
      token: env("GITHUB_TOKEN"), // The GitHub personal access token with access to trigger workflows and view build status
      branch: "master", // The branch the workflow should be triggered on
      inputs: {
        // Optional inputs to pass through to the GitHub workflow
        some_input: "Some value",
        some_other_input: "Some other value",
      },
    },
  });
