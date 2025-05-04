import Image from "next/image";

export default function useMdxComponents(components) {
  return {
  h1: (props) => <h1 className="mt-2 mb-5 text-xl font-extrabold" {...props} />,
  h2: (props) => <h2 className="mt-2 mb-5 font-bold text-lg text-gray" {...props} />,
  h3: (props) => <h3 className="mt-2 mb-5 text-base font-bold text-md text-gray" {...props} />,
  p: (props) => <p className="mb-5 text-[var(--secondary)]" {...props} />,
  a: (props) => (
    <span className="inline-block md-link-animation text-gray-400">
      <a className="underline" {...props} />
    </span>
  ),
  hr: (props) => <hr className="mb-5 text-[var(--secondary)] border-darkgray" {...props} />,
  ol: (props) => <ol className="pl-5 text-[var(--secondary)] mb-5 list-decimal" {...props} />,
  ul: (props) => <ul className="pl-5 mb-5 text-[var(--secondary)] list-disc" {...props} />,
  li: (props) => <li className="mb-2" {...props} />,
  img: (props) => (
    <div className="flex justify-center w-full">
      <img className="rounded-lg" {...props} />
    </div>
  ),
  blockquote: (props) => (
    <blockquote
      className="relative pl-6 pr-4 py-4 pb-1 mb-6 bg-[var(--highlight)] border-l-4 border-[var(--background)] rounded-md text-sm text-[var(--secondary)] italic shadow-sm"
      {...props}
    />
  ),
  span: ({ className, ...props }) => {
    // Check if the className includes 'katex' and apply styling conditionally
    if (className && className.includes('katex')) {
      return (
        <span className={`relative inline-block rounded-md p-2 bg-[var(--highlight)] text-[var(--secondary)] ${className}`} {...props} />
      );
    }
    
    // Apply default styling for other spans
    return <span className={className} {...props} />;
  },
  ...components
  }
};