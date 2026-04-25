import { PlusIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type LogoCloudProps = React.ComponentProps<"div">;

export function LogoCloud({ className, ...props }: LogoCloudProps) {
  return (
    <div
      className={cn("relative grid grid-cols-2 border-x md:grid-cols-4", className)}
      {...props}
    >
      <div className="-translate-x-1/2 -top-px pointer-events-none absolute left-1/2 w-screen border-t" />

      <LogoCard
        className="relative border-r border-b bg-secondary dark:bg-secondary/30"
        logo={{ src: "https://svgl.app/library/nvidia-wordmark-light.svg", alt: "NVIDIA" }}
      >
        <PlusIcon className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6" strokeWidth={1} />
      </LogoCard>

      <LogoCard
        className="border-b md:border-r"
        logo={{ src: "https://svgl.app/library/openai.svg", alt: "OpenAI" }}
      />

      <LogoCard
        className="relative border-r border-b md:bg-secondary dark:md:bg-secondary/30"
        logo={{ src: "https://svgl.app/library/google.svg", alt: "Google DeepMind" }}
      >
        <PlusIcon className="-right-[12.5px] -bottom-[12.5px] absolute z-10 size-6" strokeWidth={1} />
        <PlusIcon className="-bottom-[12.5px] -left-[12.5px] absolute z-10 hidden size-6 md:block" strokeWidth={1} />
      </LogoCard>

      <LogoCard
        className="relative border-b bg-secondary md:bg-background dark:bg-secondary/30 md:dark:bg-background"
        logo={{ src: "https://svgl.app/library/meta.svg", alt: "Meta AI" }}
      />

      <LogoCard
        className="relative border-r border-b bg-secondary md:border-b-0 md:bg-background dark:bg-secondary/30 md:dark:bg-background"
        logo={{ src: "https://svgl.app/library/microsoft.svg", alt: "Microsoft" }}
      >
        <PlusIcon
          className="-right-[12.5px] -bottom-[12.5px] md:-left-[12.5px] absolute z-10 size-6 md:hidden"
          strokeWidth={1}
        />
      </LogoCard>

      <LogoCard
        className="border-b bg-background md:border-r md:border-b-0 md:bg-secondary dark:md:bg-secondary/30"
        logo={{ src: "https://svgl.app/library/hugging-face.svg", alt: "Hugging Face" }}
      />

      <LogoCard
        className="border-r"
        logo={{ src: "https://svgl.app/library/aws.svg", alt: "Amazon Web Services" }}
      />

      <LogoCard
        className="bg-secondary dark:bg-secondary/30"
        logo={{ src: "https://svgl.app/library/tesla.svg", alt: "Tesla Optimus" }}
      />

      <div className="-translate-x-1/2 -bottom-px pointer-events-none absolute left-1/2 w-screen border-b" />
    </div>
  );
}

type LogoCardProps = React.ComponentProps<"div"> & {
  logo: Logo;
};

function LogoCard({ logo, className, children, ...props }: LogoCardProps) {
  return (
    <div
      className={cn("flex items-center justify-center bg-background px-4 py-8 md:p-8", className)}
      {...props}
    >
      <img
        alt={logo.alt}
        className="pointer-events-none h-5 select-none md:h-6 dark:brightness-0 dark:invert"
        height={logo.height || 24}
        src={logo.src}
        width={logo.width || "auto" as unknown as number}
      />
      {children}
    </div>
  );
}
