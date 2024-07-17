import ILang from "@/types/ILang";
import { tatuInha, tdiu, webster, westminster } from "@/assets/logos";
import {
  slider1,
  slider1Min,
  slider2,
  slider2Min,
  slider3,
  slider3Min,
  slider4,
  slider4Min,
  slider5,
  slider5Min,
  slider6,
  slider6Min,
  slider7,
  slider7Min,
} from "@/assets/images";
import ITeam from "@/types/ITeam";
import ICarouselImage from "@/types/ICarouselImage";

export const navbarAnchor = [
  {
    key: "target",
    href: "#target",
    title: "Цель",
  },
  {
    key: "about",
    href: "#about",
    title: "О турнире",
  },
  {
    key: "results",
    href: "#results",
    title: "Итоги",
  },
  {
    key: "albom",
    href: "#albom",
    title: "Фотоальбом",
  },
];

export const languageSelect: ILang[] = [
  { value: "ru", label: "Русский" },
  { value: "uz", label: "Uzbek tili" },
  { value: "en", label: "English" },
];

export const teamObj1: ITeam = {
  name: "Webster",
  university: "Webster University",
  logo: webster,
};

export const teamObj2: ITeam = {
  name: "WIUT",
  university: "WIUT",
  logo: westminster,
};

export const teamObj3: ITeam = {
  name: ["Rakuzan", "INHA"],
  university: ["TATU", "INHA"],
  logo: tatuInha,
};

export const teamObj4: ITeam = {
  name: "TDIU",
  university: "TDIU",
  logo: tdiu,
};

export const carouselPrizeFundImages: ICarouselImage[] = [
  {
    high: slider1,
    low: slider1Min,
  },
  {
    high: slider2,
    low: slider2Min,
  },
  {
    high: slider3,
    low: slider3Min,
  },
  {
    high: slider4,
    low: slider4Min,
  },
  {
    high: slider5,
    low: slider5Min,
  },
  {
    high: slider6,
    low: slider6Min,
  },
  {
    high: slider7,
    low: slider7Min,
  },
];
