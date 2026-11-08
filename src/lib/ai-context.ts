const PROFILE_FIELDS = [
  "grade_level", "gpa_unweighted", "gpa_weighted", "gpa_scale", "target_major",
  "target_countries", "english_test", "english_score", "sat_score", "act_score",
  "unt_score", "nuet_score", "annual_budget", "budget_currency", "needs_full_aid",
] as const;

function pick(row: Record<string, unknown>, fields: readonly string[]) {
  return Object.fromEntries(fields.filter((key) => row[key] !== undefined).map((key) => [key, row[key]]));
}

/** Data minimization, not anonymization: free-text academics can still identify a person. */
export function minimizeAIContext(bundle: {
  profile: Record<string, unknown>;
  ap_exams: Record<string, unknown>[];
  olympiads_honors: Record<string, unknown>[];
  extracurriculars: Record<string, unknown>[];
}) {
  return {
    profile: pick(bundle.profile, PROFILE_FIELDS),
    ap_exams: bundle.ap_exams.map((row) => pick(row, ["subject", "score", "year", "status"])),
    olympiads_honors: bundle.olympiads_honors.map((row) => pick(row, ["name", "year", "level", "placement", "subject", "awarding_institution", "award_date", "country_region", "role"])),
    extracurriculars: bundle.extracurriculars.map((row) => pick(row, ["title", "organization", "role", "years_active", "hours_per_week", "description", "key_impact"])),
  };
}