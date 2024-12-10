"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function AOSWrapper({ children }) {
    useEffect(() => {
        AOS.init({
            duration: 1200, // Animation duration
            easing: "ease-in-out", // Easing function
            once: false,
            offset: 0,
        });
    }, []);

    return <>{children}</>; // Render children with AOS applied
}
