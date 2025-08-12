# commonInterfaceReactComponent

## install

```
git submodule add git@github.com:BloomScheme/commonInterfaceReactComponent.git some/place/to/put/commonInterfaceReactComponent

npm i -D @types/history @types/is-valid-path @types/mousetrap @types/react-linkify @types/uuid css-loader style-loader @types/linkify-it

npm i -S @mui/material @mui/icons-material @emotion/react @mui/styled-engine-sc @emotion/styled styled-components history is-valid-path mousetrap react-linkify typeface-roboto typestyle undux uuid linkify-it tlds fast-sort react-paginate

```

## setup

```bash
git submodule update --init --recursive
```

## update

```
git submodule update -i
```

## remove

```bash
git submodule deinit -f some/place/to/put/commonInterfaceReactComponent
git rm -f some/place/to/put/commonInterfaceReactComponent
```

## settings

### tsconfig.json

```
{
  "compilerOptions": {
    "paths": {
      "@commonInterface/*":["./some/place/to/put/commonInterfaceReactComponent/*"],
    },
}
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
