import { useAppSelector } from "@/lib/hooks";
import Image from "next/image";
import ITeam from "@/types/ITeam"
import { Card, Col, Divider, Row } from "antd";
import { csLogo, dotaLogo } from "@/assets/logos";
import { bronzeMedalCS, bronzeMedalDota, goldMedalCS, goldMedalDota, silverMedalCS, silverMedalDota } from "@/assets/icons";

type GameType = "cs" | "dota";

interface TeamProps {
    [key: string]: ITeam[] | undefined;
}

const createWinners = ({ gameName }: { gameName: GameType }) => {
    const Winners = ({ [`${gameName}Teams`]: teams }: TeamProps) => {
        const lang = useAppSelector(state => state.languageSlice.value);

        const addQuote = (str: string) => {
            return `«${str}»`;
        }

        const toNormalArray = (val: string | string[]) => {
            if (Array.isArray(val)) return val;
            return [val];
        }

        const connectionWord = lang === "ru" ? " и " : lang === "en" ? " and " : " va ";

        const getMedal = (place: number, gameName: GameType = "dota") => {
            if (gameName === "dota") {
                switch (place + 1) {
                    case 1: return goldMedalDota;
                    case 2: return silverMedalDota;
                    default: return bronzeMedalDota;
                }
            } else {
                switch (place + 1) {
                    case 1: return goldMedalCS;
                    case 2: return silverMedalCS;
                    default: return bronzeMedalCS;
                }
            }
        }

        return (
            <Card className={`winners__card ${gameName}-card`}>
                <div className="card__cup-wrapper">
                    <Image className="game-image" src={gameName === "dota" ? dotaLogo : csLogo} alt="cup image" />
                </div>
                <div className="card__winners-info">
                    {
                        teams?.map((team, index) => (
                            <>
                                <Row key={index}>
                                    <Col className="col__medal">
                                        <Image src={getMedal(index, gameName)} alt="medal image" />
                                    </Col>
                                    <Col className="col__team-info">
                                        <h3>Команда {toNormalArray(team.name).map(name => addQuote(name)).join(connectionWord)}</h3>
                                        <p>Представители {toNormalArray(team.university).join(connectionWord)}</p>
                                    </Col>
                                    <Col className="col__team-image">
                                        <Image src={team.logo} alt="team image" />
                                    </Col>
                                </Row>
                                {index !== teams.length - 1 && <Divider />}
                            </>
                        ))
                    }

                </div>
            </Card>
        )
    }
    return Winners;
}

export default createWinners;

export const WinnersDota = createWinners({ gameName: "dota" });
export const WinnersCS = createWinners({ gameName: "cs" });

