"use client";

import dynamic from "next/dynamic";
import { Navbar1 } from "@/components/ui/navbar-1";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import { Feature108 } from "@/components/ui/shadcnblocks-com-feature108";
import { LogoCloud } from "@/components/ui/logo-cloud-2";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { FaqsSection } from "@/components/ui/faqs-1";

const SplineScene = dynamic(
  () => import("@/components/ui/splite").then((m) => m.SplineScene),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <span className="loader"></span>
      </div>
    ),
  }
);
const WorldMap = dynamic(
  () => import("@/components/ui/world-map").then((m) => m.WorldMap),
  { ssr: false }
);
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import {
  Brain,
  Cpu,
  Activity,
  Eye,
  Code2,
  Bot,
  Move3D,
  Hand,
  Battery,
  Gauge,
  Package,
  Heart,
  GraduationCap,
  FlaskConical,
  Factory,
  Shield,
  Home as HomeIcon,
  ArrowRight,
  Zap,
  Network,
} from "lucide-react";

// ── Design tokens ─────────────────────────────────────────────────────────────

type GradientKey = "cyan" | "blue" | "purple" | "green" | "orange" | "red" | "yellow";
const GRADIENTS: Record<GradientKey, string> = {
  cyan:   "from-cyan-500 to-blue-500",
  blue:   "from-blue-500 to-indigo-500",
  purple: "from-purple-500 to-pink-500",
  green:  "from-green-500 to-emerald-400",
  orange: "from-orange-500 to-amber-400",
  red:    "from-red-500 to-rose-400",
  yellow: "from-yellow-400 to-orange-400",
};

// ── Data ──────────────────────────────────────────────────────────────────────

const aiModels = [
  {
    name: "GPT-4o",
    maker: "OpenAI",
    tier: "Frontier",
    gradient: "cyan" as GradientKey,
    tierClass: "border-cyan-500/30 bg-cyan-500/10 text-cyan-400",
    metrics: [
      { label: "Reasoning",       value: 95, icon: Brain },
      { label: "Coding",          value: 92, icon: Code2 },
      { label: "Vision",          value: 90, icon: Eye },
      { label: "Robotics Control",value: 55, icon: Bot },
      { label: "Speed",           value: 72, icon: Zap },
    ],
    specs: { context: "128K tokens", cost: "$$$$", latency: "~500 ms" },
  },
  {
    name: "Claude 3.5 Sonnet",
    maker: "Anthropic",
    tier: "Frontier",
    gradient: "orange" as GradientKey,
    tierClass: "border-orange-500/30 bg-orange-500/10 text-orange-400",
    metrics: [
      { label: "Reasoning",       value: 97, icon: Brain },
      { label: "Coding",          value: 96, icon: Code2 },
      { label: "Vision",          value: 87, icon: Eye },
      { label: "Robotics Control",value: 60, icon: Bot },
      { label: "Speed",           value: 65, icon: Zap },
    ],
    specs: { context: "200K tokens", cost: "$$$", latency: "~600 ms" },
  },
  {
    name: "Gemini 1.5 Pro",
    maker: "Google DeepMind",
    tier: "Frontier",
    gradient: "blue" as GradientKey,
    tierClass: "border-blue-500/30 bg-blue-500/10 text-blue-400",
    metrics: [
      { label: "Reasoning",       value: 90, icon: Brain },
      { label: "Coding",          value: 85, icon: Code2 },
      { label: "Vision",          value: 93, icon: Eye },
      { label: "Robotics Control",value: 72, icon: Bot },
      { label: "Speed",           value: 76, icon: Zap },
    ],
    specs: { context: "1M tokens", cost: "$$$", latency: "~700 ms" },
  },
  {
    name: "Llama 3.1 405B",
    maker: "Meta AI",
    tier: "Open Source",
    gradient: "green" as GradientKey,
    tierClass: "border-green-500/30 bg-green-500/10 text-green-400",
    metrics: [
      { label: "Reasoning",       value: 85, icon: Brain },
      { label: "Coding",          value: 82, icon: Code2 },
      { label: "Vision",          value: 70, icon: Eye },
      { label: "Robotics Control",value: 45, icon: Bot },
      { label: "Speed",           value: 38, icon: Zap },
    ],
    specs: { context: "128K tokens", cost: "Free", latency: "~1200 ms" },
  },
  {
    name: "Grok-2",
    maker: "xAI",
    tier: "Frontier",
    gradient: "purple" as GradientKey,
    tierClass: "border-purple-500/30 bg-purple-500/10 text-purple-400",
    metrics: [
      { label: "Reasoning",       value: 88, icon: Brain },
      { label: "Coding",          value: 84, icon: Code2 },
      { label: "Vision",          value: 82, icon: Eye },
      { label: "Robotics Control",value: 48, icon: Bot },
      { label: "Speed",           value: 81, icon: Zap },
    ],
    specs: { context: "131K tokens", cost: "$$$", latency: "~450 ms" },
  },
];

