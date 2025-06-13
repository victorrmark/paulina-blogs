import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";

export default function BlogMarkdown({ markdown, darkTheme }) {
  const customTheme = {
    ...oneDark,
    'code[class*="language-"]': {
      ...oneDark['code[class*="language-"]'],
      backgroundColor: "",
      // fontSize: '14px',
      color: "",
    },
  };
  return (
    <>
      <Markdown
        remarkPlugins={[remarkGfm]}
        children={markdown}
        components={{
          code(props) {
            const { children, className, node, ...rest } = props;
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <SyntaxHighlighter
                {...rest}
                PreTag="div"
                children={String(children).replace(/\n$/, "")}
                language={match[1]}
                style={customTheme}
                customStyle={{
                  backgroundColor: darkTheme ? "#201E1D" : "#EFEDEB",
                  color: darkTheme ? "#FFF" : "#4B4D65",
                }}
                // useInlineStyles={false}
                className="code-wrapper"
              />
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            );
          },
        }}
      />
    </>
  );
}
