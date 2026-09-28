import { Poppins, Source_Sans_3 } from "next/font/google";

export const sourceSans = Source_Sans_3({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});
