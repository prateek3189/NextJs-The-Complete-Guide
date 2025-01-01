"use client";

import FormSubmit from "@/components/form-submit";

import { useFormState } from "react-dom";
import { CreatePost } from "./new-post.action";

export default function NewPostPage() {
  const [state, formAction] = useFormState(CreatePost, { error: null });

  return (
    <>
      <h1>Create a new post</h1>
      <form action={formAction}>
        <p className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </p>
        <p className="form-control">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="image"
            name="image"
          />
        </p>
        <p className="form-control">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" rows="5" />
        </p>
        <p className="form-actions">
          <FormSubmit />
        </p>
        {state.error && <p className="error">{state.error}</p>}
      </form>
    </>
  );
}
