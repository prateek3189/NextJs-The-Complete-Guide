export default function BlogPostPage({ params }) {
  const postId = params.slug;
  return (
    <main>
      <h1>Blog Post {postId}</h1>
    </main>
  );
}
