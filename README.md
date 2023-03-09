# Rust-tsx example

This is an example project detailing a minimal projest structure to use rust that has been compiled to WASM inside a typescript project.

## What I did

### Rust

I ran `cargo install wasm-pack` to gain the `wasm-pack` command.

I created a new library using `cargo init --lib` in `/rust-wasm` which I will use to expose rust functions.

I added `wasm_bindgen` to my cargo dependencies so I can use the `#[wasm_bindgen]` macro.

After using `#[wasm_bindgen]` to expose rust functions and define external functions I ran `wasm-pack build --target web` to the package.

### Node

I created a simple typescript react project from a template in `/tsx-frontend`.

I then linked to the generated package using `yarn add link:./../rust-wasm/pkg`.

I then modified the startup in `index.tsx` to call `inti` before rendering (`init().then(() => ...)`).

### Build

The only change to normal building is that before running `yarn start` or `yarn build` I need to run `wasm-pack build --target web`.

## References

Tutorial : https://developer.mozilla.org/en-US/docs/WebAssembly/Rust_to_wasm

How to add local packages : https://stackoverflow.com/a/71727770

## Future plans

It is my intention to have this example demonstrate more advanced interactions including things like threading.
