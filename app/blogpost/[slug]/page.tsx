
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import { unified } from "unified";
import OnThisPage from "@/components/onthispage";

function formatDate(value: unknown) {
  if (!value) return "";

  const date = new Date(value as string);

  return isNaN(date.getTime())
    ? String(value)
    : date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const filepath = path.join(
    process.cwd(),
    "content",
    `${slug}.md`
  );

  if (!fs.existsSync(filepath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filepath, "utf-8");
  const { content, data } = matter(fileContent);

  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypePrettyCode, {
      theme: "github-dark",
      transformers: [
        transformerCopyButton({
          visibility: "always",
          feedbackDuration: 3_000,
        }),
      ],
    })
    .use(rehypeDocument, {
      title: String(data.title ?? "Tutorial"),
    })
    .use(rehypeFormat)
    .use(rehypeStringify);

  const htmlContent = (await processor.process(content)).toString();

  return (
    <div className="mx-auto max-w-6xl p-4">
      <h1 className="mb-4 text-4xl font-bold">
        {data.title}
      </h1>

      <p className="mb-2 border-l-4 border-gray-500 pl-4 text-base italic">
        &quot;{data.description}&quot;
      </p>

      <div className="flex flex-wrap gap-2">
        <p className="mb-4 text-sm italic text-gray-500">
          By {data.author}
        </p>

        <p className="mb-4 text-sm text-gray-500">
          {formatDate(data.date)}
        </p>
      </div>

      <div
        dangerouslySetInnerHTML={{ __html: htmlContent }}
        className="prose max-w-none dark:prose-invert"
      />

      <OnThisPage htmlContent={htmlContent} />
    </div>
  );
}
