import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card.jsx";
import { Button } from "./components/ui/button.jsx";
import { Badge } from "./components/ui/badge.jsx";
import { Input } from "./components/ui/input.jsx";
import { Textarea } from "./components/ui/textarea.jsx";
import { ArrowRight, BadgeCheck, BookOpen, Briefcase, HeartHandshake, Leaf, ShieldCheck, Sparkles, Stethoscope, Users, GraduationCap, Phone, Mail, MapPin, Globe, FileText, HandCoins, Building2, CheckCircle2 } from "lucide-react";

// Put your real logo image here: place file at public/logo.png and set LOGO_URL = "/logo.png"
const LOGO_URL = "";

const fadeUp = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

function cn(...classes) { return classes.filter(Boolean).join(" "); }

const LogoMark = ({ className = "h-10 w-10" }) => (
  <svg viewBox="0 0 128 128" className={className} role="img" aria-label="Logo">
    <defs>
      <linearGradient id="ring" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0" stopColor="#f59e0b" />
        <stop offset="1" stopColor="#f97316" />
      </linearGradient>
      <linearGradient id="leaf" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0" stopColor="#10b981" />
        <stop offset="1" stopColor="#22c55e" />
      </linearGradient>
    </defs>
    <circle cx="64" cy="64" r="58" fill="white" />
    <circle cx="64" cy="64" r="56" fill="none" stroke="url(#ring)" strokeWidth="10" />
    <path d="M36 78c10 10 22 16 36 16s26-6 36-16c-8-4-18-6-36-6s-28 2-36 6z" fill="#0ea5e9" opacity="0.95" />
    <path d="M64 34c10 8 15 18 15 28 0 13-10 24-15 28-5-4-15-15-15-28 0-10 5-20 15-28z" fill="url(#leaf)" />
    <path d="M64 40c6 6 9 13 9 20 0 9-6 17-9 20-3-3-9-11-9-20 0-7 3-14 9-20z" fill="#fb923c" opacity="0.9" />
  </svg>
);

