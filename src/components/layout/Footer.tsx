import { profile } from "@/content/profile";

export function Footer() {
  return (
    <footer className="border-t border-line py-12">
      <div className="shell flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="label text-muted">{profile.name}</p>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
            Business analytics and data analytics. {profile.location}.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3">
          <a
            href={`mailto:${profile.email}`}
            className="label text-muted transition-colors hover:text-gold"
          >
            Email
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="label text-muted transition-colors hover:text-gold"
          >
            LinkedIn
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer noopener"
            className="label text-muted transition-colors hover:text-gold"
          >
            GitHub
          </a>
          <a
            href={profile.resumePath}
            className="label text-muted transition-colors hover:text-gold"
          >
            Résumé
          </a>
        </nav>
      </div>
    </footer>
  );
}
