import localFont from "next/font/local";

export const nanumGothic = localFont({
  src: [
    {
      path: "../fonts/NanumGothic-Bold.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../fonts/NanumGothic-ExtraBold.ttf",
      weight: "800",
      style: "extraBold",
    },
    {
      path: "../fonts/NanumGothic-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});
