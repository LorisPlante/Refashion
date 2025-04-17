type SvgProps = {
  fill_bg?: string;
  fill_text?: string;
  size?: number;
} & React.SVGProps<SVGSVGElement>;

export default function ArrowRight({ fill_bg = "fill-background", fill_text = "fill-foreground", size = 44, ...props }: SvgProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z" className={`${fill_bg}`} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        width={size - 8}
        height={size - 8}
        d="M22.3933 15.6053H22.396V16.4281H22.3673C19.764 16.4431 17.6833 18.7208 17.6833 21.4943H16.9533C16.9533 19.3306 18.0267 17.4511 19.62 16.4281H9.08398V15.6053H19.624C18.0307 14.5823 16.9567 12.7028 16.9567 10.5391H17.6867C17.6867 13.3111 19.766 15.5888 22.368 15.6053H22.3933Z"
        className={`${fill_text}`}
      />
    </svg>
  );
}
