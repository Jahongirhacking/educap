import ILang from "@/types/ILang";
import { tatuInha, tdiu, webster, westminster } from "@/assets/logos";
import {
  gallery1,
  gallery2,
  gallery3,
  slider1,
  slider2,
  slider3,
  slider4,
  slider5,
  slider6,
} from "@/assets/images";
import ITeam from "@/types/ITeam";
import { StaticImageData } from "next/image";

export const languageSelect: ILang[] = [
  { value: "ru", label: "Русский" },
  { value: "uz", label: "O‘zbek tili" },
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

export const carouselPrizeFundImages: StaticImageData[] = [
  slider1,
  slider2,
  slider3,
  slider4,
  slider5,
  slider6,
];

export const carouselGalleryImages: StaticImageData[] = [
  gallery1,
  gallery2,
  gallery3,
  slider1,
  slider2,
  slider3,
  slider4,
  slider5,
];
