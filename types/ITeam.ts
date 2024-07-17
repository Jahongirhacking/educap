import { StaticImageData } from "next/image";

export default interface ITeam {
  name: string | string[];
  university: string | string[];
  logo: StaticImageData;
}
