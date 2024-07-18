import { useAppSelector } from "@/lib/hooks";
import "./Winners.scss";
import { ReactElement } from "react";
import translations from "@/locales/translations";

const Winners = ({ children }: { children: ReactElement | ReactElement[] }) => {
    const activeLang = useAppSelector(state => state.languageSlice);
    const navbarAnchor = translations[activeLang.value].Navbar.anchors;
    return (
        <section
            className="page__winners pd-h"
            id={navbarAnchor[2].href.slice(1)}
        >
            {children}
        </section>
    )
}

export default Winners