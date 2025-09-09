const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              YourBrand
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              혁신적인 솔루션으로 당신의 비즈니스를 한 단계 더 발전시켜 나가세요.
            </p>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">제품</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-smooth">기능</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">가격</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">보안</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">업데이트</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">지원</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-smooth">도움말</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">문의하기</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">상태</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">개발자</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 YourBrand. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground mt-4 sm:mt-0">
            <a href="#" className="hover:text-primary transition-smooth">개인정보처리방침</a>
            <a href="#" className="hover:text-primary transition-smooth">이용약관</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;