const roboticsSystems = [
  {
    name: "Optimus Gen 2",
    maker: "Tesla",
    tier: "Humanoid",
    gradient: "red" as GradientKey,
    tierClass: "border-red-500/30 bg-red-500/10 text-red-400",
    metrics: [
      { label: "Mobility",   value: 78, icon: Move3D },
      { label: "Dexterity",  value: 90, icon: Hand },
      { label: "Autonomy",   value: 65, icon: Brain },
      { label: "Payload",    value: 72, icon: Gauge },
      { label: "Battery",    value: 55, icon: Battery },
    ],
    specs: { height: "1.72 m", weight: "57 kg", dof: "28 DOF" },
  },
  {
    name: "Atlas",
    maker: "Boston Dynamics",
    tier: "Humanoid",
    gradient: "cyan" as GradientKey,
    tierClass: "border-cyan-500/30 bg-cyan-500/10 text-cyan-400",
    metrics: [
      { label: "Mobility",   value: 97, icon: Move3D },
      { label: "Dexterity",  value: 88, icon: Hand },
      { label: "Autonomy",   value: 72, icon: Brain },
      { label: "Payload",    value: 65, icon: Gauge },
      { label: "Battery",    value: 50, icon: Battery },
    ],
    specs: { height: "1.50 m", weight: "89 kg", dof: "28 DOF" },
  },
  {
    name: "Figure 02",
    maker: "Figure AI",
    tier: "Humanoid",
    gradient: "blue" as GradientKey,
    tierClass: "border-blue-500/30 bg-blue-500/10 text-blue-400",
    metrics: [
      { label: "Mobility",   value: 82, icon: Move3D },
      { label: "Dexterity",  value: 85, icon: Hand },
      { label: "Autonomy",   value: 78, icon: Brain },
      { label: "Payload",    value: 80, icon: Gauge },
      { label: "Battery",    value: 62, icon: Battery },
    ],
    specs: { height: "1.70 m", weight: "70 kg", dof: "44 DOF" },
  },
  {
    name: "H1 Pro",
    maker: "Unitree",
    tier: "Humanoid",
    gradient: "green" as GradientKey,
    tierClass: "border-green-500/30 bg-green-500/10 text-green-400",
    metrics: [
      { label: "Mobility",   value: 88, icon: Move3D },
      { label: "Dexterity",  value: 72, icon: Hand },
      { label: "Autonomy",   value: 55, icon: Brain },
      { label: "Payload",    value: 58, icon: Gauge },
      { label: "Battery",    value: 65, icon: Battery },
    ],
    specs: { height: "1.80 m", weight: "47 kg", dof: "27 DOF" },
  },
  {
    name: "Spot",
    maker: "Boston Dynamics",
    tier: "Quadruped",
    gradient: "yellow" as GradientKey,
    tierClass: "border-yellow-500/30 bg-yellow-500/10 text-yellow-400",
    metrics: [
      { label: "Mobility",   value: 94, icon: Move3D },
      { label: "Dexterity",  value: 58, icon: Hand },
      { label: "Autonomy",   value: 90, icon: Brain },
      { label: "Payload",    value: 42, icon: Gauge },
      { label: "Battery",    value: 84, icon: Battery },
    ],
    specs: { height: "0.84 m", weight: "32 kg", dof: "12 DOF" },
  },
];

