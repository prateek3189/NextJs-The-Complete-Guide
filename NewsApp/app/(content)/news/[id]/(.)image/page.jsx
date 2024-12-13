import ModalBackdrop from "@/components/modal-backdrop";
import { getNewsItem } from "@/lib/news";

export default async function InterceptedImagePage({ params }) {
  const newsId = params.id;
  const newsItem = await getNewsItem(newsId);
  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
            style={{ width: "100%" }}
          />
        </div>
      </dialog>
    </>
  );
}
