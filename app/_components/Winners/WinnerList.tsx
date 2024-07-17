import ITeam from "@/types/ITeam"
import React, { ReactElement } from "react"

const WinnerList = ({
    children,
    teams,
    type
}: {
    children: ReactElement | ReactElement[],
    teams: ITeam[],
    type: "dotaTeams" | "csTeams"
}) => {
    return (
        React.Children.map(children, Component => {
            return React.cloneElement(Component, { [type]: teams })
        })
    )
}

export default WinnerList