const experts = [
  {
    text: "RoboCompare is the resource I wish existed when we were evaluating foundation models for our robotic manipulation pipeline. The robotics control metrics cut through the noise.",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    name: "Dr. Marcus Chen",
    role: "Principal Researcher, Carnegie Mellon Robotics Institute",
  },
  {
    text: "We evaluated seven humanoid platforms before choosing. Having all mobility, dexterity, and autonomy scores in one place saved our engineering team three weeks of spreadsheet hell.",
    image: "https://randomuser.me/api/portraits/women/23.jpg",
    name: "Dr. Aisha Patel",
    role: "Head of Automation, Hyundai Advanced Manufacturing",
  },
  {
    text: "The context window comparison for long-horizon robotic task planning is something no other benchmark site covers. This helped us pick Gemini 1.5 Pro for our warehouse orchestration system.",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    name: "James Kobayashi",
    role: "VP of Engineering, Symbotic",
  },
  {
    text: "Open-source vs. frontier model tradeoffs for edge-deployed robots are not covered anywhere else at this depth. Llama 3.1 405B surprisingly holds its own for structured task execution.",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    name: "Dr. Lena Bergström",
    role: "AI Research Lead, ABB Robotics",
  },
  {
    text: "The battery life and payload benchmarks align almost exactly with our own internal testing. That level of accuracy earns trust — we now reference RoboCompare in our procurement reports.",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    name: "Tomás Vargas",
    role: "Director of Operations Technology, Ceva Logistics",
  },
  {
    text: "I use this in every new-hire onboarding for robotics engineers. The side-by-side DOF, sensor coverage, and autonomy comparisons give instant intuition about the design space.",
    image: "https://randomuser.me/api/portraits/women/36.jpg",
    name: "Prof. Yuki Tanaka",
    role: "Associate Professor of Robotics, MIT CSAIL",
  },
  {
    text: "Claude 3.5 Sonnet's coding score reflects exactly what we see on our robotics planning stack — it produces cleaner motion primitives than anything we've tested. The benchmark is legit.",
    image: "https://randomuser.me/api/portraits/men/78.jpg",
    name: "Arjun Mehta",
    role: "Staff Software Engineer, Agility Robotics",
  },
  {
    text: "Spot's autonomy score versus Atlas's mobility score tells the whole story. Different robots, different problems. RoboCompare makes that obvious in 30 seconds.",
    image: "https://randomuser.me/api/portraits/women/82.jpg",
    name: "Sarah Okonkwo",
    role: "Founder, Fieldwork Robotics",
  },
  {
    text: "We piloted three AI models for surgical assistance guidance. The vision and reasoning combined scores from RoboCompare predicted our clinical validation results within 4 percentage points.",
    image: "https://randomuser.me/api/portraits/men/19.jpg",
    name: "Dr. Nikolai Petrov",
    role: "Chief Innovation Officer, Intuitive Surgical",
  },
];

const firstCol  = experts.slice(0, 3);
const secondCol = experts.slice(3, 6);
const thirdCol  = experts.slice(6, 9);

const mapDots = [
  { start: { lat: 37.7749, lng: -122.4194 }, end: { lat: 51.5074, lng: -0.1278 } },
  { start: { lat: 35.6762, lng: 139.6503 }, end: { lat: 37.5665, lng: 126.9780 } },
  { start: { lat: 52.5200, lng: 13.4050 }, end: { lat: 48.8566, lng: 2.3522 } },
  { start: { lat: 40.7128, lng: -74.0060 }, end: { lat: 19.0760, lng: 72.8777 } },
  { start: { lat: -23.5505, lng: -46.6333 }, end: { lat: -33.8688, lng: 151.2093 } },
  { start: { lat: 55.7558, lng: 37.6173 }, end: { lat: 39.9042, lng: 116.4074 } },
];

