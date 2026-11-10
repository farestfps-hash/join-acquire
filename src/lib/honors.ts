/** Accept stored MM/YYYY dates and the ISO month format used by month inputs. */
export function awardMonth(value?: string | null): string {
  if (!value) return "";
  const iso = /^(\d{4})-(0[1-9]|1[0-2])(?:-\d{2})?$/.exec(value);
  if (iso) return `${iso[1]}-${iso[2]}`;
  const legacy = /^(0[1-9]|1[0-2])\/(\d{4})$/.exec(value);
  return legacy ? `${legacy[2]}-${legacy[1]}` : "";
}

export function awardDateUpdate(value: string) {
  const month = awardMonth(value);
  return {
    award_date: month ? `${month.slice(5, 7)}/${month.slice(0, 4)}` : null,
    year: month ? Number(month.slice(0, 4)) : null,
  };
}

export function awardDateLabel(value?: string | null, year?: number | null) {
  const month = awardMonth(value);
  return month ? `${month.slice(5, 7)}/${month.slice(0, 4)}` : year ? String(year) : "";
}