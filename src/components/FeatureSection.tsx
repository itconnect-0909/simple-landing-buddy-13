import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, Users, Rocket, Star, Heart, Crown, Diamond, Gem, Trophy, Sparkles, Bolt } from "lucide-react";

const features = [
  {
    icon: Bolt,
    emoji: "⚡",
    title: "초고속 AI 엔진",
    description: "🚀 세계 최고 속도의 AI 기술로 0.001초 만에 모든 작업을 완료합니다",
    gradient: "bg-gradient-rainbow",
    animation: "animate-bounce-slow"
  },
  {
    icon: Shield,
    emoji: "🛡️",
    title: "군사급 보안",
    description: "🔒 우주 최고 보안 기술로 당신의 데이터를 은하계에서 가장 안전하게 보호",
    gradient: "bg-gradient-neon",
    animation: "animate-pulse-slow"
  },
  {
    icon: Users,
    emoji: "👥",
    title: "드림팀 협업",
    description: "🌟 전 세계 천재들과 실시간으로 협업하는 마법 같은 팀워크 시스템",
    gradient: "bg-gradient-gold",
    animation: "animate-float"
  },
  {
    icon: Rocket,
    emoji: "🚀",
    title: "무한 확장성",
    description: "💫 우주 끝까지 확장 가능한 초차원 아키텍처로 모든 한계를 돌파",
    gradient: "bg-gradient-hero",
    animation: "animate-spin-slow"
  },
  {
    icon: Crown,
    emoji: "👑",
    title: "황제급 품질",
    description: "💎 다이아몬드보다 완벽한 품질로 전 우주에서 가장 럭셔리한 경험",
    gradient: "bg-gradient-primary",
    animation: "animate-glow"
  },
  {
    icon: Heart,
    emoji: "💖",
    title: "사랑의 고객서비스",
    description: "🌈 365일 24시간 우주 최고의 천사들이 당신을 위해 대기 중",
    gradient: "bg-gradient-cosmic",
    animation: "animate-rainbow"
  }
];

const FeatureSection = () => {
  return (
    <section className="py-32 px-6 bg-gradient-cosmic relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-rainbow opacity-10 animate-pulse-slow"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-neon rounded-full blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-gold rounded-full blur-3xl opacity-15 animate-spin-slow"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-20 animate-bounce-slow">
        <Star className="w-12 h-12 text-yellow-400 animate-pulse" />
      </div>
      <div className="absolute top-40 right-32 animate-float">
        <Diamond className="w-10 h-10 text-pink-400 animate-glow" />
      </div>
      <div className="absolute bottom-32 left-40 animate-spin-slow">
        <Gem className="w-14 h-14 text-purple-400 animate-rainbow" />
      </div>
      <div className="absolute bottom-20 right-20 animate-bounce-slow">
        <Trophy className="w-16 h-16 text-yellow-400 animate-pulse-slow" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Ultra Section header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-4 mb-8">
            <Crown className="w-12 h-12 text-yellow-400 animate-spin-slow" />
            <h2 className="text-6xl md:text-8xl font-black">
              <span className="bg-gradient-rainbow bg-clip-text text-transparent animate-rainbow">
                🌟 MEGA 기능들 🌟
              </span>
            </h2>
            <Sparkles className="w-12 h-12 text-pink-400 animate-pulse" />
          </div>
          <p className="text-3xl text-white max-w-4xl mx-auto leading-relaxed font-bold">
            🚀 우주 최고 수준의 혁신적인 기능들이 당신을 기다립니다 🚀
            <br />
            💫 지금까지 경험해보지 못한 마법 같은 세상을 만나보세요 💫
          </p>
        </div>
        
        {/* Ultra Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group hover:shadow-mega transition-elastic border-4 border-white/30 bg-gradient-subtle/20 backdrop-blur-xl hover:scale-110 hover:rotate-2 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-rainbow opacity-20 animate-pulse"></div>
              <CardContent className="p-10 relative z-10">
                <div className={`w-20 h-20 rounded-full ${feature.gradient} flex items-center justify-center mb-8 group-hover:scale-125 ${feature.animation} shadow-mega mx-auto`}>
                  <feature.icon className="w-10 h-10 text-white animate-pulse" />
                </div>
                <div className="text-6xl mb-6 text-center animate-bounce-slow">
                  {feature.emoji}
                </div>
                <h3 className="text-2xl font-black mb-6 text-center bg-gradient-hero bg-clip-text text-transparent">
                  {feature.title}
                </h3>
                <p className="text-white text-lg leading-relaxed text-center font-semibold">
                  {feature.description}
                </p>
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 animate-spin-slow">
                  <Star className="w-6 h-6 text-yellow-400" />
                </div>
                <div className="absolute bottom-4 left-4 animate-pulse">
                  <Diamond className="w-5 h-5 text-pink-400" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Mega call-to-action */}
        <div className="text-center mt-24">
          <div className="text-4xl md:text-6xl font-black mb-8">
            <span className="bg-gradient-gold bg-clip-text text-transparent animate-glow">
              🎉 지금 바로 체험해보세요! 🎉
            </span>
          </div>
          <div className="flex justify-center gap-8 text-8xl animate-bounce-slow">
            🚀 💎 🌟 👑 💫 🎯 🔥 ⚡
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;