type DisplayProfile = {
  is_public?: boolean;
  high_school?: string | null;
  city?: string | null;
  target_major?: string | null;
};

export function leaderboardSubtitle(profile: DisplayProfile): string {
  const fields = [profile.high_school, profile.target_major];
  return fields.filter((value) => typeof value === "string" && value.trim()).join(" · ");
}