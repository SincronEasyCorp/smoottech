
import React from "react";
import { Pricing } from "@/components/ui/pricing";

const smoothTechPlans = [
  {
    name: "Plano Pro",
    price: "150",
    yearlyPrice: "125", // 150 * 10 / 12 = 125
    semestralPrice: "125", // 150 * 5 / 6 = 125
    period: "mês",
    features: [
      "Pedidos no balcão e em mesas",
      "Gestão de delivery interna",
      "Emissão de NFC-e / cupom fiscal",
      "Controle de estoque",
      "Relatórios e indicadores em tempo real",
      "Usuários ilimitados",
      "Dispositivos/PDVs ilimitados",
      "Versão gratuita/teste disponível"
    ],
    description: "PDV Completo para seu estabelecimento",
    buttonText: "Começar Teste Grátis",
    href: "/contact",
    isPopular: false,
    migrationFee: "R$ 300,00"
  },
  {
    name: "Plano Ultra",
    price: "200",
    yearlyPrice: "167", // 200 * 10 / 12 = 167
    semestralPrice: "167", // 200 * 5 / 6 = 167
    period: "mês",
    features: [
      "Todas as funcionalidades do Plano Pro",
      "Integração com marketplaces (ex.: iFood)",
      "Cardápio digital (QR Code/Web)",
      "Autoatendimento em totens",
      "Comanda eletrônica (garçom mobile)",
      "Monitor de preparo (KDS)",
      "Cupons de desconto e promoções",
      "Programa de fidelidade (pontos)"
    ],
    description: "Funcionalidades completas para máxima eficiência",
    buttonText: "Falar com Especialista",
    href: "/contact",
    isPopular: true,
    migrationFee: "R$ 300,00"
  }
];

export const PricingSection: React.FC = () => {
  return (
    <section className="bg-[rgba(56,70,116,1)] w-full py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[rgba(109,141,176,0.2)] rounded-full blur-3xl opacity-20 -translate-x-1/4 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[rgba(109,141,176,0.2)] rounded-full blur-3xl opacity-20 translate-x-1/4 translate-y-1/2"></div>
      
      <div className="relative z-10">
        <Pricing 
          plans={smoothTechPlans}
          title="Planos SmootTech"
          description="Escolha o plano ideal para impulsionar a gestão do seu estabelecimento com SmootTech!"
        />
      </div>
    </section>
  );
};
