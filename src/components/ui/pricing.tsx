
"use client";

import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { useState, useRef } from "react";
import confetti from "canvas-confetti";

interface PricingPlan {
  name: string;
  price: string;
  yearlyPrice: string;
  semestralPrice: string;
  period: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
  migrationFee?: string;
}

interface PricingProps {
  plans: PricingPlan[];
  title?: string;
  description?: string;
}

export function Pricing({
  plans,
  title = "Planos SmootTech",
  description = "Escolha o plano ideal para impulsionar a gestão do seu estabelecimento com SmootTech!",
}: PricingProps) {
  const [isMonthly, setIsMonthly] = useState(true);
  const switchRef = useRef<HTMLButtonElement>(null);

  const handleToggle = (checked: boolean) => {
    setIsMonthly(!checked);
    if (checked && switchRef.current) {
      const rect = switchRef.current.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;

      confetti({
        particleCount: 50,
        spread: 60,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight,
        },
        colors: [
          "hsl(var(--primary))",
          "hsl(var(--accent))",
          "hsl(var(--secondary))",
          "hsl(var(--muted))",
        ],
        ticks: 200,
        gravity: 1.2,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["circle"],
      });
    }
  };

  return (
    <div className="container py-20">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-white">
          {title}
        </h2>
        <p className="text-white/80 text-lg whitespace-pre-line">
          {description}
        </p>
      </div>

      <div className="flex justify-center items-center mb-10 gap-4">
        <span className="font-semibold text-white">Mensal</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <Label>
            <Switch
              ref={switchRef as any}
              checked={!isMonthly}
              onCheckedChange={handleToggle}
              className="relative"
            />
          </Label>
        </label>
        <span className="font-semibold text-white">
          Anual <span className="text-[rgba(109,141,176,1)]">(Ganhe 2 meses grátis)</span>
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 100,
              damping: 30,
              delay: index * 0.1,
            }}
            className={cn(
              `rounded-2xl border-[1px] p-8 bg-white/5 backdrop-blur-sm text-center flex flex-col justify-between relative`,
              plan.isPopular ? "border-[rgba(109,141,176,1)] border-2" : "border-white/20",
              "min-h-[600px]"
            )}
          >
            {plan.isPopular && (
              <div className="absolute top-0 right-0 bg-[rgba(109,141,176,1)] py-1 px-3 rounded-bl-xl rounded-tr-xl flex items-center">
                <Star className="text-white h-4 w-4 fill-current" />
                <span className="text-white ml-1 font-sans font-semibold">
                  Mais Popular
                </span>
              </div>
            )}
            
            <div className="flex-1 flex flex-col">
              <p className="text-xl font-bold text-white mb-2">
                {plan.name}
              </p>
              
              <div className="mt-6 flex items-center justify-center gap-x-2">
                <span className="text-5xl font-bold tracking-tight text-white">
                  R$ {isMonthly ? plan.price : plan.yearlyPrice}
                </span>
                <span className="text-sm font-semibold leading-6 tracking-wide text-white/80">
                  / mês
                </span>
              </div>

              <p className="text-sm leading-5 text-white/80 mb-6">
                {isMonthly ? "Cobrança mensal" : "Cobrança anual (equivalente a 10 meses)"}
              </p>

              {!isMonthly && (
                <div className="bg-[rgba(109,141,176,0.2)] rounded-lg p-3 mb-6">
                  <p className="text-white text-sm font-semibold">
                    💰 Migração do sistema antigo GRATUITA
                  </p>
                </div>
              )}

              {isMonthly && plan.migrationFee && (
                <div className="bg-white/10 rounded-lg p-3 mb-6">
                  <p className="text-white text-sm">
                    Taxa única de migração: {plan.migrationFee}
                  </p>
                </div>
              )}

              <ul className="mt-5 gap-3 flex flex-col text-left">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[rgba(109,141,176,1)] mt-0.5 flex-shrink-0" />
                    <span className="text-white">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <hr className="w-full my-6 border-white/20" />
              
              <button
                className={cn(
                  buttonVariants({
                    variant: "outline",
                  }),
                  "group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tighter",
                  "transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-[rgba(109,141,176,1)] hover:ring-offset-1",
                  plan.isPopular
                    ? "bg-[rgba(109,141,176,1)] text-white hover:bg-[rgba(89,121,156,1)] border-[rgba(109,141,176,1)]"
                    : "bg-transparent text-white hover:bg-[rgba(109,141,176,1)] border-white/30"
                )}
              >
                {plan.buttonText}
              </button>
              
              <p className="mt-4 text-sm leading-5 text-white/70">
                {plan.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-4">Benefícios Inclusos em Todos os Planos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="flex items-start gap-3">
              <Check className="h-5 w-5 text-[rgba(109,141,176,1)] mt-0.5 flex-shrink-0" />
              <span className="text-white">Suporte técnico via chat, e-mail e telefone</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="h-5 w-5 text-[rgba(109,141,176,1)] mt-0.5 flex-shrink-0" />
              <span className="text-white">Treinamento inicial gratuito</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="h-5 w-5 text-[rgba(109,141,176,1)] mt-0.5 flex-shrink-0" />
              <span className="text-white">Usuários ilimitados</span>
            </div>
            <div className="flex items-start gap-3">
              <Check className="h-5 w-5 text-[rgba(109,141,176,1)] mt-0.5 flex-shrink-0" />
              <span className="text-white">Dispositivos/PDVs ilimitados</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
