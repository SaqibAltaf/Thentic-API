import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { THENTIC_API_KEY } from "../../config";
import ListWallet from "../list-wallet";
import Swal from "sweetalert2/dist/sweetalert2.js";

export default function CreateWallet() {
    const [state, setState] = useState({ privateKey: "", publicKey: "" });
    const createWalletAPI = async () => {
        const creationWallet = await fetch(
            "https://thentic.tech/api/wallets/new",
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ key: THENTIC_API_KEY }),
            }
        ).then((res) => res.json());

        if (creationWallet) {
            setState({
                privateKey: creationWallet.private_key,
                publicKey: creationWallet.wallet,
            });
            Swal.fire("Congrats...", "Wallet Created!", "success");
        }
    };
    return (
        <Container>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                }}
            >
                <div style={{ marginTop: 10, marginBottom: 40 }}>
                    <h3>CreateWallet</h3>
                    <Button onClick={createWalletAPI}>Create Wallet</Button>
                    {state.privateKey ? (
                        <p>Private Key: {state.privateKey}</p>
                    ) : null}
                    {state.publicKey ? (
                        <p>Public Key: {state.publicKey}</p>
                    ) : null}
                </div>

                <div style={{ marginTop: 10, marginBottom: 40 }}>
                    <ListWallet />
                </div>
            </div>
        </Container>
    );
}
