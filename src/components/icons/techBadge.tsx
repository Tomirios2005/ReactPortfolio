import type { IconType } from "react-icons";
import { Code } from "lucide-react";
import {
  SiAngular,
  SiAstro,
  SiDocker,
  SiExpress,
  SiFigma,
  SiJavascript,
  SiJsonwebtokens,
  SiMercadopago,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiOpenjdk,
  SiPostgresql,
  SiReact,
  SiSpringboot,
  SiSupabase,
  SiTypescript,
} from "react-icons/si";

const badge = (Icon: IconType, color: string) => (
  <Icon size={12} color={color} className="inline-block mr-1 shrink-0" aria-hidden />
);

export function techBadgeIcon(tech: string) {
  const name = tech.toLowerCase();
  if (name.includes("react")) return badge(SiReact, "#61DAFB");
  if (name.includes("typescript")) return badge(SiTypescript, "#3178C6");
  if (name.includes("javascript")) return badge(SiJavascript, "#F7DF1E");
  if (name.includes("spring")) return badge(SiSpringboot, "#6DB33F");
  if (name.includes("java")) return badge(SiOpenjdk, "#ED8B00");
  if (name.includes("postgres")) return badge(SiPostgresql, "#4169E1");
  if (name.includes("mysql")) return badge(SiMysql, "#4479A1");
  if (name.includes("mongo")) return badge(SiMongodb, "#47A248");
  if (name.includes("node")) return badge(SiNodedotjs, "#339933");
  if (name.includes("express")) return badge(SiExpress, "#FFFFFF");
  if (name.includes("supabase")) return badge(SiSupabase, "#3ECF8E");
  if (name.includes("jwt") || name.includes("auth")) return badge(SiJsonwebtokens, "#D63AFF");
  if (name.includes("angular")) return badge(SiAngular, "#DD0031");
  if (name.includes("docker")) return badge(SiDocker, "#2496ED");
  if (name.includes("astro")) return badge(SiAstro, "#FF5D01");
  if (name.includes("mercadopago")) return badge(SiMercadopago, "#00B1EA");
  if (name.includes("figma")) return badge(SiFigma, "#F24E1E");
  return <Code size={12} className="inline-block mr-1 shrink-0" aria-hidden />;
}
