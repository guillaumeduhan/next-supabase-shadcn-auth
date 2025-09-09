import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserProps {
  name?: string;
  position?: string;
  avatar_url?: string;
  email?: string;
  align?: string;
}

export function User({ name, position, avatar_url, email, align = 'left' }: UserProps) {
  const displayName = name || email;
  const initials = displayName
    ? displayName
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2)
    : "U";

  return (
    <div className={`flex items-center gap-3 ${!position ? "justify-center" : ""} ${align === "right" ? "flex-row-reverse" : ""}`}>
      <Avatar className="h-9 w-9">
        <AvatarImage src={avatar_url} alt={displayName || "User"} />
        <AvatarFallback className="font-[600]">{initials}</AvatarFallback>
      </Avatar>

      {(displayName || position) && (
        <div className={`flex flex-col ${align === "right" ? "text-right" : ""}`}>
          {displayName && (
            <span className="text-[14px] font-[600] dark:text-white" style={{
              lineHeight: 1.22
            }}>
              {displayName}
            </span>
          )}
          {position && (
            <p className="text-[13px] font-[500] text-neutral-500 dark:text-neutral-700">
              {position}
            </p>
          )}
        </div>
      )}
    </div>
  );
}