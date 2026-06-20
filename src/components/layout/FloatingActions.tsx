import { useCallback, useEffect, useState } from "react";
import { ArrowUp, Github, Mail } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const EMAIL = "dlfjswhtnals@naver.com";

export function FloatingActions() {
  const [visible, setVisible] = useState(false);

  const handleScroll = useCallback(() => {
    setVisible(window.scrollY > 200);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      toast.success("이메일이 복사되었습니다.");
    } catch {
      toast.error("복사에 실패했습니다.");
    }
  };

  return (
    <>
      <div className={`floating-actions ${visible ? "is-visible" : ""}`}>
        <button
          type="button"
          className="floating-actions__btn"
          onClick={() => window.open("https://github.com/josoyean", "_blank")}
          aria-label="GitHub"
        >
          <Github size={22} />
        </button>
        <button
          type="button"
          className="floating-actions__btn"
          onClick={copyEmail}
          aria-label="이메일 복사"
        >
          <Mail size={22} />
        </button>
        <button
          type="button"
          className="floating-actions__btn"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="맨 위로"
        >
          <ArrowUp size={22} />
        </button>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar
        closeButton={false}
        theme="light"
      />
    </>
  );
}
