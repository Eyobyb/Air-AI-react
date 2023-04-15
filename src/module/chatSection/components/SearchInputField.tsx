import React, {
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";
import { ChatContext } from "../../../context/chatContext";
import SendButton from "../../../elements/buttons/SendButton";
import Loader from "../../../elements/loader";

const SearcInputField = ({
  placeholder = "Type your Query here",
  onQuery,
}: {
  onQuery: (e: string) => void;
  placeholder?: string;
}) => {
  const [content, setContent] = useState("");
  const { loading } = useContext(ChatContext);

  const editable = useRef(null);
  const sendQuery = useCallback(() => {
    onQuery(content);
    setContent("");
    let inputField: any = editable.current;
    if (inputField) {
      inputField.innerHTML = "";
      inputField.blur();
    }
  }, [content, onQuery]);

  return (
    <div className=" max-h-56 max-w-full overflow-y-auto scrollbar-hide w-full  min-h-20 relative border focus-within:border-2 focus-within:bg-background rounded-md p-2  border-gray-400 border-opacity-20 flex items-center">
      {loading ? (
        <div className="absolute left-0 right-0 top-0 bottom-0 h-full w-full bg-background bg-opacity-60 z-30 flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <></>
      )}

      {content && content.length > 0 ? (
        <></>
      ) : (
        <div className="absolute left-2 text-white opacity-20  ml-5">
          {placeholder}
        </div>
      )}

      <div
        ref={editable}
        onKeyDown={(e) => {
          if (!e.shiftKey && e.key == "Enter") sendQuery();
        }}
        className="textField mr-4 px-5 w-full bg-transparent z-10 text-second-text p-2 focus:outline-none caret-primary "
        contentEditable="true"
        onInput={(e) => {
          let text =
            e &&
            e.currentTarget &&
            e.currentTarget.textContent &&
            e.currentTarget.textContent;
          setContent(text || "");
        }}
      ></div>
      <div>
        <SendButton
          onClick={() => {
            sendQuery();
          }}
        />
      </div>
    </div>
  );
};
export default SearcInputField;
