import Link from 'next/link';

export default function DashboardPage() {
  return <main className="min-h-screen px-6 py-10"><div className="mx-auto max-w-6xl"><header className="flex items-center justify-between"><div><p className="text-sm text-muted-foreground">Workspace</p><h1 className="text-3xl font-semibold">Your studio</h1></div><Link className="rounded-md bg-primary px-4 py-2 text-primary-foreground" href="/projects/new">New project</Link></header><section className="mt-12 rounded-xl border bg-card p-8"><p className="text-sm text-muted-foreground">No projects yet</p><h2 className="mt-2 text-2xl font-semibold">Turn a blank page into a video.</h2><p className="mt-2 max-w-lg text-muted-foreground">Start with a duration and a creative direction. CreatorFlow will carry the production forward.</p></section></div></main>;
}
