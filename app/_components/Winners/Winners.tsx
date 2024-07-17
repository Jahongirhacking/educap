import { navbarAnchor } from "@/utils/staticVariables";
import "./Winners.scss";
import { ReactElement } from "react";

const Winners = ({ children }: { children: ReactElement | ReactElement[] }) => {
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