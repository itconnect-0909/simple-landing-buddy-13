import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, Users, Rocket, Star, Heart } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "빠른 성능",
    description: "최적화된 기술스택으로 빠르고 안정적인 서비스를 제공합니다."
  },
  {
    icon: Shield,
    title: "안전한 보안",
    description: "최신 보안 기술로 고객의 데이터를 안전하게 보호합니다."
  },
  {
    icon: Users,
    title: "팀 협업",
    description: "효율적인 협업 도구로 팀의 생산성을 극대화합니다."
  },
  {
    icon: Rocket,
    title: "빠른 확장",
    description: "비즈니스 성장에 맞춰 유연하게 확장 가능한 구조를 제공합니다."
  },
  {
    icon: Star,
    title: "프리미엄 품질",
    description: "세심한 디테일과 완벽한 품질로 최고의 경험을 선사합니다."
  },
  {
    icon: Heart,
    title: "고객 만족",
    description: "고객의 성공이 곧 우리의 성공입니다. 24시간 지원을 제공합니다."
  }
];

const FeatureSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              강력한 기능들
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            비즈니스 성장에 필요한 모든 도구와 기능을 하나의 플랫폼에서 만나보세요
          </p>
        </div>
        
        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group hover:shadow-medium transition-smooth border-border/50 bg-card/50 backdrop-blur-sm hover:scale-105"
            >
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-bounce">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;