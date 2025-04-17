import Link from "next/link";
import ArrowRight from "./icons/ArrowRight";

type CtaProps = {
  link: string;
  bg?: string;
  text?: string;
  weight?: string;
  displayIcon?: boolean;
  fill_bg_icon?: string;
  fill_text_icon?: string;
  size_icon?: number;
  children: React.ReactNode;
};

export default function Cta({
  link,
  bg = "bg-orange",
  text = "text-vistawhite",
  weight = "font-semibold",
  displayIcon = false,
  children,
  fill_bg_icon,
  fill_text_icon,
  size_icon,
}: CtaProps) {
  return (
    <Link href={link} className={`inline-flex items-center justify-center gap-2 px-3 py-2 rounded-full transition-all duration-200 hover:opacity-90 ${bg} ${text} ${weight}`}>
      {children}
      {displayIcon ? <ArrowRight fill_bg={fill_bg_icon} fill_text={fill_text_icon} size={size_icon}></ArrowRight> : <></>}
    </Link>
  );
}
