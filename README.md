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

## Using Classes and Definitions in an Application.css
You can re-use the colour definitions or classes from the `hochfrequenz.css` file by importing it into your applications CSS file:
```css
@import url("/path/under/which/your/application/serves/hochfrequenz.css");
/* ... */
.my_class {
  background-color: var(--grell-gruen); /* use the colour-definition from hochfrequenz.css here */
}
```
Note that trailing `;` is important.

## Fonts
A main reason to use this submodule may be, that it comes with the `.ttf` font files for both Roboto Condensed and Yanone Kaffeesatz.
Include the fonts like this:
```css
@font-face {
    font-family: "Roboto";
    src: url(path/to/where/your/application/exposes/the/Roboto-Regular.ttf);
}
@font-face {
    font-family: "Yanone Kaffeesatz";
    src: url(path/to/where/your/application/exposes/the/YanoneKaffeesatz-Regular.ttf);
}
@font-face {
    font-family: "Roboto Condensed";
    src: url(path/to/where/your/application/exposes/the/Roboto_Condensed-Regular.ttf);
}
```
