/******/ /* webpack/runtime/compat */
/******/ 
/******/ if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = new URL('.', import.meta.url).pathname.slice(import.meta.url.match(/^file:\/\/\/\w:/) ? 1 : 0, -1) + "/";
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
const core = require("@actions/core");
const fetch = require("node-fetch");

const versionName = core.getInput("version_name");
const projectKey = core.getInput("project_key");
const jira_token = core.getInput("jira_token");
const domain_name = core.getInput("domain_name");

const versionsResponse = fetch(`https://${domain_name}.atlassian.net/rest/api/3/${projectKey}/versions`, {
  headers: {
    Authorization: `Basic ${Buffer.from(`${jira_token}`).toString("base64")}`,
    Accept: "application/json",
  },
});

const versions = versionsResponse.json();
const target = versions.find((item) => item.name === versionName);

const bodyData = `{
  "releaseDate": ${new Date()},
  "released": true
}`;
const updateResponse = fetch(`https://${domain_name}.atlassian.net/rest/api/3/versions/${target.id}`, {
  headers: {
    Authorization: `Basic ${Buffer.from(`${jira_token}`).toString("base64")}`,
    Accept: "application/json",
    "Content-type": "application/json",
  },
  body: bodyData,
});

core.setOutput("status", updateResponse.status);

