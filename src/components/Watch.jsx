import React from "react";
import image4 from "../images/3.webp";
import "./Watch.css";
import ReactPlayer from "react-player";

export default function Watch() {

    const data = [
        {
            i: "1",
            url: "https://youtu.be/Nl4xGT_1BwE",
        },
        {
            i: "2",
            url: "https://youtu.be/ZYFTvhsNRK0",
        },
        {
            i: "3",
            url: "https://youtu.be/YLeNkhRLV7I",
        },
        {
            i: "4",
            url: "https://youtu.be/X4BwVHKkm3w",
        },
        {
            i: "5",
            url: "https://youtu.be/u7kwHR0JlGU",
        },
        {
            i: "6",
            url: "https://youtu.be/OOdbSNpfYGc",
        },
        {
            i: "7",
            url: "https://youtu.be/zxfQqt7ms_Q",
        },
        {
            i: "8",
            url: "https://youtu.be/3AcZbAV2eys",
        },
        {
            i: "9",
            url: "https://youtu.be/1LrP0KeQh0U",
        },
        {
            i: "10",
            url: "https://youtu.be/ZcHSYS-efLo",
        },
        {
            i: "11",
            url: "https://youtu.be/dro7GUWeRfg",
        },
        {
            i: "12",
            url: "https://youtu.be/CrS0BEGfAgo",
        },
        
        {
            i: "12",
            url: "https://youtu.be/NrvzVOu53pk",
        }
       
    ]
    return (
        <>
            <section style={{ width: "90%", margin: "auto" }}>

                <section className="figure">
                    <img src={image4} style={{ width: "80%", margin: "auto" }} />

                    <div className="discription" >
                        <h2>discription</h2>
                        <p> This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the mussels</p>
                        <h3>Containts</h3>
                        <p>This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the mussels</p>
                    </div>
                </section>
                <h2 style={{ width: "100%", textAlign: "center" }}>Episodes</h2>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", margin: "auto" }}>
                    {data.map((value) => {
                        return (
                            <>
                                <div style={{ display: "flex", flexDirection: "column", margin: "20px" }}>
                                    <ReactPlayer controls style={{ maxWidth: "300px" }} url={value.url} />
                                    <b>episode{value.i}</b>
                                </div>
                            </>
                        )
                    })}
                </div>

            </section>
        </>
    )
}
