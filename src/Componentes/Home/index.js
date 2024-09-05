import React from "react";

import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function Home() {
  return (
    <div className="flex flex-col justify-between h-[93vh]">
      <WalletMultiButton />
    </div>
  );
}
