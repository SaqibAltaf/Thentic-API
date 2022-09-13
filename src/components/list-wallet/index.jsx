import React, { useEffect, useState } from "react";
import { THENTIC_API_KEY } from "../../config";

export default function ListWallet() {
    const [state, setState] = useState([]);
    const getListWallet = async () => {
        const listWallet = await fetch(
            "https://thentic.tech/api/wallets/all?key=" + THENTIC_API_KEY,
            {
                method: "GET",
            }
        ).then((res) => res.json());
        setState(listWallet.wallets);
    };

    useEffect(() => {
        getListWallet();
    }, []);
    return (
        <div style={{ height: "20rem", overflowY: "scroll" }}>
            {state.map((val, key) => {
                return (
                    <p>
                        {key + 1} - {val}
                    </p>
                );
            })}
        </div>
    );
}
