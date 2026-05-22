"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Camera,
  CheckCircle2,
  Clock3,
  Database,
  Download,
  Eye,
  Film,
  Globe2,
  Heart,
  Image as ImageIcon,
  LineChart,
  LockKeyhole,
  MessageSquareText,
  Network,
  Newspaper,
  PieChart,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const sections = [
  { id: "summary", label: "Executive Summary" },
  { id: "problem", label: "Problem" },
  { id: "proof", label: "Met Gala Proof" },
  { id: "framework", label: "Event Intelligence" },
  { id: "sentiment", label: "Resonance" },
  { id: "integration", label: "Getty Intelligence Layer" },
  { id: "commercial", label: "Commercial" },
  { id: "future", label: "Future State" },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65 },
};

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return <div className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-cyan-300">{children}</div>;
}

function StatCard({ value, label, sub }: { value: string; label: string; sub?: string }) {
  return (
    <motion.div {...fadeUp} className="rounded-3xl border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/20 backdrop-blur">
      <div className="text-4xl font-black tracking-tight text-white md:text-5xl">{value}</div>
      <div className="mt-3 text-xs font-bold uppercase tracking-[0.22em] text-cyan-300">{label}</div>
      {sub && <p className="mt-4 text-sm leading-6 text-zinc-400">{sub}</p>}
    </motion.div>
  );
}

function EditorialCard({ icon: Icon, title, copy }: { icon: any; title: string; copy: string }) {
  return (
    <motion.div {...fadeUp} className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6 transition hover:border-cyan-300/30 hover:bg-cyan-300/[0.04]">
      <Icon className="text-cyan-300" size={30} />
      <h3 className="mt-5 text-2xl font-black text-white">{title}</h3>
      <p className="mt-3 leading-7 text-zinc-400">{copy}</p>
    </motion.div>
  );
}

