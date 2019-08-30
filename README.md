# react-examples

React + Typescript examples based on the [React Quickly book by Azat Mardan](http://reactquickly.co/) [Manning, 2017].

## Installation

1. Clone this repository
```
git clone https://github.com/aegomez/react-examples.git <directory>
```

2. Install [Node.js](https://nodejs.org/)

3. Install [TypeScript](https://www.typescriptlang.org/)
```sh
# remove -g for a local install
npm install -g typescript
```

4. Install common dependencies at project root directory
```
npm install
```

## Usage

Most chapter directories include scripts for the following tasks:
- Manually check typing with `tsc`:
```
npm run check-types
```

- Build js files via Babel:
```
npm run build

npm run build-app1
npm run build-app2
```
> In Windows try `npm run build*-win` instead, to avoid some invalid path syntaxes such as `'../*'`. Alternatively, configure [npm's script-shell](https://docs.npmjs.com/misc/config#script-shell) option to use a compatible shell (git-bash) when calling `npm run-script`, instead of cmd.

- Run a small static server:
```
npm start
```

Check the individual directories for more details.

## License

[MIT](LICENSE)