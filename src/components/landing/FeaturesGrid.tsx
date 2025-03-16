
import React from "react";
import { motion } from "framer-motion";
import { 
  Users, Tag, ShoppingCart, Printer, UserCog, 
  Globe, Ticket, Utensils, Receipt, BarChart2, CreditCard, DollarSign
} from "lucide-react";

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  delay: number;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, delay }) => {
  return (
    <motion.div
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 flex items-center gap-4 hover:bg-white/10 transition-colors"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: delay * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="bg-[rgba(109,141,176,0.2)] p-3 rounded-lg">
        {icon}
      </div>
      <h3 className="text-white font-medium">{title}</h3>
    </motion.div>
  );
};

export const FeaturesGrid: React.FC = () => {
  const features = [
    { title: "Acessos Simultâneos Ilimitados", icon: <Users size={22} className="text-[rgba(109,141,176,1)]" /> },
    { title: "Controle de Pedidos no Balcão", icon: <ShoppingCart size={22} className="text-[rgba(109,141,176,1)]" /> },
    { title: "Cadastro de Produtos", icon: <Tag size={22} className="text-[rgba(109,141,176,1)]" /> },
    { title: "Controle de Impressoras", icon: <Printer size={22} className="text-[rgba(109,141,176,1)]" /> },
    { title: "Controle de Usuários", icon: <UserCog size={22} className="text-[rgba(109,141,176,1)]" /> },
    { title: "Cardápio Digital", icon: <Globe size={22} className="text-[rgba(109,141,176,1)]" /> },
    { title: "Cupons de Desconto", icon: <Ticket size={22} className="text-[rgba(109,141,176,1)]" /> },
    { title: "Monitor de Preparos (KDS)", icon: <Utensils size={22} className="text-[rgba(109,141,176,1)]" /> },
    { title: "Emissor Nota Fiscal (NFC-e)", icon: <Receipt size={22} className="text-[rgba(109,141,176,1)]" /> },
    { title: "Relatórios e indicadores em tempo real", icon: <BarChart2 size={22} className="text-[rgba(109,141,176,1)]" /> },
    { title: "Gerente de Contas", icon: <CreditCard size={22} className="text-[rgba(109,141,176,1)]" /> },
    { title: "Controle de Caixa", icon: <DollarSign size={22} className="text-[rgba(109,141,176,1)]" /> },
  ];

  return (
    <section className="bg-[rgba(56,70,116,1)] w-full py-20 px-6 md:px-16 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[rgba(109,141,176,0.2)] rounded-full blur-3xl opacity-20 -translate-x-1/4 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[rgba(109,141,176,0.2)] rounded-full blur-3xl opacity-20 translate-x-1/4 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">Funcionalidades Completas</h2>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
            Tudo o que você precisa para transformar a gestão do seu negócio em uma experiência eficiente e produtiva.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <FeatureItem 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
