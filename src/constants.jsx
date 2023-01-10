export const BLACK_COLOR = "#322D2D";
export const ORANGE_COLOR = "#F16416";

export const scrollToElement = (id) => {
  document.getElementById(id).scrollIntoView({ behavior: "smooth", block: "start" });
};
