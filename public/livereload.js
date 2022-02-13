((l) => {
  let w, i;

  function r() {
    l.reload();
  }

  function s(f, t) {
    w && w.close();
    w = new WebSocket(`${l.origin.replace("http", "ws")}/_r`);    
    w.addEventListener("open", f);
    w.addEventListener("message", () => {
      console.info("Reloading.");
      r();
    });
    w.addEventListener("close", () => {
      clearTimeout(i);
      i = setTimeout(() => s(r, t ? Math.min(t*1.3, 5000) : 50), 100 + t);
    });
  }

  s();
})(location);