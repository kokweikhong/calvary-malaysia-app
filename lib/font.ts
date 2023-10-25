import localFont from "next/font/local";

export const montserrat = localFont({
  variable: "--font-montserrat",
  src: [
    {
      path: "../public/fonts/Montserrat-VariableFont_wght.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/Montserrat-VariableFont_wght.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/Montserrat-VariableFont_wght.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Montserrat-VariableFont_wght.ttf",
      weight: "600",
      style: "normal",
    },
  ],
});

export const inter = localFont({
  variable: "--font-inter",
  src: [
    {
      path: "../public/fonts/Inter-VariableFont_slnt,wght.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/Inter-VariableFont_slnt,wght.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/Inter-VariableFont_slnt,wght.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Inter-VariableFont_slnt,wght.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Inter-VariableFont_slnt,wght.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Inter-VariableFont_slnt,wght.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Inter-VariableFont_slnt,wght.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Inter-VariableFont_slnt,wght.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/Inter-VariableFont_slnt,wght.ttf",
      weight: "100",
      style: "normal",
    },
  ],
});
