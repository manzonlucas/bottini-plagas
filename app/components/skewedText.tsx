interface SkewedTextProps {
  classnames?: `${string}`;
  backgroundColor?: string;
  text: string;
}

export const SkewedText: React.FC<SkewedTextProps> = ({
  text,
  classnames,
  backgroundColor,
}) => {
  return (
    <div
      className={`${classnames} px-1 transform -skew-x-12 ${backgroundColor || "bg-primary"} `}
      style={{ transition: "font-weight 0.1s ease" }}
    >
      <h3 className="italic transform skew-x-12">{text}</h3>
    </div>
  );
};
