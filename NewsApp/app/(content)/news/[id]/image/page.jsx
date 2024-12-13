import { getNewsItem } from "@/lib/news";

export default async function ImagePage({ params }) {
  const newsId = params.id;
  const newsItem = await getNewsItem(newsId);
  if (!newsItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
    </div>
  );
}
