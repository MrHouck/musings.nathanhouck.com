import { DM_Mono, Inter, Merriweather, Ubuntu } from "next/font/google";
export const DM_MONO_FAMILY = DM_Mono({ weight: ["300", "400", "500"], subsets: ["latin"] });

export const FAMILY = Ubuntu({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"],
  });
export const MERRIWEATHER_FAMILY = Merriweather({
    subsets: ["latin"],
    weight: ["300", "400", "700"],
  });