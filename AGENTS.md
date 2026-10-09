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

- Kubo is a UI-only prototype using React context for transient demo state; no persistence, external AI, or backend is included because the requested scope is presentation and interactions only.
- Keep shared household screens and shell in the Kubo feature module, with a distinct TanStack leaf route and metadata for each navigation destination; this preserves native browser navigation and shared session state.
- Use global semantic tokens and mobile design classes in src/styles.css so all household screens share a consistent phone-first layout.
