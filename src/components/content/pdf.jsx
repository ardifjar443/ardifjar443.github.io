import { useEffect, useRef } from "react";

export default function PDFViewer(props) {
  const containerRef = useRef(null);
  const handleTabClick = (tab) => {
    props.setActiveTab(tab);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = containerRef.current;

    import("pspdfkit").then((PSPDFKit) => {
      if (PSPDFKit.default) {
        PSPDFKit.default.unload(container);
      }

      PSPDFKit.default.load({
        container,
        document: props.document,
        baseUrl: `${window.location.origin}${import.meta.env.BASE_URL}`,
      });
    });

    return () => {
      if (window.PSPDFKit && window.PSPDFKit.unload) {
        window.PSPDFKit.unload(container);
      }
    };
  }, [props.document]);

  return (
    <>
      <div style={{ height: "100px" }}></div>

      <div
        className="mb-5"
        ref={containerRef}
        style={{ width: "100%", height: "100vh" }}
      />
      <div className=" d-grid">
        <button
          className="btn btn-light fs-3 rounded-top-5"
          onClick={() => {
            handleTabClick("cheatSheet");
            scrollToTop();
          }}
        >
          Back to Cheat Sheet
        </button>
      </div>
    </>
  );
}
