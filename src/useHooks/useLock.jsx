import { useEffect } from "react";

const useLock = () => {
  const $html = document.querySelector("html");
  useEffect(() => {
    $html.classList.remove("locked");
  }, [$html.classList]);
};

export default useLock;
