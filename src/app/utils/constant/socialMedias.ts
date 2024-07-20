export const EMAIL: string = "regyu.dev@gmail.com";

export const SOCIAL_MEDIAS: Array<{name: string, url: string}> = [
  {name: "LinkedIn", url: "https://linkedin.com/in/reg-yu"},
  {name: "GitHub", url: "https://github.com/rgrs412"},
  {name: "Discord", url: "https://discord.gg/dcdH99uyqh"},
  {name: "Email", url: `mailto:${EMAIL}`},
  {name: "Resume", url: "/Reg_Yu_Resume.pdf"},
  {name: "", url: ""},
  {name: "", url: ""},
  {name: "", url: ""},
  {name: "", url: ""}
];

export function getUrlByName(name: string): string | undefined {
  const socialMedia = SOCIAL_MEDIAS.find((media: { name: string; }) => media.name === name);
  return socialMedia ? socialMedia.url : undefined;
}