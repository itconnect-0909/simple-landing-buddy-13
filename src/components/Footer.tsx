import { Crown, Star, Heart, Rocket, Diamond, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-cosmic border-t-4 border-gradient-rainbow py-20 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-hero opacity-20 animate-pulse-slow"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-neon rounded-full blur-3xl opacity-25 animate-float"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-gold rounded-full blur-3xl opacity-20 animate-spin-slow"></div>
      
      {/* Floating decorations */}
      <div className="absolute top-10 left-1/4 animate-bounce-slow">
        <Star className="w-8 h-8 text-yellow-400 animate-pulse" />
      </div>
      <div className="absolute top-20 right-1/3 animate-float">
        <Diamond className="w-6 h-6 text-pink-400 animate-glow" />
      </div>
      <div className="absolute bottom-16 left-1/3 animate-spin-slow">
        <Sparkles className="w-7 h-7 text-purple-400 animate-rainbow" />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Ultra Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <Crown className="w-12 h-12 text-yellow-400 animate-spin-slow" />
              <div className="text-4xl font-black bg-gradient-rainbow bg-clip-text text-transparent animate-rainbow">
                ✨ MEGABRAND ✨
              </div>
              <Rocket className="w-12 h-12 text-blue-400 animate-bounce" />
            </div>
            <p className="text-white text-xl mb-8 max-w-md font-semibold leading-relaxed">
              🌟 우주 최고의 혁신 기업으로서 당신의 꿈을 현실로 만드는 
              마법 같은 여정을 함께하겠습니다! 🌟
            </p>
            
            {/* Social icons with emojis */}
            <div className="flex gap-6 text-4xl">
              <span className="hover:scale-125 transition-bounce cursor-pointer animate-bounce-slow">🚀</span>
              <span className="hover:scale-125 transition-bounce cursor-pointer animate-pulse">💎</span>
              <span className="hover:scale-125 transition-bounce cursor-pointer animate-float">🌟</span>
              <span className="hover:scale-125 transition-bounce cursor-pointer animate-spin-slow">👑</span>
              <span className="hover:scale-125 transition-bounce cursor-pointer animate-glow">💫</span>
            </div>
          </div>
          
          {/* Ultra Links */}
          <div>
            <h4 className="font-black mb-6 text-white text-xl flex items-center gap-2">
              <Star className="w-6 h-6 text-yellow-400 animate-pulse" />
              🎯 PREMIUM 제품
            </h4>
            <ul className="space-y-4 text-white font-semibold">
              <li><a href="#" className="hover:text-yellow-400 transition-smooth hover:scale-110 inline-block">⚡ 초고속 기능</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-smooth hover:scale-110 inline-block">💎 다이아몬드 가격</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-smooth hover:scale-110 inline-block">🛡️ 우주급 보안</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-smooth hover:scale-110 inline-block">🚀 실시간 업데이트</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-black mb-6 text-white text-xl flex items-center gap-2">
              <Heart className="w-6 h-6 text-pink-400 animate-pulse" />
              💖 VIP 지원
            </h4>
            <ul className="space-y-4 text-white font-semibold">
              <li><a href="#" className="hover:text-yellow-400 transition-smooth hover:scale-110 inline-block">🎯 천사 도움말</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-smooth hover:scale-110 inline-block">💝 황제 문의</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-smooth hover:scale-110 inline-block">👑 왕족 상태</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-smooth hover:scale-110 inline-block">🚀 우주 개발자</a></li>
            </ul>
          </div>
        </div>
        
        {/* Ultra Bottom */}
        <div className="border-t-4 border-gradient-rainbow mt-16 pt-12 flex flex-col lg:flex-row justify-between items-center">
          <div className="flex items-center gap-4 text-white text-lg font-bold mb-6 lg:mb-0">
            <Star className="w-6 h-6 text-yellow-400 animate-spin" />
            <span>© 2024 MEGABRAND. 우주 최고의 권리 보유.</span>
            <Diamond className="w-6 h-6 text-pink-400 animate-pulse" />
          </div>
          <div className="flex gap-8 text-white font-semibold">
            <a href="#" className="hover:text-yellow-400 transition-smooth hover:scale-110 flex items-center gap-2">
              👑 왕족 개인정보처리방침
            </a>
            <a href="#" className="hover:text-pink-400 transition-smooth hover:scale-110 flex items-center gap-2">
              💎 다이아몬드 이용약관
            </a>
          </div>
        </div>
        
        {/* Final emoji celebration */}
        <div className="text-center mt-12">
          <div className="text-6xl animate-bounce-slow">
            🎉 ✨ 🚀 💎 🌟 👑 💫 🎯 🔥 ⚡ 💖 🎊
          </div>
          <div className="text-2xl text-white font-bold mt-4 bg-gradient-rainbow bg-clip-text text-transparent animate-rainbow">
            당신의 성공이 곧 우리의 우주정복입니다! 🌌
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;