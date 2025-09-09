import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-primary rounded-full blur-3xl opacity-15 animate-pulse delay-1000"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-primary/20 text-primary mb-8">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-medium">새로운 경험의 시작</span>
        </div>
        
        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6 leading-tight">
          혁신적인 솔루션으로
          <br />
          <span className="text-foreground">당신의 비즈니스를</span>
          <br />
          변화시키세요
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          최첨단 기술과 창의적인 아이디어가 만나 만들어내는 
          <br className="hidden md:block" />
          완전히 새로운 디지털 경험을 지금 시작해보세요
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="group">
            지금 시작하기
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="glass" size="lg">
            더 알아보기
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-12 border-t border-border/50">
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">10K+</div>
            <div className="text-muted-foreground">만족한 고객</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">99.9%</div>
            <div className="text-muted-foreground">가동률</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">24/7</div>
            <div className="text-muted-foreground">고객 지원</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;