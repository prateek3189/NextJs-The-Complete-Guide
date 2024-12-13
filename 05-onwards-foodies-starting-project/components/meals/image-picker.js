"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imagePickerRef = useRef();

  function handleImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  function handlePickImage() {
    imagePickerRef.current.click();
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name || "image"}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No Image Picked Yet</p>}
          {pickedImage && <Image src={pickedImage} alt="Select Image" fill />}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name || "image"}
          accept="image/png, image/jpeg, image/jpg"
          name={name || "image"}
          ref={imagePickerRef}
          onChange={handleImageChange}
          required
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickImage}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