const useCases = [
  {
    icon: Heart,
    title: "Healthcare",
    description: "Surgical assistance, drug dispensing, patient monitoring, and rehabilitation support.",
    stat: "43% efficiency gain",
    color: "text-red-400",
    border: "hover:border-red-500/40",
    glow: "hover:shadow-red-500/10",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Assembly lines, precision welding, quality control, and hazardous material handling.",
    stat: "3.2× throughput",
    color: "text-orange-400",
    border: "hover:border-orange-500/40",
    glow: "hover:shadow-orange-500/10",
  },
  {
    icon: Package,
    title: "Warehousing",
    description: "Order picking, inventory management, last-mile loading, and 22-hour continuous operation.",
    stat: "22 hr/day operation",
    color: "text-yellow-400",
    border: "hover:border-yellow-500/40",
    glow: "hover:shadow-yellow-500/10",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Personalized tutoring, STEM lab assistance, and scalable research support at universities.",
    stat: "15M students served",
    color: "text-green-400",
    border: "hover:border-green-500/40",
    glow: "hover:shadow-green-500/10",
  },
  {
    icon: Shield,
    title: "Defense & Safety",
    description: "Reconnaissance, bomb disposal, search and rescue in environments too dangerous for humans.",
    stat: "Zero casualty missions",
    color: "text-cyan-400",
    border: "hover:border-cyan-500/40",
    glow: "hover:shadow-cyan-500/10",
  },
  {
    icon: FlaskConical,
    title: "Research Labs",
    description: "Automated experiments, 24/7 data collection, and high-throughput hypothesis testing.",
    stat: "10× experiment rate",
    color: "text-blue-400",
    border: "hover:border-blue-500/40",
    glow: "hover:shadow-blue-500/10",
  },
  {
    icon: HomeIcon,
    title: "Home Assistance",
    description: "Elderly care, household chores, companionship, and accessibility support for mobility-impaired individuals.",
    stat: "82% user satisfaction",
    color: "text-purple-400",
    border: "hover:border-purple-500/40",
    glow: "hover:shadow-purple-500/10",
  },
];

const feature108Tabs = [
  {
    value: "tab-1",
    icon: <Brain className="h-auto w-4 shrink-0" />,
    label: "AI Reasoning",
    content: {
      badge: "Language & Logic",
      title: "Why reasoning is the core metric for AI comparison.",
      description:
        "Frontier models are diverging most sharply on complex multi-step reasoning tasks. RoboCompare evaluates chain-of-thought accuracy, mathematical proof verification, and causal inference — the three capabilities that most predict performance on real robotics planning tasks.",
      bullets: [
        "GPQA diamond-level benchmark: measures graduate-level scientific reasoning beyond pattern matching",
        "Multi-hop reasoning chains: how many logical steps a model maintains coherently before degrading",
        "Counterfactual understanding: critical for robotic exception handling and anomaly recovery",
        "Tool-use and function-calling accuracy: the bridge between language reasoning and physical action",
      ],
      buttonText: "Explore AI Rankings",
      imageSrc: "https://picsum.photos/seed/ai-reasoning/600/400",
      imageAlt: "AI reasoning benchmark visualization",
    },
  },
  {
    value: "tab-2",
    icon: <Bot className="h-auto w-4 shrink-0" />,
    label: "Robotics Autonomy",
    content: {
      badge: "Physical Intelligence",
      title: "Autonomy is what separates a robot from a tool.",
      description:
        "We measure autonomy along three axes: environmental generalization (can the robot work in spaces it has never seen?), exception handling (what happens when a task fails mid-execution?), and skill acquisition rate (how quickly can the system learn a new manipulation task?)",
      bullets: [
        "Zero-shot environment transfer: tested in 8 unseen real-world facility layouts",
        "Task recovery rate: percentage of exception events resolved autonomously without human intervention",
        "72-hour new task onboarding: how long from demonstration to reliable production deployment",
        "Fleet-wide skill sharing: can one unit's learned skill be transferred to a 100-unit fleet in under 24 hours?",
      ],
      buttonText: "View Robotics Rankings",
      imageSrc: "https://picsum.photos/seed/robot-autonomy/600/400",
      imageAlt: "Robotics autonomy benchmark visualization",
    },
  },
  {
    value: "tab-3",
    icon: <Network className="h-auto w-4 shrink-0" />,
    label: "Real-World Integration",
    content: {
      badge: "Enterprise Deployment",
      title: "The gap between benchmark and production is where robots fail.",
      description:
        "Theoretical specs rarely predict real-world performance. RoboCompare tracks integration complexity (ERP/WMS connectors, API surface quality), operational reliability (MTBF, uptime in continuous operation), and total cost of deployment — the metrics that actually determine ROI.",
      bullets: [
        "ERP/WMS native connector availability: SAP, Oracle, Manhattan Associates, Blue Yonder, Infor",
        "Mean time between failures (MTBF) from aggregated operator reports across 180+ deployments",
        "Total cost of ownership at 12 months including hardware, labor, training, and maintenance",
        "Deployment timeline: average days from delivery to first production-ready workflow",
      ],
      buttonText: "Compare Deployment Data",
      imageSrc: "https://picsum.photos/seed/integration-factory/600/400",
      imageAlt: "Enterprise robotics integration dashboard",
    },
  },
];

