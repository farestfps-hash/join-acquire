<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Use the typed dictionary in src/lib/i18n.ts and useLanguage in React components for interface localization; keep stored country/status values and user/catalogue content separate so language changes never alter data or business logic.
- Render English in SSR and restore app_language after hydration to keep first-visit content stable without network translation.
