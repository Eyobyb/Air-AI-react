import ChatContextWrapper from "./context/chatContext";
import ChatSection from "./module/chatSection";

function App() {
  return (
    <ChatContextWrapper>
      <div className="flex justify-center  w-full">
        <div className="bg-opacity-50 inside-container shadow-sm  flex bg-secondary-background rounded-2xl">
          <ChatSection />
        </div>
      </div>
    </ChatContextWrapper>
  );
}

export default App;
