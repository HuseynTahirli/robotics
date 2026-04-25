import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Cpu, Fingerprint, Network } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface TabContent {
  badge: string;
  title: string;
  description: string;
  bullets: string[];
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
}

interface Tab {
  value: string;
  icon: React.ReactNode;
  label: string;
  content: TabContent;
}

interface Feature108Props {
  badge?: string;
  heading?: string;
  description?: string;
  tabs?: Tab[];
}

const Feature108 = ({
  badge = "Capabilities",
  heading = "Engineering built for the real world",
  description = "Three integrated systems that make AION One the most deployable humanoid robot in production today.",
  tabs = [
    {
      value: "tab-1",
      icon: <Cpu className="h-auto w-4 shrink-0" />,
      label: "NeuroCore AI",
      content: {
        badge: "On-Device Intelligence",
        title: "The robot that thinks before it moves.",
        description:
          "AION One runs on NeuroCore v3 — a vision-language-action model trained on 40 million hours of demonstrated human motion. It reasons about its environment in real time, handles unexpected obstacles autonomously, and updates from operator feedback without re-programming.",
        bullets: [
          "Natural language task assignment via Fleet OS dashboard or voice",
          "All inference runs on-device — no cloud dependency, no data leaves your facility",
          "New task mastery in an average of 72 hours via teleoperation fine-tuning",
          "Fleet-wide skill sharing: train once, deploy to all units within 24 hours",
        ],
        buttonText: "Explore NeuroCore",
        imageSrc: "https://shadcnblocks.com/images/block/placeholder-dark-1.svg",
        imageAlt: "NeuroCore AI dashboard",
      },
    },
    {
      value: "tab-2",
      icon: <Fingerprint className="h-auto w-4 shrink-0" />,
      label: "Dexterity & Mobility",
      content: {
        badge: "43 Degrees of Freedom",
        title: "Built for tasks designed around human hands.",
        description:
          "AION One's 43-DOF kinematic system and 30-DOF hands perform the same tasks your workers do — handling fragile items, operating tools, reaching overhead conveyors — without costly workstation redesigns.",
        bullets: [
          "30-DOF dexterous hands with 48-point tactile skin for fragile object handling",
          "22 kg sustained payload / 35 kg peak — heavier than most manual handling limits",
          "2.1m vertical reach with ±170° shoulder rotation, no special fixturing needed",
          "IP65 body / IP68 hands — rated for dust, coolant, water spray, and cleaning chemicals",
        ],
        buttonText: "View Full Specs",
        imageSrc: "https://shadcnblocks.com/images/block/placeholder-dark-2.svg",
        imageAlt: "AION One dexterity demonstration",
      },
    },
    {
      value: "tab-3",
      icon: <Network className="h-auto w-4 shrink-0" />,
      label: "Fleet OS",
      content: {
        badge: "Enterprise Integration",
        title: "One robot. Or one thousand. Same command center.",
        description:
          "AION Fleet OS connects directly to your existing WMS, MES, and ERP platforms. AION One reads work orders, updates inventory, and logs task completion in real time — without replacing your existing stack.",
        bullets: [
          "Native connectors for SAP, Oracle, Manhattan Associates, Blue Yonder, and Infor",
          "Real-time fleet telemetry: battery, task progress, location, and health across all sites",
          "Predictive maintenance alerts 7–14 days in advance — up to 73% less unplanned downtime",
          "Digital twin simulation to validate workflows before Day 1 deployment",
        ],
        buttonText: "See Fleet OS",
        imageSrc: "https://shadcnblocks.com/images/block/placeholder-dark-3.svg",
        imageAlt: "AION Fleet OS dashboard",
      },
    },
  ],
}: Feature108Props) => {
  return (
    <section className="py-24">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge variant="outline">{badge}</Badge>
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">{heading}</h2>
          <p className="text-muted-foreground text-lg max-w-xl">{description}</p>
        </div>
        <Tabs defaultValue={tabs[0].value} className="mt-12">
          <TabsList className="container flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-10">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-muted-foreground data-[state=active]:bg-muted data-[state=active]:text-primary"
              >
                {tab.icon} {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="mx-auto mt-8 max-w-screen-xl rounded-2xl bg-muted/70 p-6 lg:p-16">
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="grid place-items-center gap-12 lg:grid-cols-2 lg:gap-10"
              >
                <div className="flex flex-col gap-5">
                  <Badge variant="outline" className="w-fit bg-background">
                    {tab.content.badge}
                  </Badge>
                  <h3 className="text-3xl font-bold tracking-tight lg:text-4xl">{tab.content.title}</h3>
                  <p className="text-muted-foreground lg:text-base leading-relaxed">{tab.content.description}</p>
                  <ul className="space-y-2">
                    {tab.content.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <Button className="mt-2.5 w-fit gap-2" size="lg">
                    {tab.content.buttonText}
                  </Button>
                </div>
                <img src={tab.content.imageSrc} alt={tab.content.imageAlt} className="rounded-xl w-full" />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export { Feature108 };