function MetGalaPulse() {
  const [view, setView] = useState<"sources" | "audience" | "content">("sources");

  const data = {
    sources: [
      ["X", "104K", "82.4%"],
      ["Online News", "13.3K", "10.5%"],
      ["Instagram", "4.36K", "3.46%"],
      ["Sina Weibo", "1.42K", "1.13%"],
      ["Red", "1.1K", "0.87%"],
    ],
    audience: [
      ["Female audience", "73.7K", "74.6%"],
      ["Male audience", "25.1K", "25.4%"],
      ["Actors", "298", "8.83%"],
      ["Writers", "279", "8.27%"],
      ["CEOs", "273", "8.09%"],
    ],
    content: [
      ["Arts & Entertainment", "111K", "88.4%"],
      ["Celebrities", "101K", "80.5%"],
      ["Beauty & Fitness", "70.3K", "55.8%"],
      ["Fashion & Style", "69.4K", "55.1%"],
      ["Music & Audio", "43.5K", "34.6%"],
    ],
  } as const;

  const labels = {
    sources: "Source mix",
    audience: "Audience profile",
    content: "Content classification",
  } as const;

  return (
    <div className="rounded-[2rem] border border-white/10 bg-black/40 p-6 shadow-2xl shadow-cyan-950/20 backdrop-blur">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-300">Met Gala proof-of-concept</div>
          <h3 className="mt-3 text-3xl font-black text-white">Live event signal map</h3>
        </div>
        <div className="rounded-full border border-white/10 bg-white/5 p-1">
          {Object.keys(data).map((key) => (
            <button
              key={key}
              onClick={() => setView(key as typeof view)}
              className={`rounded-full px-4 py-2 text-sm font-bold transition ${view === key ? "bg-cyan-300 text-zinc-950" : "text-zinc-400 hover:text-white"}`}
            >
              {labels[key as keyof typeof labels]}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {data[view].map(([label, value, pct]) => (
          <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="font-black text-white">{label}</div>
                <div className="mt-1 text-sm text-zinc-500">{pct} of measured signal</div>
              </div>
              <div className="text-2xl font-black text-cyan-200">{value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CommercialStack() {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-6">
      <div className="grid gap-4 md:grid-cols-4">
        <StatCard value="£72K" label="Explore+ package" sub="Core intelligence platform for media, social, reporting, API and dashboards." />
        <StatCard value="10" label="Platform users" sub="Plus unlimited viewer/read-only users for dashboard consumption." />
        <StatCard value="126h" label="COE support" sub="Search creation, dashboards, alert workflows and tailored onboarding." />
        <StatCard value="25M" label="Private index" sub="Documents stored indefinitely in a customer-specific environment." />
      </div>
    </div>
  );
}

export default function GettyMeltwaterProposal() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <main className="min-h-screen bg-[#07090b] text-white selection:bg-cyan-300/40">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_28%)]" />

      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#07090b]/82 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center gap-16 px-5 py-4">
          <div className="flex items-center gap-4 font-black tracking-tight">
            <div className="font-serif text-lg tracking-tight text-white">Getty Images</div>
            <div className="h-6 w-px bg-white/20" />
            <img src="/meltwater-logo.png" alt="Meltwater" className="h-7 w-auto object-contain" />
          </div>
          <div className="hidden flex-1 items-center justify-center gap-10 lg:flex">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="text-xs font-semibold uppercase tracking-wider text-zinc-400 transition hover:text-cyan-200">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden px-5 py-24 md:py-36">
        <motion.div className="absolute right-[-10%] top-10 h-96 w-96 rounded-full bg-cyan-300/10 blur-3xl" animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 8, repeat: Infinity }} />
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <motion.div {...fadeUp} className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
              <LockKeyhole size={16} /> Confidential strategic recommendation · Getty Images × Meltwater
            </motion.div>
            <motion.h1 {...fadeUp} className="max-w-4xl font-serif text-6xl leading-[0.95] tracking-tight md:text-8xl">
              Powering Getty’s <span className="text-cyan-300">Global Image</span> Intelligence
            </motion.h1>
            <motion.p {...fadeUp} className="mt-8 max-w-3xl text-xl leading-9 text-zinc-300 md:text-2xl">
              A unified intelligence layer to measure the reach, value and impact of Getty Images content across every event, territory and channel.
            </motion.p>
          </div>

          <motion.div {...fadeUp} className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/30 backdrop-blur">
            <div className="grid gap-4 sm:grid-cols-2">
              <StatCard value="126K" label="Met Gala mentions" sub="Tracked during the proof-of-concept period." />
              <StatCard value="19.4M" label="Engagements" sub="Measured across social, news and visible content signals." />
              <StatCard value="98%" label="Customer demand" sub="Reported adoption interest in reporting tools from Getty’s client survey." />
              <StatCard value="24mo" label="Social history" sub="Retrospective social data to support year-on-year event comparison." />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="summary" className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionEyebrow>Executive summary</SectionEyebrow>
          <motion.h2 {...fadeUp} className="max-w-5xl font-serif text-4xl leading-tight tracking-tight md:text-6xl">
            Getty already owns one of the world’s most influential visual content ecosystems. This initiative helps measure, operationalize and commercialize that influence at scale.
          </motion.h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <EditorialCard icon={ImageIcon} title="Image impact, quantified" copy="Track where Getty content appears, how it travels, who amplifies it and what commercial story it tells." />
            <EditorialCard icon={Network} title="One reporting framework" copy="Move from fragmented event reporting into standardized, client-ready outputs across sport, entertainment and global content." />
            <EditorialCard icon={Sparkles} title="Client intelligence product" copy="Elevate reports from post-event summaries into premium insight experiences for partners, sponsors and internal leaders." />
          </div>
        </div>
      </section>

      <section id="problem" className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div {...fadeUp}>
            <SectionEyebrow>01 · The real problem</SectionEyebrow>
            <h2 className="font-serif text-4xl leading-tight md:text-6xl">The value is there. The reporting model has not scaled with it.</h2>
            <p className="mt-6 text-lg leading-8 text-zinc-400">
              Getty’s teams are already producing high-value event intelligence, but the process is manual, inconsistent and difficult to package globally.
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              ["Fragmented data", "Licensing, downloads, clippings, social and event performance sit across different systems."],
              ["Manual effort", "Teams spend hours turning raw data into client-ready narratives and visual outputs."],
              ["Inconsistent reporting", "Sport, entertainment and PR teams produce different outputs instead of one repeatable standard."],
              ["Under-demonstrated value", "Getty’s real contribution to cultural moments is not always translated into ROI clients can understand."],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.045] p-6">
                <div className="text-xl font-black text-white">{title}</div>
                <p className="mt-2 leading-7 text-zinc-400">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="proof" className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionEyebrow>02 · Proof-of-concept</SectionEyebrow>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <motion.div {...fadeUp}>
              <h2 className="font-serif text-5xl leading-tight tracking-tight md:text-7xl">Met Gala as the proof point.</h2>
              <p className="mt-6 text-xl leading-9 text-zinc-300">
                The Met Gala proof-of-concept demonstrated how Getty credit, link tracking and event conversation can be converted into a client-ready intelligence view.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <StatCard value="126K" label="Measured mentions" />
                <StatCard value="19.4M" label="Total engagements" />
                <StatCard value="88.7K" label="#metgala mentions" />
                <StatCard value="74.6%" label="Female audience" />
              </div>
            </motion.div>

            <MetGalaPulse />
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <EditorialCard icon={Camera} title="Credits & content pickup" copy="Track visible Getty credit usage, shared links, social posts, top news coverage and image-led conversation around the event." />
            <EditorialCard icon={Heart} title="Audience emotion" copy="Surface emotional themes such as love and surprise to explain why moments resonated, not just how many times they appeared." />
            <EditorialCard icon={Star} title="Talent and fashion resonance" copy="Identify celebrity, designer and fashion narratives driving cultural attention across social, editorial and global regions." />
          </div>
        </div>
      </section>

      <section id="framework" className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionEyebrow>03 · Event intelligence framework</SectionEyebrow>
          <motion.h2 {...fadeUp} className="max-w-5xl font-serif text-4xl leading-tight md:text-6xl">
            A repeatable model for every major global event.
          </motion.h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              [Newspaper, "Media pickup", "Where Getty content appears across online editorial, print, broadcast and international syndication."],
              [ImageIcon, "Image usage", "Track Getty credit, image pickup, gallery visibility, download signals and partner performance."],
              [Users, "Audience profile", "Understand who engages: creators, editors, designers, CEOs, fans and regional audiences."],
              [TrendingUp, "Amplification", "Measure social echo, top shared links, creator reach, platform mix and engagement velocity."],
              [PieChart, "Competitive share", "Benchmark Getty against AP, Reuters, Shutterstock and other visual content sources."],
              [Rocket, "Client-ready reporting", "Turn event data into standardised outputs that commercial, editorial and PR teams can use immediately."],
            ].map(([Icon, title, copy]: any) => (
              <EditorialCard key={title} icon={Icon} title={title} copy={copy} />
            ))}
          </div>
        </div>
      </section>

      <section id="sentiment" className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionEyebrow>04 · Audience resonance</SectionEyebrow>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <motion.div {...fadeUp}>
              <h2 className="font-serif text-4xl leading-tight md:text-6xl">Beyond sentiment. Understand cultural pull.</h2>
              <p className="mt-6 text-lg leading-8 text-zinc-400">
                For Getty, the opportunity is not simply positive vs negative sentiment. It is understanding audience reaction, intensity and commercial resonance across talent, fashion, sponsors and events.
              </p>
            </motion.div>
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-300/[0.08] to-zinc-950 p-8">
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  ["Love", "Moments fans celebrate and amplify"],
                  ["Surprise", "Unexpected looks, arrivals and narrative spikes"],
                  ["Intent", "Signals of demand, attention and audience pull"],
                  ["Intensity", "How strongly reactions cluster around people, brands or moments"],
                ].map(([title, copy]) => (
                  <div key={title} className="rounded-2xl border border-cyan-300/20 bg-black/30 p-5">
                    <div className="text-lg font-black text-cyan-200">{title}</div>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">{copy}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-zinc-300">
                Advanced sentiment becomes a commercial interpretation layer: not just what happened, but why it mattered and how clients can use it.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="integration" className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionEyebrow>05 · Getty intelligence layer</SectionEyebrow>
          <div className="rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/[0.09] to-zinc-950 p-8 md:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <h2 className="font-serif text-5xl leading-tight md:text-7xl">From image distribution to image intelligence.</h2>
                <p className="mt-6 text-xl leading-9 text-zinc-300">
                  Combine Getty’s proprietary performance data with Meltwater’s media, social and audience intelligence to create one connected view of event impact.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    "Downloads & licensing",
                    "Credit and link tracking",
                    "Social and editorial pickup",
                    "Audience and sentiment signals",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-black/25 p-4 font-bold text-white">
                      <CheckCircle2 className="mb-3 text-cyan-300" size={22} /> {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-black/35 p-8">
                <div className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-300">Unified intelligence model</div>
                <div className="mt-8 space-y-4">
                  {[
                    [Database, "Getty proprietary data", "Downloads, licensing, geographies, business segments and asset metadata"],
                    [Search, "Meltwater signal layer", "News, social, influencer, forums, links, mentions and share of voice"],
                    [Bot, "AI interpretation", "Mira, summaries, clustering, advanced sentiment and report takeaways"],
                    [LineChart, "Client-ready outputs", "Dashboards, insight pages, executive summaries and event reports"],
                  ].map(([Icon, title, copy]: any) => (
                    <div key={title} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <Icon className="mt-1 shrink-0 text-cyan-300" size={26} />
                      <div>
                        <div className="font-black text-white">{title}</div>
                        <p className="mt-1 text-sm leading-6 text-zinc-400">{copy}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="commercial" className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionEyebrow>06 · Commercial pathway</SectionEyebrow>
          <motion.h2 {...fadeUp} className="max-w-5xl font-serif text-4xl leading-tight md:text-6xl">
            A scalable package designed for high-frequency event reporting.
          </motion.h2>
          <div className="mt-10"><CommercialStack /></div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <EditorialCard icon={ShieldCheck} title="Premium support" copy="Implementation, account management, strategic customer success and Centre of Excellence support." />
            <EditorialCard icon={Globe2} title="Optional APAC social" copy="Access to Chinese social platforms and mobile news app content for global event coverage." />
            <EditorialCard icon={Sparkles} title="Optional Converseon" copy="Advanced document-level sentiment upgrade to support deeper interpretation where required." />
          </div>
        </div>
      </section>

      <section id="future" className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionEyebrow>07 · Future state</SectionEyebrow>
          <div className="rounded-[2rem] bg-white p-8 text-zinc-950 md:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <h2 className="font-serif text-5xl leading-tight md:text-7xl">From event coverage to strategic intelligence.</h2>
                <p className="mt-6 text-xl leading-9 text-zinc-700">
                  Getty can turn every major event into a measurable intelligence product — proving content value, elevating client conversations and giving teams a repeatable global reporting standard.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  ["Month 1", "Strong delivery on the current brief with initial reporting outputs live."],
                  ["Month 3", "Impact felt across teams with reporting framework alignment."],
                  ["Month 6", "Meltwater becomes a trusted partner across strategic event reporting."],
                  ["Month 12", "From silos to a single source of truth for global media intelligence."],
                ].map(([title, copy]) => (
                  <div key={title} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5">
                    <div className="font-black text-cyan-700">{title}</div>
                    <p className="mt-2 text-sm leading-6 text-zinc-600">{copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-10 text-center text-sm text-zinc-500">
        Getty Images × Meltwater · Confidential proposal experience · {year}
      </footer>
    </main>
  );
}
