import React from "react";

export const Number = (props) => {
    return (
        <>
            <div className="border rounded-5 d-flex justify-content-center align-items-center" style={{ width: "10rem", height: "18rem" }}>
                <p className="text-light" style={{ fontSize: "8rem" }}>{props.valor}</p>
            </div>
        </>
    )
}