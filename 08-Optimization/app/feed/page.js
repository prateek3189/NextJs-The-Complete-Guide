import Posts from "@/components/posts";
import { getPosts } from "@/lib/posts";

// Generating Dynamic Metadat
export async function generateMetadata(data) {
  const posts = await getPosts();
  return {
    title: `Browse all ${posts.length} Posts`,
    description: "Search for posts",
  };
}

export default async function FeedPage() {
  const posts = await getPosts();
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}
