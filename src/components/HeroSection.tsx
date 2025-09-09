import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Star, Zap, Crown, Rocket, Trophy, Heart, Diamond, Gem } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import cosmicBg from "@/assets/cosmic-bg.jpg";
import trophyIcon from "@/assets/trophy-icon.png";
import rocketIcon from "@/assets/rocket-icon.png";

const HeroSection = () => {
  return (
    
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-cosmic">
      {/* Multiple Background layers */}
      <div className="absolute inset-0 bg-gradient-hero opacity-20"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 animate-pulse-slow"
        style={{ backgroundImage: `url(${cosmicBg})` }}
      ></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 animate-float"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      {/* Floating animated elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-rainbow rounded-full blur-3xl opacity-30 animate-spin-slow"></div>
      <div className="absolute top-20 right-20 w-48 h-48 bg-gradient-neon rounded-full blur-2xl opacity-25 animate-bounce-slow"></div>
      <div className="absolute bottom-20 left-20 w-56 h-56 bg-gradient-gold rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-primary rounded-full blur-2xl opacity-30 animate-float"></div>
      
      {/* Sparkle decorations */}
      <div className="absolute top-1/4 left-1/4 animate-spin-slow">
        <Star className="w-8 h-8 text-yellow-300 animate-pulse" />
      </div>
      <div className="absolute top-1/3 right-1/3 animate-bounce-slow">
        <Diamond className="w-6 h-6 text-pink-400 animate-glow" />
      </div>
      <div className="absolute bottom-1/3 left-1/3 animate-float">
        <Gem className="w-7 h-7 text-purple-400 animate-pulse-slow" />
      </div>
      <div className="absolute bottom-1/4 right-1/4 animate-spin-slow">
        <Crown className="w-9 h-9 text-yellow-400 animate-glow" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Ultra fancy badge */}
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-rainbow shadow-mega border-2 border-white/30 text-white mb-12 animate-glow">
          <img src={trophyIcon} alt="Trophy" className="w-6 h-6 animate-spin-slow" />
          <Crown className="w-5 h-5 animate-bounce" />
          <span className="text-lg font-bold">🎉 PREMIUM EXPERIENCE 시작 🎉</span>
          <Sparkles className="w-5 h-5 animate-pulse" />
          <img src={rocketIcon} alt="Rocket" className="w-6 h-6 animate-float" />
        </div>
        
        {/* Epic main heading with emojis */}
        <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
          <span className="bg-gradient-rainbow bg-clip-text text-transparent animate-rainbow block mb-4">
            🚀 ULTIMATE 🚀
          </span>
          <span className="bg-gradient-gold bg-clip-text text-transparent block mb-4">
            💎 BUSINESS 💎
          </span>
          <span className="bg-gradient-neon bg-clip-text text-transparent block">
            ⭐ SOLUTION ⭐
          </span>
        </h1>
        
        {/* Mega subtitle with icons */}
        <div className="text-2xl md:text-4xl text-white mb-16 max-w-4xl mx-auto leading-relaxed">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Zap className="w-8 h-8 text-yellow-400 animate-pulse" />
            <span className="font-bold bg-gradient-hero bg-clip-text text-transparent">
              🌟 세계 최고 수준의 디지털 혁명 🌟
            </span>
            <Trophy className="w-8 h-8 text-yellow-400 animate-bounce" />
          </div>
          <p className="text-xl opacity-90">
            🎯 AI + 블록체인 + 메타버스가 융합된 차세대 플랫폼 🎯
            <br />
            💫 당신의 꿈을 현실로 만드는 마법 같은 경험 💫
          </p>
        </div>
        
        {/* Mega CTA Buttons */}
        <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-20">
          <Button variant="rainbow" size="lg" className="group text-xl px-12 py-6">
            <Rocket className="w-6 h-6 mr-2 animate-spin-slow" />
            🚀 지금 시작하기 🚀
            <ArrowRight className="w-6 h-6 ml-2 transition-transform group-hover:translate-x-2" />
          </Button>
          <Button variant="gold" size="lg" className="text-xl px-12 py-6">
            <Crown className="w-6 h-6 mr-2 animate-bounce" />
            👑 프리미엄 체험 👑
          </Button>
          <Button variant="neon" size="lg" className="text-xl px-12 py-6">
            <Heart className="w-6 h-6 mr-2 animate-pulse" />
            💝 무료 상담 💝
          </Button>
        </div>
        
        {/* Ultra stats with animations */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-16 border-t-4 border-gradient-rainbow">
          <div className="text-center group hover:scale-110 transition-elastic">
            <div className="text-6xl font-black bg-gradient-rainbow bg-clip-text text-transparent mb-4 animate-glow">
              100K+
            </div>
            <div className="text-white text-lg flex items-center justify-center gap-2">
              <Star className="w-5 h-5 text-yellow-400 animate-spin" />
              🎉 행복한 고객들 🎉
            </div>
          </div>
          <div className="text-center group hover:scale-110 transition-elastic">
            <div className="text-6xl font-black bg-gradient-gold bg-clip-text text-transparent mb-4 animate-pulse-slow">
              99.99%
            </div>
            <div className="text-white text-lg flex items-center justify-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-400 animate-bounce" />
              🏆 완벽한 가동률 🏆
            </div>
          </div>
          <div className="text-center group hover:scale-110 transition-elastic">
            <div className="text-6xl font-black bg-gradient-neon bg-clip-text text-transparent mb-4 animate-glow">
              24/7
            </div>
            <div className="text-white text-lg flex items-center justify-center gap-2">
              <Heart className="w-5 h-5 text-pink-400 animate-pulse" />
              💖 전담 케어 💖
            </div>
          </div>
          <div className="text-center group hover:scale-110 transition-elastic">
            <div className="text-6xl font-black bg-gradient-hero bg-clip-text text-transparent mb-4 animate-rainbow">
              ∞
            </div>
            <div className="text-white text-lg flex items-center justify-center gap-2">
              <Rocket className="w-5 h-5 text-blue-400 animate-float" />
              🚀 무한 가능성 🚀
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
