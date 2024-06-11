"use client"
// components/Editor.js
import dynamic from "next/dynamic";
import React, { useEffect, useRef } from "react";
import "react-quill/dist/quill.snow.css"; // import styles

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface EditorProps {
  value: string;
  onChange: (content: string) => void;
}

const Editor: React.FC<EditorProps> = ({ value, onChange }) => {
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "video",
  ];

  return (
    <ReactQuill
      value={value}
      onChange={onChange}
      modules={modules}
      formats={formats}
      theme="snow"
      placeholder="Write your story..."
      style={{ height: "400px" }}
    />
  );
};

export default Editor;
