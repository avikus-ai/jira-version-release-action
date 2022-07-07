# JIRA version release action
[![GitHub version](https://badge.fury.io/gh/avikus-ai%2Fjira-version-release-action.svg)](https://badge.fury.io/gh/avikus-ai%2Fjira-version-release-action) 

Github Action for JIRA version release.

## Usage
### Pre-requisites

Create a workflow `.yml` file in your `.github/workflows` directory. An [example workflow](#example-workflow---create-a-release) is available below. For more information, reference the GitHub Help Documentation for [Creating a workflow file](https://help.github.com/en/articles/configuring-a-workflow#creating-a-workflow-file).

### Inputs

- `version_name`: The name of the version for this release
- `project_key`: The key of the project where version exist
- `jira_token`: Jira Token
- `domain_name`: The name of your Jira domain
- `release_date`: The date of version release. Default: Current date

### Outputs

- `status`: The version update response status

### Example workflow - release version

```yaml
name: Jira Release

on:
  push:
    tags:
      - "v*"

jobs:
  version-release:
    name: version-release
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2

      - name: release jira version
        uses: avikus-ai/jira-version-release-action@v0.0.1
        with:
          version_name: "jira-version-name"
          project_key: "jira-project-key"
          jira_token: "jira-token"
          domain_name: "jira-domain-name"
          release_date: "2022-02-02"
```

## License
The scripts and documentation in this project are released under the MIT License
