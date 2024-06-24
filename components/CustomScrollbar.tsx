'use client';

import React from "react";
import useCustomScrollbar from "@hooks/useCustomScrollbar";

const CustomScrollbar: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const {
    contentRef,
    thumbRef,
    thumbHeight,
    handleScroll,
    handleThumbMouseDown,
    isScrollable,
  } = useCustomScrollbar();

  return (
    <div className="custom-scrollbar">
      <div
        className="custom-scrollbar-content"
        ref={contentRef}
        onScroll={handleScroll}
      >
        {children}
      </div>
      {isScrollable && (
        <div className="custom-scrollbar-track">
          <div
            className="custom-scrollbar-thumb"
            ref={thumbRef}
            style={{ height: `${thumbHeight}px` }}
            onMouseDown={handleThumbMouseDown}
          ></div>
        </div>
      )}
    </div>
  );
};

export default CustomScrollbar;
