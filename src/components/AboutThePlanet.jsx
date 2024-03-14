import { useState } from "react";

export default function AboutThePlanet() {
  const [isBlurred, setIsBlurred] = useState(false);

  const handleReadMore = () => {
    setIsBlurred(!isBlurred);
  };
  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen backdrop-blur-sm z-50">
        <button type="button" onClick={handleReadMore}>
          Close
        </button>
      </div>
    </>
  );
}
