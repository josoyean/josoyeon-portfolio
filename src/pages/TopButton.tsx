import React, { useEffect, useCallback, useState } from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Mail, ArrowUp, Github } from "lucide-react";
const TopButton = () => {
  const notify = () => toast.success("이메일 복사 완료되었습니다.");
  const [block, setBlock] = useState<boolean>(false);
  // const location = useLocation();
  const handleScroll = useCallback(() => {
    if (window.pageYOffset > 0) {
      // 탑버튼 보이게
      setBlock(true);
    } else {
      // 탑버튼 안 보이게
      setBlock(false);
    }
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  return (
    <Container $block={block}>
      <div
        onClick={() => {
          window.open("https://github.com/josoyean", "_blank");
        }}
      >
        <Github color="#7d7d7d" size={30} />
      </div>
      <div
        onClick={() => {
          window.navigator.clipboard
            .writeText("dlfjswhtnals@naver.com")
            .then(() => {
              notify();
            });
        }}
        style={{
          marginTop: "7px",
        }}
      >
        <Mail color="#7d7d7d" size={30} />
      </div>
      <div
        onClick={(event) => {
          event.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        style={{
          marginTop: "7px",
        }}
      >
        <ArrowUp color="#7d7d7d" size={30} />
      </div>
      <ToastContainer />
    </Container>
  );
};
const Container = styled.div<{ $block: boolean }>`
  z-index: 9999;
  position: fixed;
  visibility: ${({ $block }) =>
    $block ? "visible" : "hidden"}; /* 안 보이게 */
  opacity: ${({ $block }) => ($block ? 1 : 0)};
  right: calc((100vw - 1020px) / 2 - 210px); /* 왼쪽 여백 */
  transition: opacity 500ms linear, visibility 500ms linear;
  bottom: 25px;

  > div {
    border-radius: 50%;
    cursor: pointer;
    width: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    height: 55px;
    border: 2px solid #7d7d7d;
  }
  @media screen and (max-width: 1020px) {
    /* background-color: red; */
    right: 20px;
    > div {
      width: 35px;
      height: 35px;
      > svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;
export default TopButton;
