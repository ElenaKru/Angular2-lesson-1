# NgLessonsProject

## CLI 
### Install
- Check node version: `node –v`
- Install Angular CLI: `npm install –g @angular/cli`

### Create app
- Create new Angular app without npm packages: `ng new ngtest`

#### Create app Flags
- Dry-run before creating app: `ng new my-app --dry-run`
- Set styles extension: `ng new my-app --style less`
- Set the default selector prefix: `ng new my-app --prefix ma`
- Don’t add the project to git: `ng new my-app --skip-git`
- Don’t generate spec files: `ng new my-app --skip-tests`
- Add a default routing module: `ng new my-app --routing`

### Lint
- Lint the TypeScript code: `ng lint`
- Lint and format the output: `ng lint --format stylish`
- Lint and attempt to fix all problems: `ng lint --fix`

### Component
- Generate component: `ng generate component sample-component`
> Using alias: `ng g c sample-component`

#### Component flags
- Don’t create a folder: `ng g c sample-component --flat`
- Put the template in the .ts file: `ng g c sample-component --inline-template`
- Put styles in the .ts file: `ng g c sample-component --inline-style`
- Prefix the component with my-: `ng g c sample-component --prefix my`
- Don’t create a spec file: `ng g c sample-component --spec false`

### Service
- Generate service: `ng generate service sample-service`
> Using alias: `ng g s sample-service`

### Class
- Generate class: `ng generate class sample-class`
> Using alias: `ng g cl sample-class`

### Directive
- Generate directive: `ng generate directive sample-directive`
> Using alias: `ng g d sample-directive`

### Pipe
- Generate pipe: `ng generate pipe sample-pipe`
> Using alias: `ng g p sample-pipe`

### Interface
- Generate interface: `ng generate interface sample-interface`
> Using alias: `ng g i sample-interface`

### Enum
- Generate enum: `ng generate enum sample-enum`
> Using alias: `ng g e sample-enum`

### Module
- Generate module: `ng generate module sample-module`
> Using alias: `ng g m sample-module`

#### Module flags
- Generate .module.spec.ts: `ng g m sample-module --spec true`

## Additional resources
- How to bring `jQuery` into `Angular2`: https://github.com/deebloo/JQUERY-TOKEN

## Angular default documents
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
