type SvgProps = {
  fill_bg?: string;
  fill_text?: string;
  size?: number;
} & React.SVGProps<SVGSVGElement>;

export default function Profil({ fill_bg = "fill-background", fill_text = "fill-foreground", size = 44, ...props }: SvgProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.0834 16.2507C18.0834 12.983 20.7324 10.334 24.0001 10.334C27.2678 10.334 29.9167 12.983 29.9167 16.2507C29.9167 19.5183 27.2678 22.1673 24.0001 22.1673C20.7324 22.1673 18.0834 19.5183 18.0834 16.2507ZM19.8667 25.834H19.8527C19.6803 25.834 19.5785 25.834 19.4901 25.8363C15.9006 25.9303 13.0131 28.8179 12.9191 32.4073C12.9167 32.4956 12.9167 32.5974 12.9167 32.7694V32.77V32.784V32.7967V32.7967C12.9167 32.9084 12.9167 32.9794 12.9184 33.0417C12.9845 35.5675 15.0165 37.5995 17.5424 37.6657C17.6047 37.6673 17.6756 37.6673 17.7872 37.6673H17.7874H17.8001H30.2001H30.2128H30.2129C30.3245 37.6673 30.3955 37.6673 30.4578 37.6657C32.9836 37.5995 35.0156 35.5675 35.0818 33.0417C35.0834 32.9794 35.0834 32.9084 35.0834 32.7968V32.7967V32.784V32.77C35.0834 32.5976 35.0834 32.4957 35.0811 32.4073C34.9871 28.8179 32.0995 25.9303 28.5101 25.8363C28.4217 25.834 28.3198 25.834 28.1474 25.834H28.1334H19.8667Z"
        className={`${fill_text}`}
      />
    </svg>
  );
}
