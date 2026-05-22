import { useEffect, useRef, useState } from "react";

export default function useInView({ threshold = 0.15 } = {}) {
    const ref = useRef();
    const [vis, setVis] = useState(false);

    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) setVis(true);
        }, { threshold });

        if (ref.current) obs.observe(ref.current);

        return () => obs.disconnect();
    }, []);

    return [ref, vis];
}