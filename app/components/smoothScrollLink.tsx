"use client";

interface SmoothScrollLinkProps {
  children: React.ReactNode;
  className?: `${string}`;
  href: string;
}
const SmoothScrollLink = ({
  href,
  children,
  className,
}: SmoothScrollLinkProps) => {
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevent the default anchor behavior
    const sectionId = href.slice(1); // Remove the `#`
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a className={className} href={href} onClick={handleScrollToSection}>
      {children}
    </a>
  );
};

export default SmoothScrollLink;
