# companystylesheet - css 😉

This repository contains CSS which can be used to style things with the Hochfrequenz Corporate Design (aka `hochfrequenz.css`).
Add this repository as a submodule to your frontend project.
Don't forget to checkout submodules in your CI/CD.

```yaml
- uses: actions/checkout@v4
  with:
    ref: ${{ github.event.workflow_run.head_branch }}
    token: ${{ secrets.CSS_SUBMODULE_ACCESS_TOKEN }} # personal access token (PAT) with repo scope
    # https://github.com/Hochfrequenz/your-repository/settings/secrets/actions/CSS_SUBMODULE_ACCESS_TOKEN
    submodules: "recursive"
```
