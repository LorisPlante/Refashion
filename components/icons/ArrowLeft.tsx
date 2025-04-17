type SvgProps = {
  fill_bg?: string;
  fill_text?: string;
  size?: number;
} & React.SVGProps<SVGSVGElement>;

export default function ArrowLeft({ fill_bg = "fill-background", fill_text = "fill-foreground", size = 44 }: SvgProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16Z" className={`${fill_bg}`} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.60668 15.6053H9.60402V16.4281H9.63268C12.236 16.4431 14.3167 18.7208 14.3167 21.4943H15.0467C15.0467 19.3306 13.9733 17.4511 12.38 16.4281H22.916V15.6053H12.376C13.9693 14.5823 15.0433 12.7028 15.0433 10.5391H14.3133C14.3133 13.3111 12.234 15.5888 9.63202 15.6053H9.60668Z"
        className={`${fill_text}`}
      />
    </svg>
  );
}
