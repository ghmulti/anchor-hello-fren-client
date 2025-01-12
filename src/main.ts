import { AnchorProvider, Program } from "@coral-xyz/anchor";
import type { AnchorHelloSol } from "./anchor_hello_sol";
import idl from "./anchor_hello_sol.json" assert { type: "json" };

console.log("Hello fren, I'm a client!");

const provider = AnchorProvider.env();
const program = new Program(idl as AnchorHelloSol, provider);

const txHash = await program.methods.initialize().rpc();
console.log(txHash);

// solana confirm -v 4ymHXvPvVyTokXoGxGwSCj2MPodiJvFk4Ds455g8hKXcbvZ5pNUEFVWcmHarp4ZvUknyJtFJ8cHTTJxddccQ7zJr