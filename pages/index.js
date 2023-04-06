import { Metaplex } from "@metaplex-foundation/js";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
import { useEffect, useState } from "react";
import Card from "../Components/Card";
const connection = new Connection(clusterApiUrl("devnet"));
const mx = Metaplex.make(connection);
export default function Home() {
  // const [address, setAddress] = useState(
  //   "narfn77NVRRfa4frg1KZykyFrJ1f9eMGnzXeMn2ja1X"
  // );

  const [address, setAddress] = useState(
    "EAqjUWVX2m9fdfGNBzTY5zSiid1Sb9V3x6EL8ssZBTkw"
  );

  const [nftList, setNftList] = useState(null);
  const fetchNFTs = async () => {
    try {
      const list = await mx
        .nfts()
        .findAllByOwner({ owner: new PublicKey(address) });
      setNftList(list);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    fetchNFTs();
  }, []);
  console.log(nftList);
  return (
    <div className="flex gap-2">
      {nftList?.length > 0 &&
        nftList.map((nft) => {
          return (
            <Card
              title={nft.name}
              imgURL={nft.uri}
              mintAdress={nft?.mintAddress?._bn?.words}
            />
          );
        })}
    </div>
  );
}
