import React from "react";

//Components
import { Dashboard } from "./components/dashboard";

function App() {
  const [address, setAddress] = React.useState(
    "narfn77NVRRfa4frg1KZykyFrJ1f9eMGnzXeMn2ja1X"
  );
  const [nft, setNft] = React.useState(null);

  return (
    <main className="bg-black text-white min-h-screen ">
      {/* task1 */}
      <Dashboard />
      {/* task2 */}
    </main>
  );
}

export default App;
