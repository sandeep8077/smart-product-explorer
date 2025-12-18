import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  removeNotification,
  notificationSelector,
} from "../features/notifications/notificationSlice";

function Notification() {
  const { message, type } = useSelector(notificationSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!message) return;

    const id = setTimeout(() => {
      dispatch(removeNotification());
    }, 1000);

    return () => clearTimeout(id);
  }, [message, dispatch]);

  if (!message) return null;

  // 🎨 Tailwind styles based on type
  const typeStyles = {
    success: "bg-green-100 text-green-800 border-green-400",
    error: "bg-red-100 text-red-800 border-red-400",
    info: "bg-blue-100 text-blue-800 border-blue-400",
  };

  return (
    <div className="fixed top-5 right-5 z-50">
      <div
        className={`
          flex items-center gap-3
          px-4 py-3
          border-l-4
          rounded-lg
          shadow-lg
          text-sm font-medium
          animate-slide-in
          ${typeStyles[type] || typeStyles.success}
        `}
      >
        {/* Icon */}
        <span className="text-lg">
          {type === "success" && "✅"}
          {type === "error" && "❌"}
          {type === "info" && "ℹ️"}
        </span>

        {/* Message */}
        <span>{message}</span>
      </div>
    </div>
  );
}

export default Notification;