function Section({ id, eyebrow, title, subtitle, children, className }) {
  return (
    <section id={id} className={cn("scroll-mt-24", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} className="max-w-3xl">
          {eyebrow ? (
            <motion.div variants={fadeUp} className="mb-3">
              <Badge className="rounded-full px-3 py-1">{eyebrow}</Badge>
            </motion.div>
          ) : null}
          <motion.h2 variants={fadeUp} className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">{title}</motion.h2>
          {subtitle ? (
            <motion.p variants={fadeUp} className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">{subtitle}</motion.p>
          ) : null}
        </motion.div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function Pill({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1.5 text-sm text-slate-700 shadow-sm backdrop-blur">
      <Icon className="h-4 w-4 text-slate-700" />
      <span className="whitespace-nowrap">{label}</span>
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm backdrop-blur">
      <div className="text-3xl font-semibold tracking-tight text-slate-900">{value}</div>
      <div className="mt-1 text-sm text-slate-600">{label}</div>
    </div>
  );
}

function Feature({ icon: Icon, title, desc }) {
  return (
    <Card className="rounded-2xl border-slate-200 bg-white/70 shadow-sm backdrop-blur">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-sm">
            <Icon className="h-6 w-6 text-slate-800" />
          </div>
          <Badge className="rounded-full">Impact</Badge>
        </div>
        <CardTitle className="mt-3 text-xl">{title}</CardTitle>
        <CardDescription className="text-sm leading-relaxed">{desc}</CardDescription>
      </CardHeader>
    </Card>
  );
}

function Program({ icon: Icon, title, points }) {
  return (
    <Card className="rounded-2xl border-slate-200 bg-white shadow-sm">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50">
            <Icon className="h-6 w-6 text-slate-800" />
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <ul className="space-y-2">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-2 text-sm text-slate-700">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

function PartnerStep({ n, title, desc, icon: Icon }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white">
            <Icon className="h-5 w-5 text-slate-800" />
          </div>
          <div className="text-sm font-semibold text-slate-900">Step {n}</div>
        </div>
        <Badge className="rounded-full">CSR</Badge>
      </div>
      <div className="mt-3 text-lg font-semibold text-slate-900">{title}</div>
      <div className="mt-1 text-sm leading-relaxed text-slate-600">{desc}</div>
    </div>
  );
}

function TeamCard({ name, role }) {
  return (
    <Card className="rounded-2xl border-slate-200 bg-white shadow-sm">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-600" />
          <div>
            <CardTitle className="text-lg">{name}</CardTitle>
            <CardDescription className="text-sm">{role}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex flex-wrap gap-2">
          <Badge className="rounded-full">Leadership</Badge>
          <Badge className="rounded-full">Governance</Badge>
          <Badge className="rounded-full">Compliance</Badge>
        </div>
      </CardContent>
    </Card>
  );
}

function NavLink({ href, children, onClick }) {
  return (
    <a href={href} onClick={onClick} className="text-sm font-medium text-slate-700 hover:text-slate-900">{children}</a>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = useMemo(() => [
    { href: "#about", label: "About" },
    { href: "#vision-mission", label: "Vision & Mission" },
    { href: "#programs", label: "Programs" },
    { href: "#csr", label: "CSR Partnerships" },
    { href: "#donate", label: "Donate" },
    { href: "#team", label: "Team" },
    { href: "#contact", label: "Contact" },
  ], []);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(16,185,129,0.14),transparent_45%),radial-gradient(circle_at_90%_30%,rgba(59,130,246,0.14),transparent_40%),radial-gradient(circle_at_50%_90%,rgba(245,158,11,0.14),transparent_45%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,1),rgba(255,255,255,0.86),rgba(255,255,255,1))]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            {LOGO_URL ? (
              <img src={LOGO_URL} alt="Sparklift logo" className="h-10 w-10 rounded-xl object-contain" />
            ) : (
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm">
                <LogoMark className="h-9 w-9" />
              </div>
            )}
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">Sparklift Global Academy Foundation</div>
              <div className="text-xs text-slate-600">Section 8 Company</div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((n) => <NavLink key={n.href} href={n.href}>{n.label}</NavLink>)}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Button variant="secondary" className="rounded-2xl"><FileText className="mr-2 h-4 w-4" />CSR Proposal</Button>
            <Button className="rounded-2xl"><HandCoins className="mr-2 h-4 w-4" />Donate</Button>
          </div>

          <button className="md:hidden rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm" onClick={() => setMenuOpen((s) => !s)} aria-label="Toggle menu">Menu</button>
        </div>

        {menuOpen ? (
          <div className="md:hidden border-t border-slate-200 bg-white/80 backdrop-blur">
            <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
              <div className="grid gap-3">
                {nav.map((n) => (
                  <NavLink key={n.href} href={n.href} onClick={() => setMenuOpen(false)}>{n.label}</NavLink>
                ))}
                <div className="flex gap-3 pt-2">
                  <Button variant="secondary" className="flex-1 rounded-2xl">CSR Proposal</Button>
                  <Button className="flex-1 rounded-2xl">Donate</Button>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </header>

      <main>
        <section className="relative">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 sm:py-20">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="flex flex-wrap items-center gap-2">
                  <Pill icon={ShieldCheck} label="MCA Registered" />
                  <Pill icon={BadgeCheck} label="CSR-1" />
                  <Pill icon={Globe} label="NITI Aayog" />
                </div>

                <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">Spark Skills, Lift Lives.</h1>
                <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                  Sparklift Global Academy Foundation is a Section 8 non-profit focused on inclusive education, digital literacy,
                  skill development, women empowerment, health awareness, rural upliftment, and sustainable practices.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Button className="rounded-2xl">Explore Programs <ArrowRight className="ml-2 h-4 w-4" /></Button>
                  <Button variant="secondary" className="rounded-2xl">Partner via CSR <Building2 className="ml-2 h-4 w-4" /></Button>
                </div>

                <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  <Stat value="12A & 80G" label="Tax Benefits (as applicable)" />
                  <Stat value="Transparent" label="Monitoring & Reporting" />
                  <Stat value="Community" label="Impact at grassroots" />
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.05 }} className="relative">
                <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-emerald-200/60 via-blue-200/40 to-amber-200/60 blur-2xl" />
                <Card className="relative rounded-[2rem] border-slate-200 bg-white/70 shadow-sm backdrop-blur">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge className="rounded-full">What we do</Badge>
                      <div className="flex items-center gap-2 text-xs text-slate-600"><Sparkles className="h-4 w-4" />Ultra Premium</div>
                    </div>
                    <CardTitle className="mt-3 text-2xl">Programs built for measurable outcomes</CardTitle>
                    <CardDescription className="text-sm leading-relaxed">Designed to serve communities with practical education, skills, and sustainable development initiatives.</CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <div className="flex items-center gap-2 font-semibold"><BookOpen className="h-4 w-4" /> Education & Digital Literacy</div>
                      <div className="mt-1 text-sm text-slate-600">Inclusive learning + digital access.</div>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <div className="flex items-center gap-2 font-semibold"><Briefcase className="h-4 w-4" /> Skills & Employment</div>
                      <div className="mt-1 text-sm text-slate-600">Training that leads to livelihoods.</div>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <div className="flex items-center gap-2 font-semibold"><Users className="h-4 w-4" /> Women Empowerment</div>
                      <div className="mt-1 text-sm text-slate-600">Capability, confidence, and support.</div>
                    </div>
                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <div className="flex items-center gap-2 font-semibold"><Leaf className="h-4 w-4" /> Environment & Sustainability</div>
                      <div className="mt-1 text-sm text-slate-600">Community-led green initiatives.</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <Section id="about" eyebrow="About" title="A trusted foundation for inclusive development"
          subtitle="We work with communities, institutions, and CSR partners to deliver high-impact projects with transparent reporting and measurable results."
          className="py-16 sm:py-20">
          <div className="grid gap-6 lg:grid-cols-3">
            <Feature icon={GraduationCap} title="Inclusive Education" desc="Learning support, school programs, coaching, and digital literacy for all." />
            <Feature icon={HeartHandshake} title="Livelihoods & Empowerment" desc="Skill building, employment readiness, and women-led livelihood support." />
            <Feature icon={Stethoscope} title="Health & Awareness" desc="Health, hygiene, sanitation, and community awareness programs." />
          </div>
        </Section>

        <Section id="vision-mission" eyebrow="Purpose" title="Vision and Mission"
          subtitle="Guided by community needs and a commitment to long-term sustainability."
          className="py-16 sm:py-20">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="rounded-2xl border-slate-200 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">Our Vision</CardTitle>
                <CardDescription>To build a skilled, empowered and self-reliant society through inclusive education, innovation and sustainable development.</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Badge className="rounded-full">Inclusive</Badge>
                <Badge className="rounded-full">Empowered</Badge>
                <Badge className="rounded-full">Sustainable</Badge>
              </CardContent>
            </Card>

            <Card className="rounded-2xl border-slate-200 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">Our Mission</CardTitle>
                <CardDescription>We focus on practical initiatives that improve lives.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {[
                    "Promote Quality Education & Digital Literacy",
                    "Skill Development & Employment Opportunities",
                    "Women Empowerment & Livelihood Support",
                    "Health, Hygiene & Sanitation Awareness",
                    "Rural Development & Community Welfare",
                    "Support for Underprivileged & Vulnerable Groups",
                    "Environment Protection & Sustainable Practices",
                  ].map((m) => (
                    <li key={m} className="flex items-start gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </Section>

        <Section id="contact" eyebrow="Contact" title="Get in touch"
          subtitle="For partnerships, CSR proposals, or program collaboration, contact us."
          className="py-16 sm:py-20">
          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="rounded-2xl border-slate-200 bg-white shadow-sm lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-xl">Send a message</CardTitle>
                <CardDescription>We usually respond within 1–2 business days.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <div className="text-sm font-medium text-slate-800">Full name</div>
                    <Input className="mt-2 rounded-2xl" placeholder="Your name" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-slate-800">Phone</div>
                    <Input className="mt-2 rounded-2xl" placeholder="+91" />
                  </div>
                  <div className="sm:col-span-2">
                    <div className="text-sm font-medium text-slate-800">Email</div>
                    <Input className="mt-2 rounded-2xl" placeholder="you@example.com" />
                  </div>
                  <div className="sm:col-span-2">
                    <div className="text-sm font-medium text-slate-800">Message</div>
                    <Textarea className="mt-2 rounded-2xl" placeholder="Tell us about your requirement..." />
                  </div>
                  <div className="sm:col-span-2">
                    <Button className="rounded-2xl">Send Message <ArrowRight className="ml-2 h-4 w-4" /></Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-6">
              <Card className="rounded-2xl border-slate-200 bg-white shadow-sm">
                <CardHeader><CardTitle className="text-lg">Head Office</CardTitle></CardHeader>
                <CardContent className="pt-0 text-sm text-slate-700">
                  <div className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4" />
                    <div>871, Alafganj Panchayat,<br />Darbhanga – 846004, Bihar</div>
                  </div>
                  <div className="mt-3 flex items-center gap-2"><Phone className="h-4 w-4" /><div>+91 8240352168</div></div>
                  <div className="mt-2 flex items-center gap-2"><Phone className="h-4 w-4" /><div>+91 9830999691</div></div>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-slate-200 bg-white shadow-sm">
                <CardHeader><CardTitle className="text-lg">Email</CardTitle></CardHeader>
                <CardContent className="pt-0 text-sm text-slate-700">
                  <div className="flex items-center gap-2"><Mail className="h-4 w-4" /><div>sparkliftglobal@gmail.com</div></div>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-slate-200 bg-white shadow-sm">
                <CardHeader><CardTitle className="text-lg">CIN</CardTitle></CardHeader>
                <CardContent className="pt-0 text-sm text-slate-700">U8550BR2025NPL079870</CardContent>
              </Card>
            </div>
          </div>
        </Section>

        <footer className="border-t border-slate-200 bg-white/70 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <div className="text-sm font-semibold">Sparklift Global Academy Foundation</div>
                <div className="mt-1 text-xs text-slate-600">© {new Date().getFullYear()} • All rights reserved.</div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Badge className="rounded-full">Education</Badge>
                <Badge className="rounded-full">Skills</Badge>
                <Badge className="rounded-full">Empowerment</Badge>
                <Badge className="rounded-full">Sustainability</Badge>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
