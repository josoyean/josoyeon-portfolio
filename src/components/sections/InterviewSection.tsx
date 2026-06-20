import { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ChevronDown } from "lucide-react";
import { fetchInterviews, queryKeys } from "../../lib/queries";
import { SanitizedHtml } from "../../lib/sanitizeHtml";
import { getErrorMessage } from "../../lib/utils";
import {
  EmptyState,
  ErrorState,
  LoadingState,
  SectionTitle,
  SectionWrapper,
} from "../ui";

export function InterviewSection() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: queryKeys.interviews,
    queryFn: fetchInterviews,
  });

  const [openId, setOpenId] = useState<string | null>(null);
  const hasInitialized = useRef(false);

  useEffect(() => {
    if (data?.length && !hasInitialized.current) {
      setOpenId(data[0].id);
      hasInitialized.current = true;
    }
  }, [data]);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <SectionWrapper id="interviews" className="section--alt">
      <SectionTitle title="Interview" />

      {isLoading && <LoadingState />}
      {isError && (
        <ErrorState
          message={`인터뷰 데이터를 불러오지 못했습니다. (${getErrorMessage(error)})`}
        />
      )}
      {!isLoading && !isError && data?.length === 0 && (
        <EmptyState message="등록된 인터뷰가 없습니다. Supabase interview 테이블을 확인하세요." />
      )}

      {!!data?.length && (
        <ul className="interview-list">
          {data.map((item, index) => {
            const isOpen = openId === item.id;
            return (
              <li
                key={item.id}
                className={`interview-item ${isOpen ? "is-open" : ""}`}
              >
                <button
                  type="button"
                  className="interview-item__question"
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                >
                  <span className="interview-item__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{item.question}</span>
                  <ChevronDown size={16} className="interview-item__chevron" />
                </button>
                {isOpen && (
                  <SanitizedHtml
                    html={item.answer}
                    className="interview-item__answer"
                  />
                )}
              </li>
            );
          })}
        </ul>
      )}
    </SectionWrapper>
  );
}
