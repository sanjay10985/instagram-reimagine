import { Analytics } from "@vercel/analytics/react";
import InstagramFeed from "./components/claude-post-gallery";

function App() {
  return (
    <>
      <InstagramFeed />
      <Analytics />
    </>
  );
}

export default App;
