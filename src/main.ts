import { AnchorProvider, Program } from "@coral-xyz/anchor";
import type { AnchorHelloSol } from "./anchor_hello_sol";
import idl from "./anchor_hello_sol.json" assert { type: "json" };

console.log("Hello fren, I'm a client!");

const provider = AnchorProvider.env();
const program = new Program(idl as AnchorHelloSol, provider);

const txHash = await program.methods.initialize().rpc();
console.log(txHash);

// solana confirm -v 4ymHXvPvVyTokXoGxGwSCj2MPodiJvFk4Ds455g8hKXcbvZ5pNUEFVWcmHarp4ZvUknyJtFJ8cHTTJxddccQ7zJr

/*
https://explorer.solana.com/tx/4ymHXvPvVyTokXoGxGwSCj2MPodiJvFk4Ds455g8hKXcbvZ5pNUEFVWcmHarp4ZvUknyJtFJ8cHTTJxddccQ7zJr?cluster=devnet

RPC URL: https://api.devnet.solana.com
Default Signer Path: /Users/artur/.config/solana/id.json
Commitment: confirmed

Transaction executed in slot 353677547:
  Block Time: 2025-01-12T22:21:22+01:00
  Version: legacy
  Recent Blockhash: 4WhzbQQRiwBpgigFCA19BrfYPW145mSmW4814T9eGzxb
  Signature 0: 4ymHXvPvVyTokXoGxGwSCj2MPodiJvFk4Ds455g8hKXcbvZ5pNUEFVWcmHarp4ZvUknyJtFJ8cHTTJxddccQ7zJr
  Account 0: srw- DA9yyRbKNRXiKEBNPxWUutqTNwfq8rnR12LANcNCwW2v (fee payer)
  Account 1: -r-x 5mQNgW8qb9sqw9jVmewdoZMgcjUha7WZ2BWVmHbaqgze
  Instruction 0
    Program:   5mQNgW8qb9sqw9jVmewdoZMgcjUha7WZ2BWVmHbaqgze (1)
    Data: [175, 175, 109, 31, 13, 152, 155, 237]
  Status: Ok
    Fee: ◎0.000005
    Account 0 balance: ◎0.15462444 -> ◎0.15461944
    Account 1 balance: ◎0.00114144
  Compute Units Consumed: 11958
  Log Messages:
    Program 5mQNgW8qb9sqw9jVmewdoZMgcjUha7WZ2BWVmHbaqgze invoke [1]
    Program log: Instruction: Initialize
    Program log: Hello fren, program_id=5mQNgW8qb9sqw9jVmewdoZMgcjUha7WZ2BWVmHbaqgze
    Program 5mQNgW8qb9sqw9jVmewdoZMgcjUha7WZ2BWVmHbaqgze consumed 11958 of 200000 compute units
    Program 5mQNgW8qb9sqw9jVmewdoZMgcjUha7WZ2BWVmHbaqgze success

Finalized
*/