// ── Shared layout primitives ──────────────────────────────────────────────────

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={`py-24 px-4 sm:px-6 ${className}`}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}

function SectionHeader({
  badge,
  heading,
  sub,
}: {
  badge: string;
  heading: React.ReactNode;
  sub?: string;
}) {
  return (
    <div className="text-center mb-16">
      <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
        {badge}
      </Badge>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-display">
        {heading}
      </h2>
      {sub && (
        <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto leading-relaxed">
          {sub}
        </p>
      )}
    </div>
  );
}

function MetricBar({
  label,
  value,
  gradient,
  Icon: IconComp,
}: {
  label: string;
  value: number;
  gradient: GradientKey;
  Icon: React.ElementType;
}) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <IconComp className="w-3 h-3" />
          {label}
        </span>
        <span className="font-semibold tabular-nums text-foreground">{value}</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${GRADIENTS[gradient]}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        />
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">

      {/* ── Navbar ── */}
      <Navbar1 />

      {/* ── 1. Hero ── */}
      <section className="pb-16 px-4 sm:px-6">
        <Card className="w-full h-[520px] bg-black/[0.96] relative overflow-hidden rounded-2xl border-white/5">
          <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
          <div className="flex h-full">
            <div className="flex-1 p-10 relative z-10 flex flex-col justify-center gap-6">
              <div className="inline-flex w-fit items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary backdrop-blur-sm">
                2025 · AI × Robotics Intelligence Platform
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-tight font-display">
                  Robotics Meets<br />AI Intelligence
                </h1>
                <p className="mt-4 text-neutral-400 max-w-md text-base leading-relaxed">
                  The definitive platform for comparing modern robotics systems and
                  AI models — evaluated on speed, reasoning, autonomy, dexterity,
                  and real-world deployment readiness.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/80 px-6">
                  Start Comparing
                </Button>
                <Button variant="outline" className="rounded-full border-white/15 text-white/70 hover:text-white hover:border-white/30 px-6">
                  View Methodology <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-x-8 gap-y-2 pt-2 border-t border-white/10">
                {[
                  ["30+", "AI Models"],
                  ["15+", "Robot Systems"],
                  ["200+", "Benchmarks"],
                  ["12", "Use Cases"],
                ].map(([value, label]) => (
                  <div key={value} className="flex flex-col">
                    <span className="text-white text-sm font-semibold font-display">{value}</span>
                    <span className="text-neutral-500 text-xs">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 relative hidden sm:block">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </Card>
      </section>

      {/* ── 2. AI Models Comparison ── */}
      <Section>
        <SectionHeader
          badge="AI Model Rankings"
          heading="Compare frontier AI models"
          sub="Evaluated across reasoning, coding, vision, robotics control, and response speed. Updated quarterly."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {aiModels.map((model, idx) => (
            <motion.div
              key={model.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <Card className="h-full border-border/60 bg-card/80 backdrop-blur-sm hover:border-white/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <CardTitle className="text-base font-semibold font-display">{model.name}</CardTitle>
                      <CardDescription className="text-xs mt-0.5">{model.maker}</CardDescription>
                    </div>
                    <Badge className={`text-[10px] border shrink-0 ${model.tierClass}`}>
                      {model.tier}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {model.metrics.map((m) => (
                    <MetricBar
                      key={m.label}
                      label={m.label}
                      value={m.value}
                      gradient={model.gradient}
                      Icon={m.icon}
                    />
                  ))}
                </CardContent>
                <CardFooter className="border-t border-white/5 pt-3 pb-4 px-6 flex gap-4 text-[11px] text-muted-foreground flex-wrap">
                  <span>{model.specs.context}</span>
                  <span>·</span>
                  <span>Cost: {model.specs.cost}</span>
                  <span>·</span>
                  <span>{model.specs.latency}</span>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── 3. Robotics Systems Comparison ── */}
      <Section className="bg-muted/20">
        <SectionHeader
          badge="Robotics Systems"
          heading="Compare leading robot platforms"
          sub="Mobility, dexterity, autonomy, payload, and battery life — independently benchmarked across 15+ systems."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {roboticsSystems.map((robot, idx) => (
            <motion.div
              key={robot.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <Card className="h-full border-border/60 bg-card/80 backdrop-blur-sm hover:border-white/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <CardTitle className="text-base font-semibold font-display">{robot.name}</CardTitle>
                      <CardDescription className="text-xs mt-0.5">{robot.maker}</CardDescription>
                    </div>
                    <Badge className={`text-[10px] border shrink-0 ${robot.tierClass}`}>
                      {robot.tier}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {robot.metrics.map((m) => (
                    <MetricBar
                      key={m.label}
                      label={m.label}
                      value={m.value}
                      gradient={robot.gradient}
                      Icon={m.icon}
                    />
                  ))}
                </CardContent>
                <CardFooter className="border-t border-white/5 pt-3 pb-4 px-6 flex gap-4 text-[11px] text-muted-foreground flex-wrap">
                  <span>{robot.specs.height}</span>
                  <span>·</span>
                  <span>{robot.specs.weight}</span>
                  <span>·</span>
                  <span>{robot.specs.dof}</span>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── 4. Interactive AI Showcase (EvervaultCard) ── */}
      <Section>
        <SectionHeader
          badge="Interactive Showcase"
          heading="Experience AI intelligence"
          sub="Hover over each model card to visualize the neural activation patterns powering modern AI systems."
        />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { text: "GPT-4o",  label: "OpenAI · Frontier",     sub: "95 reasoning · 90 vision" },
            { text: "Claude",  label: "Anthropic · Frontier",   sub: "97 reasoning · 96 coding" },
            { text: "Gemini",  label: "Google · Frontier",      sub: "93 vision · 72 robotics" },
          ].map(({ text, label, sub }) => (
            <div key={text} className="border border-border/60 flex flex-col items-start p-4 relative h-72 bg-card/40 backdrop-blur-sm rounded-xl hover:border-primary/30 transition-colors">
              <Icon className="absolute h-6 w-6 -top-3 -left-3 text-primary/60" />
              <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-primary/60" />
              <Icon className="absolute h-6 w-6 -top-3 -right-3 text-primary/60" />
              <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-primary/60" />
              <EvervaultCard text={text} />
              <p className="text-muted-foreground mt-2 text-xs font-medium">{label}</p>
              <span className="text-xs border border-border/60 rounded-full mt-1.5 text-muted-foreground px-3 py-0.5">
                {sub}
              </span>
            </div>
          ))}
        </div>
      </Section>

      {/* ── 5. Capabilities Tabs (Feature108) ── */}
      <Feature108
        badge="How We Compare"
        heading="Three pillars of intelligent comparison"
        description="AI reasoning depth, robotics physical autonomy, and real-world deployment — evaluated with rigor, published with transparency."
        tabs={feature108Tabs}
      />

      {/* ── 6. Ecosystem Partners (LogoCloud) ── */}
      <Section className="bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            badge="Ecosystem"
            heading="The companies shaping the future"
            sub="From AI research labs to robotics manufacturers — the organizations driving the intelligence revolution."
          />
          <LogoCloud />
        </div>
      </Section>

      {/* ── 7. Expert Opinions (TestimonialsColumn) ── */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <SectionHeader
            badge="Expert Voices"
            heading="Trusted by engineers and researchers"
            sub="From robotics labs to enterprise automation teams — here's what practitioners say after using RoboCompare in production decisions."
          />
        </motion.div>
        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstCol} duration={15} />
          <TestimonialsColumn testimonials={secondCol} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdCol} className="hidden lg:block" duration={17} />
        </div>
      </Section>

      {/* ── 8. Global Intelligence Network (WorldMap) ── */}
      <Section className="bg-muted/20">
        <SectionHeader
          badge="Global Network"
          heading={
            <>
              Intelligence deployed across{" "}
              <motion.span
                className="text-muted-foreground"
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                6 continents
              </motion.span>
            </>
          }
          sub="Robotics deployments and AI model inference nodes spanning every major industrial region on Earth."
        />
        <WorldMap dots={mapDots} lineColor="#22d3ee" />
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 mt-10">
          {[
            ["2,400+", "Active Robot Units"],
            ["63",     "Countries"],
            ["99.4%",  "Platform Uptime"],
            ["18M+",   "Tasks Completed"],
          ].map(([value, label]) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-bold tracking-tight text-foreground font-display">{value}</div>
              <div className="text-sm text-muted-foreground mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── 9. Use Cases ── */}
      <Section>
        <SectionHeader
          badge="Use Cases"
          heading="Every industry. Every environment."
          sub="From hospital operating rooms to deep-sea research vessels — compare which AI models and robots perform best in your domain."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {useCases.map((uc, idx) => (
            <motion.div
              key={uc.title}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
            >
              <Card
                className={`h-full border-border/60 bg-card/60 backdrop-blur-sm transition-all duration-300 cursor-pointer hover:shadow-xl ${uc.border} ${uc.glow}`}
              >
                <CardHeader className="pb-2">
                  <div className={`w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center mb-2 ${uc.color}`}>
                    <uc.icon className="w-5 h-5" />
                  </div>
                  <CardTitle className="text-sm font-semibold font-display">{uc.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-xs leading-relaxed">{uc.description}</CardDescription>
                </CardContent>
                <CardFooter className="pt-0 pb-4 px-6">
                  <span className={`text-[11px] font-semibold ${uc.color}`}>{uc.stat}</span>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── 10. FAQ ── */}
      <Section className="bg-muted/20">
        <FaqsSection />
      </Section>

      {/* ── 11. Final CTA ── */}
      <section className="py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden border-white/5 bg-black/[0.96]">
            <Spotlight className="-top-40 -left-20 md:left-1/4 md:-top-20" fill="#22d3ee" />
            <div className="relative z-10 flex flex-col items-center text-center gap-6 py-20 px-8">
              <Badge variant="outline" className="border-primary/30 text-primary">
                Ready to explore?
              </Badge>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 font-display max-w-2xl leading-tight">
                Understand the future of robotics and AI.
              </h2>
              <p className="text-neutral-400 max-w-xl text-base leading-relaxed">
                Compare 30+ AI models and 15+ robotics systems side by side.
                Filter by use case, budget, and technical requirements.
                Make faster, smarter decisions.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/80 px-8">
                  Start Comparing Free
                </Button>
                <Button size="lg" variant="outline" className="rounded-full border-white/15 text-white/70 hover:text-white hover:border-white/30 px-8">
                  View Full Methodology
                </Button>
              </div>
              <p className="text-neutral-600 text-xs mt-2">
                No account required · Updated quarterly · Open methodology
              </p>
            </div>
          </Card>
        </div>
      </section>

    </main>
  );
}
