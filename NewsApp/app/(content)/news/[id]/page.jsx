import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function NewsDetailsPage({ params }) {
  const newsId = params.id;
  const newsItem = DUMMY_NEWS.find((news) => news.slug === newsId);
  if (!newsItem) {
    notFound();
  }
  return (
    <>
      <h1>Read It...</h1>
      <article className="news-article">
        <header>
          <Link href={`/news/${newsItem.slug}/image`}>
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
          </Link>
          <h1>{newsItem.title}</h1>
          <time dateTime={newsItem.date}>{newsItem.date}</time>
        </header>
        <p>{newsItem.content}</p>
      </article>
    </>
  );
}
