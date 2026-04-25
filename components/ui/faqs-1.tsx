import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const questions = [
  {
    id: 'item-1',
    title: 'How does RoboCompare evaluate and score AI models?',
    content:
      'RoboCompare uses a multi-dimensional benchmark framework that combines standardized academic benchmarks (MMLU, HumanEval, MATH, GPQA) with real-world performance testing across reasoning chains, vision understanding, and robotics control tasks. Scores are normalized to a 0–100 scale for easy comparison. Models are re-evaluated quarterly or when a major version update is released. Our methodology is publicly documented.',
  },
  {
    id: 'item-2',
    title: 'What metrics are used to compare robotics systems?',
    content:
      'We evaluate robotics systems across six primary dimensions: Mobility (locomotion stability, terrain handling, max speed), Dexterity (degrees of freedom, grip precision, tactile sensing), Autonomy (on-device AI, task generalization, error recovery), Payload (sustained and peak lifting capacity), Battery Life (hours of operation per charge, hot-swap support), and Sensor Coverage (vision, LiDAR, depth, IMU). Where possible, scores reflect independently verified manufacturer data.',
  },
  {
    id: 'item-3',
    title: 'Which AI model is best suited for robotics control tasks?',
    content:
      'As of 2025, Google Gemini 1.5 Pro leads our robotics control category due to its strong multimodal spatial reasoning and native integration with Google DeepMind\'s RT-2 and RT-X robotics research. OpenAI GPT-4o and Anthropic Claude 3.5 Sonnet perform better on general reasoning and code generation that drives high-level robot planning. For edge-deployed robotics inference, Meta\'s specialized robotics-tuned Llama variants offer the best performance-per-watt tradeoff.',
  },
  {
    id: 'item-4',
    title: 'How often is the comparison data updated?',
    content:
      'AI model benchmarks are updated within 2 weeks of any new model release or major version update. Robotics hardware data is updated when manufacturers publish new spec sheets, after independent third-party validation reports, or following our direct lab testing sessions. All data entries are timestamped so you can always see when a comparison was last verified. Subscribe to our update feed to get notified of changes.',
  },
  {
    id: 'item-5',
    title: 'Can I compare specific use cases like healthcare or manufacturing?',
    content:
      'Yes. RoboCompare\'s Use Case Filter lets you narrow comparisons to a specific deployment context. Healthcare filtering surfaces models strong in medical image analysis, safety constraints, and HIPAA-aware data handling. Manufacturing filtering emphasizes payload, repeatability, uptime SLAs, and ERP integration. We currently support 12 industry verticals including logistics, defense, agriculture, research labs, and home assistance.',
  },
  {
    id: 'item-6',
    title: 'What is the difference between frontier models and specialized robotics AI?',
    content:
      'Frontier models (GPT-4o, Claude 3.5, Gemini 1.5) are large general-purpose systems trained on internet-scale data. They excel at reasoning, language, and vision but were not specifically optimized for low-latency robotic control or physical embodiment tasks. Specialized robotics AI (RT-2, Octo, OpenVLA, Pi0) are typically smaller transformer or diffusion models fine-tuned on robot teleoperation datasets. They execute motor actions faster but generalize less to novel environments. The best modern systems combine both: a frontier model for task planning and a specialized action model for execution.',
  },
  {
    id: 'item-7',
    title: 'Are the robotics benchmark scores independently verified?',
    content:
      'Wherever possible, yes. For publicly available systems like Spot and Atlas, we cross-reference our scores with peer-reviewed robotics conference papers (ICRA, IROS, CoRL), third-party lab tests, and community-submitted field reports. For systems only available through manufacturer-controlled demos (Tesla Optimus, Figure 02), scores reflect published spec sheets and verified demo footage analysis. We clearly label which scores are manufacturer-claimed vs. independently validated.',
  },
];

export function FaqsSection() {
  return (
    <div className="mx-auto w-full max-w-3xl space-y-7">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-display">Frequently Asked Questions</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Everything you need to know about our comparison methodology.{" "}
          <a href="#" className="text-primary hover:underline">Talk to our research team</a>{" "}
          for deeper analysis.
        </p>
      </div>
      <Accordion
        type="single"
        collapsible
        className="bg-card dark:bg-card/50 w-full -space-y-px rounded-lg"
        defaultValue="item-1"
      >
        {questions.map((item) => (
          <AccordionItem
            value={item.id}
            key={item.id}
            className="relative border-x first:rounded-t-lg first:border-t last:rounded-b-lg last:border-b"
          >
            <AccordionTrigger className="px-4 py-4 text-[15px] leading-6 hover:no-underline text-left">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-4 px-4 leading-relaxed">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
