/* eslint-disable @next/next/no-img-element */
"use client";

import { type KeyboardEvent as ReactKeyboardEvent, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { ReactNode } from "react";

type GetAppButtonProps = {
  className: string;
  label: string;
  ariaLabel?: string;
  children?: ReactNode;
};

export default function GetAppButton({
  className,
  label,
  ariaLabel = "Get App",
  children,
}: GetAppButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const canUsePortal = typeof document !== "undefined";

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscClose = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscClose);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleEscClose);
    };
  }, [isOpen]);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleKeyDown = (event: ReactKeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleOpen();
    }
  };

  return (
    <>
      <button
        type="button"
        className={className}
        aria-label={ariaLabel}
        onClick={handleOpen}
        onKeyDown={handleKeyDown}
      >
        {children ?? label}
      </button>

      {canUsePortal &&
        isOpen &&
        createPortal(
          <div
            className="app-download-modal-overlay"
            role="presentation"
            onClick={handleClose}
          >
            <div
              className="app-download-modal-shell"
              role="dialog"
              aria-modal="true"
              aria-labelledby="app-download-modal-title"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="app-download-modal-stage">
                <div className="app-download-modal-card">
                  <div className="app-download-modal-header">
                    <span className="app-download-modal-close-spacer" aria-hidden="true" />
                    <h2 id="app-download-modal-title">Use the app for more fun</h2>
                  </div>

                  <div className="app-download-modal-qr-wrap">
                    <div className="app-download-modal-qr-inner">
                      <img
                        src="/figma/assets/popup-qr-content-2x.webp"
                        alt="Scan QR code to download the app"
                        width={262}
                        height={267}
                      />
                    </div>
                  </div>
                </div>

                <img
                  className="app-download-modal-mascot"
                  src="/figma/assets/popup-mascot-2x.webp"
                  alt=""
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
