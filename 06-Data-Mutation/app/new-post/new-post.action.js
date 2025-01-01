"use server";

import { uploadImage } from "@/lib/cloudinary";
import { storePost, updatePostLikeStatus } from "@/lib/posts";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function CreatePost(prevState, formData) {
  const title = formData.get("title");
  const image = formData.get("image");
  const content = formData.get("content");

  if (
    !title ||
    title.trim().length === 0 ||
    !image ||
    image.size === 0 ||
    !content ||
    content.trim().length === 0
  ) {
    return { error: "Please fill in all fields" };
  }

  let imageUrl;

  try {
    imageUrl = await uploadImage(image);
  } catch (e) {
    throw new Error("Error creating post image: " + e.message);
  }

  await storePost({
    imageUrl,
    title,
    content,
    userId: 1,
  });

  revalidatePath("/", "layout");
  redirect("feed");
}

export async function togglePostLikeStatus(postId) {
  updatePostLikeStatus(postId, 2);
  revalidatePath("/", "layout");
}
