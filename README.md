# web-cli
An awesome cli.

* ### install

  `npm i -g @evolify/cli`

* ### usage
  1. Create a project.
  ```shell
  z create <app-name>
  cd <app-name>
  yarn dev	# default run at 8080 port
  ```

  2. Run a single component without any configuration.(Now for react only, vue will be supported soon.). React hot loader is built in.
  ```shell
  z serve <path-to-component>
  ```
