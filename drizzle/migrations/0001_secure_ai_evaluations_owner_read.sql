REVOKE INSERT, UPDATE, DELETE ON TABLE public.ai_evaluations FROM PUBLIC, anon, authenticated;
GRANT SELECT ON TABLE public.ai_evaluations TO authenticated;
GRANT ALL ON TABLE public.ai_evaluations TO service_role;
ALTER TABLE public.ai_evaluations ENABLE ROW LEVEL SECURITY;
DO $migration$
DECLARE p record;
BEGIN
  FOR p IN SELECT policyname FROM pg_policies WHERE schemaname = 'public' AND tablename = 'ai_evaluations' LOOP
    EXECUTE format('DROP POLICY %I ON public.ai_evaluations', p.policyname);
  END LOOP;
END
$migration$;
CREATE POLICY "Read own evaluations" ON public.ai_evaluations FOR SELECT TO authenticated USING (auth.uid() = user_id);