"use client";

import {
  UploadButton,
  UploadDropzone,
  useUploadThing,
} from "@/utils/uploadthing";

export default function Home() {
  const { startUpload } = useUploadThing("imageUploader", {
    /**
     * @see https://docs.uploadthing.com/api-reference/react#useuploadthing
     */
    onBeforeUploadBegin: (files) => {
      console.log("Uploading", files.length, "files");
      return files;
    },
    onUploadBegin: (name) => {
      console.log("Beginning upload of", name);
    },
    onClientUploadComplete: (res) => {
      console.log("Upload Completed.", res.length, "files uploaded");
    },
    onUploadProgress(p) {
      console.log("onUploadProgress", p);
    },
  });

  return (
    <main>
      <UploadDropzone
        /**
         * @see https://docs.uploadthing.com/api-reference/react#uploaddropzone
         */
        endpoint="imageUploader"
        onUploadAborted={() => {
          alert("Upload Aborted");
        }}
        onClientUploadComplete={(res) => {
          console.log(`onClientUploadComplete`, res);
          alert("Upload Completed");
        }}
        onUploadBegin={() => {
          console.log("upload begin");
        }}
      />
      
    </main>
  );
}