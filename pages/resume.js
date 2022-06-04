import { useState } from "react";
import { Document, Page } from "react-pdf";
// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
// import Resume from "../public/pdf/myResume.pdf";

export default function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document
        file={"./pdf/myResume.pdf"}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
    </div>
  );
}
