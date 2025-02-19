import { useEffect } from "react";
import { trailingCursor } from "cursor-effects"; // Correct import

const CursorEffect = () => {
  useEffect(() => {
    const cursor = new (trailingCursor as any)(); // ✅ Fix TypeScript error
    // Correct usage

    return () => {
      cursor.destroy(); // Cleanup effect when component unmounts
    };
  }, []);

  return null; // No UI needed
};

export default CursorEffect;
