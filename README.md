# rust-wasm-calculator
A simple calculator with logic written in Rust, compiled to Wasm, and rendered with React.js

# [deployed site here](https://rust-calculator.netlify.com/)

Instructions to run locally

You need the rust toolchain first: [https://www.rust-lang.org/tools/install](https://www.rust-lang.org/tools/install)

You need [wasm-pack](https://rustwasm.github.io/wasm-pack/installer/)

1. Clone repo.
2. cd into cloned directory
3. `cd lib && wasm-pack build`
4. `sudo npm link`
5. `cd ../app && sudo npm link rust-wasm-react-calculator`
6. `npm i && npm run start`