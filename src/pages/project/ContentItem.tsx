import { AnimatePresence, motion } from "framer-motion";
import PopupContent from "../PopupContent";
import type {
  IndividualItemsTypes,
  ProjectContentTypes,
} from "./ProjectContent.types";
function ContentItem({
  handleClick,
  elementIndex = undefined,
  selectItem,
  LinkName,
  item,
  closeClick,

  introduce,
}: ProjectContentTypes & { item: IndividualItemsTypes }) {
  return (
    <div
      className="project-box"
      onClick={(e) => {
        if (elementIndex === undefined) return;
        handleClick?.(elementIndex, e);
      }}
    >
      <AnimatePresence>
        <img src={item.img} alt="html"></img>
        {selectItem && (
          <motion.div
            className="modal "
            style={{ zIndex: 9999 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.24,
            }}
          >
            <PopupContent
              item={item}
              introduce={introduce}
              key={elementIndex}
              closeClick={closeClick}
              elementIndex={elementIndex}
            ></PopupContent>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ContentItem;
