type DisplayProfile = {
  is_public?: boolean;
  high_school?: string | null;
  city?: string | null;
  target_major?: string | null;
};

export function leaderboardSubtitle(profile: DisplayProfile): string {
  const fields = profile.is_public
    ? [profile.high_school, profile.city, profile.target_major]
    : [profile.high_school, profile.target_major];
  return fields.filter((value) => typeof value === "string" && value.trim()).join(" · ");
}