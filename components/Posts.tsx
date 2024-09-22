import { fetchPosts } from "@/lib/data";
import Post from "./Post";

async function Posts() {
  const posts = await fetchPosts();

  return (
    <>
      {posts && posts.length === 0 && (
        <div className="flex text-center justify-center font-medium">
          <span>You dont have any Posts!!!</span>
        </div>
      )}
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}

export default Posts;
