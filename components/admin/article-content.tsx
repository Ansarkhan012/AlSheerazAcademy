import type { Json } from "@/lib/supabase/database.types";
import type { CSSProperties } from "react";
import { asContentNode, isSafeHref, type ContentNode } from "@/lib/blog/public";
function align(node: ContentNode): CSSProperties | undefined {
  const value = node.attrs?.textAlign;
  return value === "center" || value === "right" || value === "justify"
    ? { textAlign: value }
    : undefined;
}
function render(node: ContentNode, key: number | string): React.ReactNode {
  if (node.type === "text") {
    let out: React.ReactNode = node.text || "";
    for (const mark of node.marks || []) {
      if (mark.type === "bold") out = <strong>{out}</strong>;
      else if (mark.type === "italic") out = <em>{out}</em>;
      else if (mark.type === "underline") out = <u>{out}</u>;
      else if (mark.type === "link" && isSafeHref(mark.attrs?.href))
        out = (
          <a
            href={mark.attrs.href}
            rel="noopener noreferrer nofollow"
            className="text-emerald-700 underline"
          >
            {out}
          </a>
        );
    }
    return <span key={key}>{out}</span>;
  }
  const children = node.content?.map((x, i) => render(x, `${key}-${i}`));
  switch (node.type) {
    case "paragraph":
      return (
        <p key={key} style={align(node)}>
          {children}
        </p>
      );
    case "heading":
      return node.attrs?.level === 3 ? (
        <h3 key={key} style={align(node)}>
          {children}
        </h3>
      ) : (
        <h2 key={key} style={align(node)}>
          {children}
        </h2>
      );
    case "bulletList":
      return (
        <ul key={key} className="list-disc pl-6">
          {children}
        </ul>
      );
    case "orderedList":
      return (
        <ol key={key} className="list-decimal pl-6">
          {children}
        </ol>
      );
    case "listItem":
      return <li key={key}>{children}</li>;
    case "blockquote":
      return (
        <blockquote
          key={key}
          className="border-l-4 border-emerald-600 pl-5 italic text-slate-600"
        >
          {children}
        </blockquote>
      );
    case "horizontalRule":
      return <hr key={key} className="my-8" />;
    case "hardBreak":
      return <br key={key} />;
    case "doc":
      return <>{children}</>;
    default:
      return null;
  }
}
export function ArticleContent({ document }: { document: Json }) {
  const root = asContentNode(document);
  return (
    <div className="space-y-5 text-lg leading-8 text-slate-700 [&_h2]:pt-5 [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_h3]:pt-3 [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-slate-900">
      {root.content?.map((x, i) => render(x, i))}
    </div>
  );
}
