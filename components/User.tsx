import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserProps {
  name?: string;
  position?: string;
  avatar_url?: string;
  email?: string;
  align?: string;
  small?: boolean;
}

const LIMIT = 22;

export function User({ name = "John Doe", position = "CEO", avatar_url, email = "johndoe@gmail.com", align = 'left', small = false }: UserProps) {
  const displayName = name || email;
  const initials = displayName
    ? displayName
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2)
    : "U";

  const avatarSize = small ? "h-7 w-7" : "h-9 w-9";
  const gap = small ? "gap-2" : "gap-3";
  const nameSize = small ? "text-[13px]" : "text-[14px]";
  const positionSize = small ? "text-[11px]" : "text-[13px]";

  return (
    <div className={`flex items-center justify-start cursor-pointer ${gap} ${align === "right" ? "flex-row-reverse" : ""}`}>
      <Avatar className={avatarSize}>
        <AvatarImage src={avatar_url} alt={displayName || "User"} />
        <AvatarFallback className="font-[600] bg-neutral-200" style={{ fontSize: small ? '12px' : '14px' }}>
          {initials}
        </AvatarFallback>
      </Avatar>

      {(displayName || position) && (
        <div className={`flex flex-col ${align === "right" ? "text-right" : ""}`}>
          {displayName && (
            <span className={`${nameSize} font-[600] dark:text-white`} style={{
              lineHeight: 1.22
            }}>
              {displayName.length <= LIMIT ? displayName : `${displayName.slice(0, LIMIT)}...`}
            </span>
          )}
          {position && (
            <p className={`${positionSize} font-[500] text-neutral-500 dark:text-neutral-700`}>
              {position}
            </p>
          )}
        </div>
      )}
    </div>
  );
}