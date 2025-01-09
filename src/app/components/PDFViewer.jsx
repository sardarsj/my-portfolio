"use client"
import { useEffect, useRef } from "react";
import * as pdfjs from "pdfjs-dist";
import "pdfjs-dist/web/pdf_viewer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFViewer = ({ pdf }) => {
  const viewerRef = useRef(null);

  useEffect(() => {
    const container = viewerRef.current;
    const loadingTask = pdfjs.getDocument(pdf);
    loadingTask.promise.then((pdfDoc) => {
      pdfDoc.getPage(1).then((page) => {
        const viewport = page.getViewport({ scale: 1.5 });
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        container.appendChild(canvas);

        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };
        page.render(renderContext);
      });
    });
  }, [pdf]);

  return <div ref={viewerRef} />;
};

export default PDFViewer;
