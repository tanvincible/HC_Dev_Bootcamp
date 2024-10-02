"use client";

import dynamic from "next/dynamic";

const Excalidraw = dynamic(() => import("@excalidraw/excalidraw").then(mod => mod.Excalidraw), {
    ssr: false, // Disable server-side rendering
    loading: () => <p>Loading Excalidraw...</p>, // Optional loading fallback
});

const ExcalidrawWrapper = () => {
    return (
        <div style={{ height: "92.5vh", width: "100%" }}>
            <Excalidraw />
        </div>
    );
};

export default ExcalidrawWrapper;