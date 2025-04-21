import Markdown from "react-markdown";
import { DM_MONO_FAMILY } from "../utils/constants";

const PostContainer = ({ children }) => {
  return (
    <Markdown
      components={{
        h1(props) {
          const { node, ...rest } = props;
          return (
            <h1
              className="mt-2 mb-5 text-lg font-extrabold"
              {...rest}
            />
          );
        },
        h2(props) {
          const { node, ...rest } = props;
          return (
            <h2
              className="mt-2 mb-5 font-bold text-md  text-gray "
              {...rest}
            />
          );
        },
        h3(props) {
          const { node, ...rest } = props;
          return (
            <h3
              className="mt-2 mb-5 text-base font-bold  text-gray "
              {...rest}
            />
          );
        },
        p(props) {
          const { node, ...rest } = props;
          return <p className="mb-5 text-[var(--secondary)]" {...rest} />;
        },
        a(props) {
          const { node, ...rest } = props;
          return (
            <span className="inline-block md-link-animation">
              <a className="font-normal" {...rest} />
            </span>
          );
        },
        hr(props) {
          const { node, ...rest } = props;
          return <hr className="mb-5 text-[var(--secondary)] border-darkgray " {...rest} />;
        },
        ol(props) {
          const { node, ...rest } = props;
          return <ol className="pl-5 text-[var(--secondary)] mb-5 list-decimal" {...rest} />;
        },
        ul(props) {
          const { node, ...rest } = props;
          return <ul className="pl-5 mb-5 text-[var(--secondary)] list-disc" {...rest} />;
        },
        li(props) {
          const { node, ...rest } = props;
          return <li className="mb-2" {...rest} />;
        },
        img(props) {
          const { node, ...rest } = props;
          return (
            <div className="flex justify-center w-full">
              <img className="rounded-lg" {...rest} />
            </div>
          );
        },
        blockquote(props) {
          const { node, ...rest } = props;
          return (
            <blockquote
              className="relative pl-6 pr-4 py-4 pb-0 mb-6 bg-[var(--highlight)] border-l-4 border-[var(--background)] rounded-md text-sm text-[var(--secondary)] italic shadow-sm"
              {...rest}
            />
          )
        }
      }}
    >
      {children}
    </Markdown>
  );
};

export default PostContainer;