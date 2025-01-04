import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";

export default async function NewsPage() {
  const news = await getAllNews();

  return (
    <>
      <h1>News Page</h1>{" "}
      {news && news.length > 0 ? <NewsList news={news} /> : null}
    </>
  );
}
