ALTER TABLE public.olympiads_honors
  ADD COLUMN awarding_institution text,
  ADD COLUMN award_date text,
  ADD COLUMN country_region text,
  ADD COLUMN role text;
COMMENT ON COLUMN public.olympiads_honors.award_date IS 'Award month/year in MM/YYYY format; nullable for legacy achievements.';
COMMENT ON COLUMN public.olympiads_honors.country_region IS 'Award country/region independent of competition level.';