import React from 'react';
import { greet } from 'rust-tsx';

function App() {
  return (
    <div>
        <h1>
            This is an example TSX App using WASM generated from Rust
        </h1>
        <button onClick={() => greet("user")}>
            Greet
        </button>
    </div>
  );
}

export default App;
