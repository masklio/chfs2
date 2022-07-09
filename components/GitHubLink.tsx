import styles from "../../styles/Thirdweb.module.css";
import React from "react";

export default function ThirdwebGuideFooter() {
  const url1 = "https://bitkeep.com/";
  const url2 = "https://element.market/collections/chfs";
  const url3 = "https://twitter.com/chinese_figure";
  const url4 = "https://discord.com/invite/RxXeuJkpJm";
  return (
    <>
      <div
        style={{
          position: "fixed",
          bottom: -120,
          right: -80,
          height: 300,
          width: 150,
          border: "1px solid #eaeaea",
          transform: "rotate(45deg)",
          backgroundColor: " #262935",
          opacity: 0.2,
          cursor: "pointer",
        }}
        role="button"
        onClick={() => window.open(url1, "_blank")}
      />

      <div
        style={{
          position: "fixed",
          bottom: 14,
          right: 18,
        }}
      >
        <img
          src={"/Bitkeep.png"}
          width={40}
          height={40}
          role="button"
          style={{ cursor: "pointer" }}
          onClick={() => window.open(url1, "_blank")}
        />
      </div>
      
      <div
        style={{
          position: "fixed",
          bottom: -120,
          left: -80,
          height: 300,
          width: 150,
          border: "1px solid #eaeaea",
          transform: "rotate(135deg)",
          backgroundColor: " #262935",
          opacity: 0.2,
          cursor: "pointer",
        }}
        role="button"
        onClick={() => window.open(url2, "_blank")}
      />

      <div
        style={{
          position: "fixed",
          bottom: 14,
          left: 18,
        }}
      >
        <img
          src={"/element.png"}
          width={40}
          height={40}
          role="button"
          style={{ cursor: "pointer" }}
          onClick={() => window.open(url2, "_blank")}
        />
      </div>
            
      <div
        style={{
          position: "fixed",
          bottom: 450,
          right: 20,
        }}
      >
        <img
          src={"/Twitter.png"}
          width={30}
          height={30}
          role="button"
          style={{ cursor: "pointer" }}
          onClick={() => window.open(url3, "_blank")}
        />
      </div>

      <div
        style={{
          position: "fixed",
          bottom: 500,
          right: 20,
        }}
      >
        <img
          src={"/Discord.png"}
          width={30}
          height={30}
          role="button"
          style={{ cursor: "pointer" }}
          onClick={() => window.open(url4, "_blank")}
        />
      </div>

  

    </>
  );
}
