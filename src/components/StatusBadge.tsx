interface StatusBadgeProps {
    status: string;
    variant?: "success" | "error" | "warning" | "default";
  }
  
  export const StatusBadge: React.FC<StatusBadgeProps> = ({
    status,
    variant = "default",
  }) => {
    const getVariantClasses = () => {
      switch (variant) {
        case "success":
          return "text-green-600 bg-emerald-50";
        case "error":
          return "text-red-700 bg-rose-50";
        case "warning":
          return "text-yellow-700 bg-yellow-50";
        default:
          return "text-gray-600 bg-gray-50";
      }
    };
  
    return (
      <span
        className={`gap-1 px-2 py-1 text-xs font-bold tracking-wider leading-none uppercase whitespace-nowrap rounded-2xl ${getVariantClasses()}`}
      >
        {status}
      </span>
    );
  };
  