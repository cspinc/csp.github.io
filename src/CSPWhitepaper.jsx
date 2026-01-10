import React, { useState, useEffect } from 'react';
import { 
  Building2, Scale, Target, Cpu, Zap, Rocket, 
  Users, RefreshCw, Hexagon, Share2, BrainCircuit, 
  Globe, Coins, TrendingUp, CheckCircle2, ArrowRight,
  Printer, Download, Quote, Activity, Anchor, MapPin,
  FileCheck, ShieldCheck, BarChart3, Network, Briefcase, History, Award,
  Landmark, UserCheck, BookOpen, Lightbulb, Server, Code, Database,
  Layers, Lock, Play, Minimize2, Maximize2, Heart,
  Bot, ShoppingBag, Truck, CreditCard, Search, ArrowDown, ScanLine, Laptop,
  Sprout, Leaf, Map, Store, Smartphone, RotateCcw,
  MousePointerClick, Repeat, ExternalLink, Newspaper, FileText, PieChart
} from 'lucide-react';

const CSPWhitepaper = () => {
  const [isPortrait, setIsPortrait] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // 비밀번호 확인 로직
  const handleLogin = (e) => {
    e.preventDefault();
    // 임시 비밀번호: csp2026 (실제 배포 시 변경 권장)
    if (password === 'csp2026') {
      setIsAuthenticated(true);
      setErrorMsg('');
    } else {
      setErrorMsg('비밀번호가 올바르지 않습니다.');
      setPassword('');
    }
  };

  useEffect(() => {
    const checkOrientation = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth <= 768 && window.innerHeight > window.innerWidth) {
          setIsPortrait(true);
        } else {
          setIsPortrait(false);
        }
      }
    };

    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    return () => window.removeEventListener('resize', checkOrientation);
  }, []);

  // 인증되지 않은 경우 잠금 화면 표시
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-3xl p-8 shadow-2xl text-center">
           <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lock size={32} className="text-slate-700" />
           </div>
  
           <h2 className="text-2xl font-black text-slate-900 mb-2">CSP Whitepaper</h2>
           <p className="text-sm text-slate-500 mb-8">보안 문서에 접근하려면 비밀번호를 입력하세요.</p>
           
           <form onSubmit={handleLogin} className="space-y-4">
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-center font-bold text-slate-900"
                autoFocus
              />
   
              {errorMsg && <p className="text-xs text-red-500 font-bold">{errorMsg}</p>}
              <button 
                type="submit"
                className="w-full bg-slate-900 text-white font-bold py-3 rounded-xl hover:bg-slate-800 transition-colors shadow-lg"
              >
               Access Document
              </button>
           </form>
           <p className="text-[10px] text-slate-400 mt-6">
             Authorized Personnel Only.
             © 2026 CSP Inc.
           </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 pb-20 overflow-x-hidden relative">
      
      {/* --- Mobile Landscape Alert Overlay --- */}
      {isPortrait && (
        <div className="fixed inset-0 z-50 bg-slate-900/95 backdrop-blur-sm flex flex-col items-center justify-center p-8 text-center text-white animate-in fade-in duration-500">
           <div className="bg-white/10 p-6 rounded-full mb-6 animate-pulse">
              <RotateCcw size={48} className="text-blue-400" />
           </div>
           <h3 className="text-2xl font-bold mb-3">가로 모드로 봐주세요</h3>
           <p className="text-slate-300 mb-8 max-w-xs leading-relaxed">
              CSP 백서의 방대한 인포그래픽과 데이터 시각화를 온전히 경험하시려면 <br/>
              <strong>화면을 가로로 회전</strong>해 주세요.
           </p>
         
           <div className="flex items-center gap-2 text-xs text-slate-500 border border-slate-700 px-4 py-2 rounded-full">
              <Smartphone size={14}/> <span>Optimized for Landscape</span>
           </div>
           <button 
             onClick={() => setIsPortrait(false)}
             className="mt-12 text-xs text-slate-400 underline underline-offset-4 hover:text-white"
           >
              세로 모드로 계속 보기 (권장하지 않음)
           </button>
        </div>
      )}

      {/* --- HERO SECTION --- */}
      <header className="relative w-full py-20 md:py-32 px-6 md:px-12 border-b border-slate-100 bg-slate-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-100/40 rounded-full blur-[60px] md:blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-emerald-100/40 rounded-full blur-[40px] md:blur-[80px] translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          {/* TIPS Badge Emphasis - Hero */}
          <div className="mb-8 flex justify-start animate-fade-in-up">
             <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-700 to-indigo-600 text-white text-xs md:text-sm font-bold px-4 py-2 rounded-full shadow-lg shadow-blue-200 ring-1 ring-white/50">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-100 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                </span>
                TIPS 선정 (중소벤처기업부)
             </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8 md:mb-12">
            <div className="h-12 md:h-16 px-4 bg-slate-900 rounded-xl md:rounded-2xl flex items-center justify-center text-white font-black text-xl md:text-3xl shadow-xl border-4 border-slate-100 tracking-tight">
              CSP
            </div>
            <div className="h-px w-full md:h-12 md:w-px bg-slate-300 block md:block"></div>
            <div>
              <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-slate-500 uppercase block mb-1">Corporate Strategic Paper</span>
              <span className="text-base md:text-lg font-bold text-slate-900">2026 Vision & Strategy</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tight text-slate-900 mb-8 md:mb-12 leading-[0.9]">
            <span className="block relative">
              <span className="text-blue-600 text-[1.2em] relative -top-1">C</span>ommunity
            </span>
            <span className="block relative pl-1">
              <span className="text-blue-600 text-[1.2em] relative -top-1">S</span>cale-up
            </span>
            <span className="block relative pl-2">
              <span className="text-blue-600 text-[1.2em] relative -top-1">P</span>artners<span className="text-blue-600">.</span>
            </span>
          </h1>
          
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-end justify-between border-t border-slate-200 pt-8 md:pt-10">
             <p className="text-lg md:text-2xl text-slate-600 leading-relaxed max-w-2xl font-medium">
              우리는 도시를 개발(Develop)하지 않고,<br/> 
              도시를 <span className="bg-blue-100 text-blue-900 px-2 font-bold inline-block transform -skew-x-6">경영(Manage)</span>하는 벤처 스튜디오입니다.
            </p>
            
            <div className="flex gap-2 md:gap-3 flex-wrap">
               {['Venture Studio', 'Web3 Governance', 'Local Alliance'].map((tag, idx) => (
                  <span key={idx} className="px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[10px] md:text-xs font-bold border flex items-center gap-2 bg-white text-slate-600 border-slate-200 shadow-sm">
                    {tag}
                  </span>
               ))}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 md:px-12">

        {/* --- 00. LEADERSHIP --- */}
        <section className="py-16 md:py-24 border-b border-slate-100 bg-white relative overflow-hidden">
          <div className="absolute top-10 left-10 text-slate-50 -z-10 transform -translate-x-1/4 -translate-y-1/4">
            <Quote size={200} className="md:w-[400px] md:h-[400px]" />
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            <div className="w-full lg:w-1/3 relative mt-4 lg:mt-0">
               <div className="aspect-[3/3.5] rounded-[2rem] bg-slate-100 overflow-hidden relative shadow-2xl border-4 border-white ring-1 ring-slate-200 z-0 group">
                      <div className="absolute inset-0 bg-gradient-to-b from-slate-200 to-slate-800 flex items-end justify-center">
                         <Users size={120} className="md:w-[180px] md:h-[180px] text-slate-400 mb-10 opacity-50 group-hover:scale-105 transition-transform duration-700" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-slate-900/90 to-transparent text-white pt-20 z-20">
                          <h3 className="text-2xl md:text-3xl font-black mb-1 drop-shadow-md">민욱조 <span className="text-base md:text-lg font-normal opacity-70 ml-1">Min Wook-jo</span></h3>
                          <p className="text-xs md:text-sm font-bold text-blue-400 uppercase tracking-widest drop-shadow-sm">Representative Partner</p>
                      </div>
                </div>
                
                <div className="absolute -right-2 md:-right-4 top-8 bg-white p-4 md:p-5 rounded-2xl shadow-xl border border-slate-100 max-w-[140px] md:max-w-[180px] animate-bounce-slow z-30">
                  <div className="flex items-center gap-2 mb-2">
                        <Briefcase size={16} className="text-blue-600 md:w-[18px] md:h-[18px]"/>
                        <span className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider">Experience</span>
                  </div>
                    <strong className="block text-2xl md:text-3xl font-black text-slate-900 leading-none">15<span className="text-base md:text-lg">+</span></strong>
                    <span className="text-[10px] md:text-xs text-slate-500 font-medium">Years as VC</span>
                </div>
                
                 <div className="absolute -left-2 md:-left-4 bottom-20 md:bottom-24 bg-white p-4 md:p-5 rounded-2xl shadow-xl border border-slate-100 max-w-[160px] md:max-w-[200px] text-right z-30">
                     <div className="flex items-center gap-2 justify-end mb-2">
                        <span className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-wider">AUM</span>
                        <Coins size={16} className="text-emerald-600 md:w-[18px] md:h-[18px]"/>
                    </div>
                    <strong className="block text-2xl md:text-3xl font-black text-slate-900 leading-none">2,000<span className="text-base md:text-lg">억</span></strong>
                    <span className="text-[10px] md:text-xs text-slate-500 font-medium">누적 운용 자산 규모</span>
                </div>
            </div>

            <div className="w-full lg:w-2/3 pt-4">
                <span className="text-blue-600 font-bold text-xs md:text-sm tracking-widest uppercase block mb-3 flex items-center gap-2">
                    <span className="w-8 h-px bg-blue-600"></span> Leadership
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 md:mb-8 leading-tight">
                    "지역에서 꼭<br/>
                    <span className="text-blue-600 relative inline-block">
                        유니콘이 탄생
                        <svg className="absolute w-full h-2 md:h-3 -bottom-1 left-0 text-blue-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" /></svg>
                    </span>해야 할까?"
                </h2>
                
                <div className="prose prose-base md:prose-lg text-slate-600 mb-8 md:mb-10 leading-relaxed font-medium">
                    <p className="text-lg md:text-xl font-bold text-slate-800">
                        "왜 로컬에는 유니콘이 나오지 않을까?"
                    </p>
                    <p>
                        지난 15년간 벤처캐피털리스트(VC)로 일하며 수많은 기업의 성장을 지켜봤습니다.
                        하지만 실리콘밸리식 <strong>'빠른 성장과 회수(Exit)'</strong> 모델은 지역 경제에 그대로 적용하기 어려웠습니다.
                        단기간의 성과를 위해 자본이 투입되지만, 결국 그 과실은 외부로 유출되는 <strong>'자본 유출(Capital Leakage)'</strong>의 한계를 목격했기 때문입니다.
                    </p>
                    <p>
                        우리에게 필요한 건 혼자 빨리 달리는 유니콘이 아닙니다.
                        무리 지어 서로를 지키며 지역에 깊게 뿌리내리는 
                        <strong>'지브라(Zebra)'</strong> 기업입니다.
                        CSP는 단순한 투자사가 아닌, <strong>도시를 경영하는 벤처 스튜디오</strong>로서 
                        좋은 기업을 키워 좋은 도시를 만드는 여정을 시작합니다.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 border-t border-slate-100 pt-8">
                    <div>
                        <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2 text-base md:text-lg">
                            <History size={20} className="text-slate-400"/> Professional Career
                        </h4>
                        <ul className="space-y-3 md:space-y-4">
                            {[
                                '(현) 벤처스퀘어 파트너 / 투자총괄',
                                '(전) 크립톤벤처스 대표이사',
                                '(전) 센트럴투자파트너스 투자본부장',
                                '(전) 웰컴벤처스 투자본부장',
                                '누적 20개 이상 기업 스케일업 완료'
                             ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-xs md:text-sm text-slate-600 font-medium items-start">
                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0"></span>
                                     {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                         <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2 text-base md:text-lg">
                            <Award size={20} className="text-slate-400"/> Key Activities
                        </h4>
                        <ul className="space-y-3 md:space-y-4">
                            {[
                                 <span key="keynote"><strong>'다음 유니콘은 로컬에서 나온다'</strong> 키노트 (2018)</span>,
                                '제주창조경제혁신센터 J-Connect Day 리드',
                                '중기부 강한소상공인 지원사업 심사위원',
                                '2023 올댓트래블 컨퍼런스 키노트',
                                '로컬브랜드페어(2022-2024) 기조강연'
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-xs md:text-sm text-slate-600 font-medium items-start">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></span>
                                    {item}
                                </li>
                            ))}
                         </ul>
                    </div>
                </div>
            </div>
          </div>
        </section>

        {/* --- 01. COMPANY OVERVIEW --- */}
        <section className="py-16 md:py-24 border-b border-slate-100">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <div className="lg:col-span-4">
              <span className="text-blue-600 font-bold text-xs md:text-sm tracking-widest uppercase block mb-3 flex items-center gap-2">
                <span className="w-8 h-px bg-blue-600"></span> 01 Introduction
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Corporate<br/>Profile</h2>
              <p className="text-slate-600 leading-relaxed mb-8 text-sm">
                CSP는 단순한 투자사(VC)가 아닙니다.
                <br/>
                자본과 인력을 직접 투입해 로컬의 문제를 비즈니스로 해결하는 <strong>Company Builder</strong>이자, 지역 생태계 전체를 설계하는 <strong>Ecosystem Architect</strong>입니다.
              </p>
              
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
                 <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Company Name</span>
                    <strong className="text-slate-900 text-sm md:text-base">씨에스피 주식회사 (CSP Inc.)</strong>
                 </div>
                 <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Established</span>
                    <span className="text-slate-700 text-sm">2024년 11월 1일</span>
                 </div>
                 <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">Locations</span>
                    <ul className="text-xs text-slate-600 space-y-1">
                        <li><span className="font-bold text-slate-500">HQ:</span> 세종특별자치시 고운서길 16, 102-8호</li>
                        <li><span className="font-bold text-slate-500">Seoul:</span> 서울 강남구 테헤란로2길 27, 10층</li>
                     </ul>
                 </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-8">
                
               <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <UserCheck size={20} className="text-blue-600"/> Executive Team
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-2">
                           <div>
                              <strong className="text-slate-900 text-lg block">김영웅</strong>
                              <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">CFO / 상무이사</span>
                           </div>
                           <Activity size={18} className="text-slate-300"/>
                        </div>
                        <p className="text-xs text-slate-500 mb-2">지역경영회사 자금유치 및 재무관리 전문가</p>
                        <ul className="text-[11px] text-slate-400 space-y-1 border-t border-slate-100 pt-2">
                           <li>• (전) AWS Senior Manager</li>
                           <li>• (전) Kakao Entertainment CRO</li>
                           <li>• (전) TWC CFO</li>
                        </ul>
                     </div>
                     <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-2">
                           <div>
                              <strong className="text-slate-900 text-lg block">이혜선 / 최민주</strong>
                              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">Key Members</span>
                           </div>
                           <BrainCircuit size={18} className="text-slate-300"/>
                        </div>
                        <div className="space-y-2 pt-1">
                           <div className="text-xs">
                              <strong className="block text-slate-700">이혜선 팀장 (PhD)</strong>
                                <span className="text-slate-500 text-[10px] block mt-1">홍익대 디자인공학박사, 로컬 프로젝트 및 브랜드 전략 전문가 (전 부여 지음 대표)</span>
                           </div>
                           <div className="text-xs border-t border-slate-50 pt-2 mt-2">
                               <strong className="block text-slate-700">최민주 PM</strong>
                              <span className="text-slate-500 text-[10px] block mt-1">로봇/IT 스타트업 출신 BX 디자이너, 미들스튜디오 공동창업자</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div>
                   <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <Lightbulb size={20} className="text-amber-500"/> Advisors
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div className="bg-amber-50/50 p-5 rounded-xl border border-amber-100">
                        <strong className="text-slate-900 text-sm block">황정환 Advisor</strong>
                        <span className="text-[10px] text-amber-600 font-bold uppercase tracking-wider block mb-2">Global Tech & Investment</span>
                        <ul className="text-[11px] text-slate-500 space-y-1">
                           <li>• Univ. of Connecticut 경제학</li>
                           <li>• IT/Web3 플랫폼 창업 3회 & 글로벌 팀 운영</li>
                           <li>• VC/CVC 투자심사역 (데이터 기반 투자)</li>
                        </ul>
                     </div>
                     <div className="bg-amber-50/50 p-5 rounded-xl border border-amber-100">
                        <strong className="text-slate-900 text-sm block">박창용 박사</strong>
                        <span className="text-[10px] text-amber-600 font-bold uppercase tracking-wider block mb-2">Social Innovation</span>
                        <ul className="text-[11px] text-slate-500 space-y-1">
                           <li>• 한양대 사회적경제학 박사</li>
                           <li>• (현) 한양대 사회혁신융합전공 겸임교수</li>
                           <li>• 소셜 임팩트 및 사회혁신 전략 자문</li>
                        </ul>
                     </div>
                  </div>
               </div>

               <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <ShieldCheck size={20} className="text-blue-600"/> Board of Directors
                  </h3>
                
                   <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-lg grid grid-cols-2 md:grid-cols-4 gap-6">
                     <div>
                        <span className="text-xs text-slate-400 block mb-1">Director</span>
                        <strong className="block text-white mb-1">최도인</strong>
                        <span className="text-[10px] text-slate-500 block">메타기획컨설팅 본부장</span>
                     </div>
                     <div>
                        <span className="text-xs text-slate-400 block mb-1">Director</span>
                         <strong className="block text-white mb-1">김혁주</strong>
                        <span className="text-[10px] text-slate-500 block">비로컬(BELOCAL) 대표</span>
                     </div>
                     <div>
                        <span className="text-xs text-slate-400 block mb-1">Outside Director</span>
                        <strong className="block text-white mb-1">하태훈</strong>
                        <span className="text-[10px] text-slate-500 block">위벤처스 대표</span>
                     </div>
                     <div>
                        <span className="text-xs text-slate-400 block mb-1">Auditor</span>
                        <strong className="block text-white mb-1">오성원</strong>
                        <span className="text-[10px] text-slate-500 block">메타기획컨설팅 CFO</span>
                     </div>
                  </div>
               </div>

               <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100">
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="md:w-1/3 text-center md:text-left">
                        <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2 block">Anchor Partner</span>
                        <h4 className="text-2xl font-black text-slate-900 mb-1">METAA</h4>
                        <span className="text-xs text-slate-500">(주)메타기획컨설팅</span>
                        <div className="mt-3 inline-block px-3 py-1 bg-white rounded-full text-xs font-bold text-emerald-700 shadow-sm border border-emerald-200">
                           since 1989
                        </div>
                      </div>
                     <div className="md:w-2/3 border-t md:border-t-0 md:border-l border-emerald-200 pt-4 md:pt-0 md:pl-6">
                        <p className="text-sm text-slate-600 mb-3 leading-relaxed">
                           35년간 축적된 도시·문화·공간 분야의 독보적 노하우를 보유한 지식 기반 컨설팅 기업입니다. CSP의 <strong>지역 생태계 설계 및 방법론</strong>을 뒷받침합니다.
                        </p>
                        <div className="flex gap-2 flex-wrap">
                           <span className="text-[10px] bg-white px-2 py-1 rounded border border-emerald-100 text-slate-500 flex items-center gap-1">
                               <BookOpen size={10}/> LICORN KPI (나비성장모델)
                           </span>
                           <span className="text-[10px] bg-white px-2 py-1 rounded border border-emerald-100 text-slate-500 flex items-center gap-1">
                               <MapPin size={10}/> SMCM (입지선정모형)
                           </span>
                        </div>
                     </div>
                  </div>
               </div>

            </div>
          </div>
        </section>

        {/* --- 02. MISSION: PROBLEM & SOLUTION --- */}
        <section className="py-16 md:py-24 border-b border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
               <span className="text-blue-600 font-bold text-xs md:text-sm tracking-widest uppercase block mb-3 flex items-center gap-2">
                <span className="w-8 h-px bg-blue-600"></span> 02 Mission
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Redefining<br/>Urban Growth</h2>
              <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                 지방 소멸의 본질은 단순 인구 감소가 아닙니다.
                 지역에서 창출된 부가가치가 역외로 유출되는 <strong>'자본 추출(Extraction Economy)'</strong> 구조가 문제입니다.
              </p>
              <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100">
                 <strong className="text-blue-800 text-sm block mb-2">CSP's Mission</strong>
                 <p className="text-xs text-blue-600 leading-relaxed">
                   "지역혁신가를 <strong>지역경영회사(AMC)</strong>로 성장시켜, 자본과 인재가 머무는 자립형 도시 생태계를 만듭니다."
                 </p>
              </div>
            </div>

            <div className="lg:col-span-8">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 relative overflow-hidden group hover:border-slate-300 transition-colors">
                      <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Minimize2 size={120} />
                     </div>
                     <h4 className="text-lg font-bold text-slate-500 mb-4 flex items-center gap-2">
                         <Activity size={18}/> The Crisis
                     </h4>
                     <h3 className="text-2xl font-black text-slate-400 mb-6 group-hover:text-slate-500 transition-colors">Extraction Economy</h3>
                     <ul className="space-y-4 relative z-10">
                         <li className="flex items-start gap-3">
                           <div className="w-6 h-6 rounded bg-slate-200 flex items-center justify-center text-slate-400 shrink-0"><ArrowRight size={14} className="-rotate-45"/></div>
                           <div>
                               <strong className="block text-slate-600 text-sm">Capital Leakage</strong>
                              <p className="text-xs text-slate-400">지역 수익의 본사(서울) 송금 및 유출</p>
                           </div>
                        </li>
                        <li className="flex items-start gap-3">
                           <div className="w-6 h-6 rounded bg-slate-200 flex items-center justify-center text-slate-400 shrink-0"><Users size={14}/></div>
                           <div>
                                <strong className="block text-slate-600 text-sm">Talent Drain</strong>
                              <p className="text-xs text-slate-400">청년 인재의 수도권 이탈 가속화</p>
                           </div>
                         </li>
                        <li className="flex items-start gap-3">
                           <div className="w-6 h-6 rounded bg-slate-200 flex items-center justify-center text-slate-400 shrink-0"><Server size={14}/></div>
                            <div>
                              <strong className="block text-slate-600 text-sm">Infra Limit</strong>
                              <p className="text-xs text-slate-400">도시 인프라 수용력 한계 및 양극화</p>
                           </div>
                        </li>
                     </ul>
                  </div>

                  <div className="bg-slate-900 p-8 rounded-3xl text-white shadow-2xl relative overflow-hidden transform md:scale-105 border border-slate-700">
                      <div className="absolute top-0 right-0 p-4 opacity-10 text-emerald-400">
                        <Maximize2 size={120} />
                     </div>
                     <h4 className="text-lg font-bold text-emerald-400 mb-4 flex items-center gap-2">
                         <RefreshCw size={18}/> The Solution
                     </h4>
                     <h3 className="text-2xl font-black text-white mb-6">Venture Studio</h3>
                     <ul className="space-y-4 relative z-10">
                         <li className="flex items-start gap-3">
                           <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center text-white shrink-0"><Hexagon size={14}/></div>
                           <div>
                               <strong className="block text-white text-sm">Company Building</strong>
                              <p className="text-xs text-slate-400">직접 자본·인력 투입을 통한 주도적 성장</p>
                           </div>
                        </li>
                        <li className="flex items-start gap-3">
                           <div className="w-6 h-6 rounded bg-emerald-500 flex items-center justify-center text-white shrink-0"><Scale size={14}/></div>
                           <div>
                               <strong className="block text-white text-sm">Local Zebra</strong>
                              <p className="text-xs text-slate-400">수익(Profit)과 사회적 가치(Impact) 동시 추구</p>
                           </div>
                        </li>
                        <li className="flex items-start gap-3">
                           <div className="w-6 h-6 rounded bg-pink-500 flex items-center justify-center text-white shrink-0"><Anchor size={14}/></div>
                           <div>
                              <strong className="block text-white text-sm">Area Management</strong>
                              <p className="text-xs text-slate-400">단일 기업을 넘어 도시 전체를 경영</p>
                           </div>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* --- 03. PHILOSOPHY (Benchmarks & Model) --- */}
        <section className="py-16 md:py-24 border-b border-slate-100 bg-slate-50/50">
          <div className="max-w-4xl mx-auto">
             <div className="text-center mb-16">
                <span className="text-emerald-600 font-bold text-xs md:text-sm tracking-widest uppercase block mb-3">03 Philosophy</span>
                 <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Triple Circulation Model</h2>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                   CSP는 <strong>"한국형 첼시마켓"</strong> 모델을 지향합니다.<br/>
                   <span className="text-emerald-600 font-bold">TCJTC(Traffic-Capital-Jobs-Traffic-Capital)</span> 모델을 통해 지역 내 자본과 인재가 순환하는 생태계를 구축합니다.
                </p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative mb-16">
               <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-200 via-blue-200 to-pink-200 -z-10 hidden md:block border-t border-dashed border-slate-300"></div>
               
               {[
                  { l: 'J', t: 'Jobs', d: '지역 혁신가(Local Creator)를 발굴하여 지역에 정착하는 양질의 일자리를 창출합니다.', colorName: 'emerald' },
                 { l: 'T', t: 'Traffic', d: '매력적인 앵커 공간(Space)과 콘텐츠로 외부 방문객 유입을 극대화합니다.', colorName: 'blue' },
                 { l: 'C', t: 'Capital', d: '창출된 수익을 지역 펀드와 프로젝트에 재투자하여 자본 유출을 막습니다.', colorName: 'pink' }
               ].map((item, idx) => {
                 const bgClass = item.colorName === 'emerald' ? 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600' :
                                 item.colorName === 'blue' ? 'bg-blue-50 text-blue-600 group-hover:bg-blue-600' :
                                  'bg-pink-50 text-pink-600 group-hover:bg-pink-600';
                 return (
                   <div key={idx} className={`bg-white p-8 rounded-3xl shadow-lg border border-slate-100 text-center relative group hover:-translate-y-2 transition-transform duration-300`}>
                      <div className={`w-14 h-14 rounded-2xl mx-auto flex items-center justify-center font-black text-2xl mb-4 shadow-sm group-hover:text-white transition-colors ${bgClass}`}>
                         {item.l}
                        </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.t}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{item.d}</p>
                   </div>
                  );
               })}
             </div>

             {/* 03-2. Why Chelsea Market? */}
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                   <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 block">Benchmark Analysis</span>
                   <h3 className="text-2xl font-bold text-slate-900 mb-4">Why Chelsea Market?</h3>
                    <div className="space-y-4">
                      <div className="flex gap-4">
                         <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-500"><History size={18}/></div>
                         <div>
                            <strong className="block text-slate-900 text-sm">역사적 자산의 재해석</strong>
                            <p className="text-xs text-slate-500 leading-relaxed">폐쇄된 과자공장(Nabisco)을 로컬 푸드홀과 오피스로 재생하여 지역의 랜드마크로 전환 (연 600만 트래픽)</p>
                         </div>
                       </div>
                      <div className="flex gap-4">
                         <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-500"><Users size={18}/></div>
                         <div>
                            <strong className="block text-slate-900 text-sm">커뮤니티 기반 운영</strong>
                            <p className="text-xs text-slate-500 leading-relaxed">단순 임대가 아닌, 지역 콘텐츠와 브랜드가 성장하는 커뮤니티 플랫폼 역할 수행</p>
                         </div>
                      </div>
                      <div className="flex gap-4">
                         <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-slate-500"><TrendingUp size={18}/></div>
                          <div>
                            <strong className="block text-slate-900 text-sm">가치 상승과 회수</strong>
                            <p className="text-xs text-slate-500 leading-relaxed">2018년 구글에 약 24억 달러 매각. 로컬의 가치를 글로벌 자본으로 환산한 대표적 사례</p>
                         </div>
                      </div>
                   </div>
                </div>

                <div className="bg-slate-900 p-8 rounded-3xl text-white flex flex-col justify-center relative overflow-hidden">
                   <div className="relative z-10">
                      <span className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-4 block">CSP Strategy</span>
                      <h3 className="text-2xl font-bold text-white mb-6">Korean Model</h3>
                       <ul className="space-y-4 text-sm text-slate-300">
                         <li className="flex items-center gap-3"><CheckCircle2 className="text-emerald-500"/> 유휴 공간 및 지역 자산 매입/임대</li>
                         <li className="flex items-center gap-3"><CheckCircle2 className="text-emerald-500"/> 앵커 콘텐츠(F&B, Stay) 직접 운영</li>
                         <li className="flex items-center gap-3"><CheckCircle2 className="text-emerald-500"/> 로컬 브랜드 입점 및 인큐베이팅</li>
                         <li className="flex items-center gap-3"><CheckCircle2 className="text-emerald-500"/> 지역 펀드 조성을 통한 지속 성장</li>
                      </ul>
                   </div>
                    <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
                      {/* Layout icon is usually grid based */}
                      <div className="w-40 h-40 border-4 border-white grid grid-cols-2">
                        <div className="border border-white/50"></div>
                        <div className="border border-white/50"></div>
                        <div className="border border-white/50"></div>
                        <div className="border border-white/50"></div>
                      </div>
                   </div>
                </div>
             </div>

             {/* Global Benchmarks (Existing) */}
             <div className="bg-white rounded-2xl border border-slate-200 p-8">
                 <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6 text-center">Other Global Models</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
                   <div className="pt-4 md:pt-0">
                      <strong className="block text-slate-900 text-lg mb-1">Urban Splash</strong>
                       <span className="text-xs text-slate-400 block mb-2">Manchester, UK</span>
                      <p className="text-xs text-slate-500">유휴 산업시설을 주거·문화 복합공간으로 재생</p>
                   </div>
                   <div className="pt-4 md:pt-0 md:pl-4">
                      <strong className="block text-slate-900 text-lg mb-1">DTP (Downtown Project)</strong>
                      <span className="text-xs text-slate-400 block mb-2">Las Vegas, USA</span>
                      <p className="text-xs text-slate-500">구도심에 3.5억 달러를 투자해 스타트업 도시 건설</p>
                   </div>
                    <div className="pt-4 md:pt-0 md:pl-4">
                      <strong className="block text-slate-900 text-lg mb-1">Hauser & Wirth</strong>
                      <span className="text-xs text-slate-400 block mb-2">Zurich, Swiss</span>
                      <p className="text-xs text-slate-500">양조장을 갤러리 복합문화공간으로 재생</p>
                    </div>
                </div>
             </div>
          </div>
        </section>

        {/* --- 04. STRATEGY (Venture Studio) --- */}
        <section className="py-16 md:py-24 border-b border-slate-100">
           <div className="max-w-5xl mx-auto">
               <div className="text-center mb-16">
                 <span className="text-violet-600 font-bold text-xs md:text-sm tracking-widest uppercase block mb-3">04 Strategy</span>
                 <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Venture Studio Methodology</h2>
                 <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
                     CSP는 단순 투자를 넘어, 아이디어 발굴부터 설립, 운영, 확장, 회수까지 전 과정을 함께하는 <strong>'Company Builder'</strong>입니다.
                 </p>
              </div>

              {/* 4.1 Methodology Comparison */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                 <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
                    <h4 className="text-lg font-bold text-slate-500 mb-4">Traditional VC / AC</h4>
                    <ul className="space-y-4 text-sm text-slate-500">
                       <li className="flex justify-between border-b border-slate-200 pb-2">
                          <span>개입 시점</span>
                          <span className="font-medium">설립 이후 (Post-Seed)</span>
                       </li>
                       <li className="flex justify-between border-b border-slate-200 pb-2">
                          <span>자본 투입</span>
                          <span className="font-medium">단발성 투자 (Round)</span>
                       </li>
                       <li className="flex justify-between border-b border-slate-200 pb-2">
                          <span>주요 역할</span>
                          <span className="font-medium">자금, 멘토링, 네트워크</span>
                       </li>
                       <li className="flex justify-between">
                          <span>목표</span>
                          <span className="font-medium">빠른 회수 (Exit)</span>
                       </li>
                    </ul>
                 </div>
                
                <div className="bg-violet-600 p-8 rounded-3xl text-white shadow-xl transform md:scale-105 relative">
                    <div className="absolute top-4 right-4 bg-white/20 px-2 py-1 rounded text-[10px] font-bold">CSP Model</div>
                    <h4 className="text-lg font-bold text-white mb-4">Venture Studio</h4>
                    <ul className="space-y-4 text-sm text-violet-100">
                        <li className="flex justify-between border-b border-violet-500 pb-2">
                          <span>개입 시점</span>
                          <span className="font-bold text-white">설립 전 (Zero to One)</span>
                       </li>
                        <li className="flex justify-between border-b border-violet-500 pb-2">
                          <span>자본 투입</span>
                          <span className="font-bold text-white">지속적 자본/인력 투입</span>
                        </li>
                       <li className="flex justify-between border-b border-violet-500 pb-2">
                          <span>주요 역할</span>
                          <span className="font-bold text-white">직접 설계 및 공동 경영</span>
                       </li>
                       <li className="flex justify-between">
                          <span>목표</span>
                          <span className="font-bold text-white">그룹 가치 & 지속 성장</span>
                        </li>
                    </ul>
                 </div>
              </div>

              {/* 4.2 Scale-up Process */}
              <div className="mb-20">
                 <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <Layers className="text-violet-600"/> 3-Track Scale-up Process
                 </h3>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                     <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:border-violet-300 transition-colors">
                       <div className="w-10 h-10 bg-violet-100 text-violet-600 rounded-lg flex items-center justify-center mb-4"><Hexagon size={20}/></div>
                       <strong className="block text-slate-900 mb-2">1. 직접 사업 (Direct)</strong>
                       <p className="text-xs text-slate-500 leading-relaxed mb-3">100% 인수합병(M&A) 및 직접 경영. 메루치양식장, 지역 편집숍 등 직접 투자/운영하여 기업 가치 제고.</p>
                       <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-1 rounded">가치 상승 (Value-up)</span>
                    </div>
                    <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:border-violet-300 transition-colors">
                       <div className="w-10 h-10 bg-violet-100 text-violet-600 rounded-lg flex items-center justify-center mb-4"><Share2 size={20}/></div>
                       <strong className="block text-slate-900 mb-2">2. 간접 사업 (Indirect)</strong>
                       <p className="text-xs text-slate-500 leading-relaxed mb-3">조인트벤처(JV) 설립 및 지분 투자. 우주만물상, 동해형씨 등 공동 참여 및 수익 배분.</p>
                       <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-1 rounded">수익 창출 (Profit)</span>
                    </div>
                    <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:border-violet-300 transition-colors">
                        <div className="w-10 h-10 bg-violet-100 text-violet-600 rounded-lg flex items-center justify-center mb-4"><Users size={20}/></div>
                       <strong className="block text-slate-900 mb-2">3. 컨설팅 (Consulting)</strong>
                       <p className="text-xs text-slate-500 leading-relaxed mb-3">브랜드/경영/재무 맞춤형 솔루션. 행궁동 주차장 BTO, 제주 우무 등 성장 지원 및 커뮤니티 형성.</p>
                       <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-1 rounded">커뮤니티 형성</span>
                    </div>
                 </div>
              </div>

              {/* 4.3 Worldview & Roadmap (Enhanced Visualization) */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                 {/* CSP Worldview Diagram */}
                 <div className="bg-slate-900 text-white p-8 rounded-3xl relative overflow-hidden flex flex-col justify-center">
                    <div className="relative z-10">
                       <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                          <MapPin className="text-blue-400"/> CSP Worldview (점·선·면)
                       </h3>
                  
                       {/* SVG Diagram for Dot-Line-Plane */}
                       <div className="w-full aspect-[4/3] relative mb-6">
                          <svg className="w-full h-full" viewBox="0 0 400 300">
                              {/* Defs for gradients/markers */}
                             <defs>
                                <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                   <path d="M0,0 L0,6 L9,3 z" fill="#60A5FA" />
                                </marker>
                                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                   <feGaussianBlur stdDeviation="3" result="blur" />
                                   <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                </filter>
                             </defs>

                             {/* Step 1: Dots (Scattered) */}
                            <g className="animate-pulse-slow">
                                <circle cx="50" cy="250" r="4" fill="#3B82F6" />
                                <circle cx="120" cy="220" r="4" fill="#3B82F6" />
                                <circle cx="80" cy="280" r="4" fill="#3B82F6" />
                                <text x="50" y="270" fill="#94A3B8" fontSize="10" textAnchor="middle">Brand</text>
                             </g>

                              {/* Step 2: Lines (Connecting) */}
                             <g opacity="0.6">
                                <line x1="50" y1="250" x2="120" y2="220" stroke="#60A5FA" strokeWidth="1" strokeDasharray="4 4" />
                                <line x1="120" y1="220" x2="200" y2="150" stroke="#60A5FA" strokeWidth="1" strokeDasharray="4 4" />
                                <line x1="80" y1="280" x2="120" y2="220" stroke="#60A5FA" strokeWidth="1" strokeDasharray="4 4" />
                             </g>

                              {/* Step 3: Plane (Area/City) */}
                             <path d="M180,50 L350,50 L350,200 L200,200 Z" fill="rgba(59, 130, 246, 0.1)" stroke="#3B82F6" strokeWidth="2" />
                             <text x="265" y="130" fill="white" fontSize="14" fontWeight="bold" textAnchor="middle">CITY (면)</text>
                             <text x="265" y="150" fill="#94A3B8" fontSize="10" textAnchor="middle">Sustainable Ecosystem</text>

                             {/* Connecting Curve */}
                             <path d="M120,220 Q160,180 200,150" stroke="#60A5FA" strokeWidth="2" markerEnd="url(#arrow)" />
                          </svg>
                       </div>

                       <div className="space-y-4 text-sm text-slate-300">
                           <div className="flex gap-3">
                             <div className="w-6 h-6 rounded bg-blue-900/50 border border-blue-500 flex items-center justify-center shrink-0 font-bold text-xs">1</div>
                             <p><strong className="text-white">점 (Dot):</strong> 지역 곳곳의 잠재력 있는 브랜드와 혁신가를 발굴합니다.</p>
                           </div>
                          <div className="flex gap-3">
                             <div className="w-6 h-6 rounded bg-blue-900/50 border border-blue-500 flex items-center justify-center shrink-0 font-bold text-xs">2</div>
                             <p><strong className="text-white">선 (Line):</strong> 점들을 연결하여 거리(Street)를 만들고 협업 네트워크를 구축합니다.</p>
                          </div>
                          <div className="flex gap-3">
                              <div className="w-6 h-6 rounded bg-blue-900/50 border border-blue-500 flex items-center justify-center shrink-0 font-bold text-xs">3</div>
                             <p><strong className="text-white">면 (Plane):</strong> 선들이 모여 도시(City) 생태계를 완성하고 자립형 경제를 만듭니다.</p>
                          </div>
                       </div>
                    </div>
                 </div>

                 <div className="bg-white border border-slate-200 p-8 rounded-3xl">
                    <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2"><TrendingUp className="text-emerald-600"/> 3-Stage Roadmap</h3>
                     <ul className="space-y-6 relative">
                       <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-slate-100"></div>
                       <li className="flex gap-4 relative">
                          <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold shrink-0 border-2 border-white z-10">1</div>
                          <div>
                             <strong className="block text-sm text-slate-900">기반 구축 (Foundation) - 2025</strong>
                             <div className="text-xs text-slate-500 mt-1 space-y-1">
                                <p className="mb-1"><strong>"왜(Why): 지역혁신가의 가능성을 증명한다."</strong></p>
                                <p>• <strong>투자유치:</strong> 시드/프리A 투자 및 파트너십 1차 협약</p>
                                <p>• <strong>M&A:</strong> 1차 연계기업(지역경영회사) 인수 및 지분 확보</p>
                                <p>• <strong>기술:</strong> 데이터 표준화 및 AI 수요예측 파일럿</p>
                             </div>
                         </div>
                       </li>
                       <li className="flex gap-4 relative">
                          <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold shrink-0 border-2 border-white z-10">2</div>
                          <div>
                             <strong className="block text-sm text-slate-900">확장 (Expansion) - 2026</strong>
                             <div className="text-xs text-slate-500 mt-1 space-y-1">
                                <p className="mb-1"><strong>"어떻게(How): 연결과 협력으로 덩치를 키운다."</strong></p>
                                <p>• <strong>네트워크:</strong> 전국 20개 거점 확보 및 2차 연계기업 M&A</p>
                                <p>• <strong>펀드:</strong> 지역성장펀드 결성 및 자회사 지분 펀드 편입</p>
                                <p>• <strong>시스템:</strong> 운영 대시보드 오픈 및 온체인 정산 도입</p>
                             </div>
                           </div>
                       </li>
                       <li className="flex gap-4 relative">
                          <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shrink-0 border-2 border-white z-10">3</div>
                          <div>
                             <strong className="block text-sm text-slate-900">도시 개발 (City Dev) - 2027~</strong>
                             <div className="text-xs text-slate-500 mt-1 space-y-1">
                                 <p className="mb-1"><strong>"무엇을(What): 자생적 도시 생태계를 완성한다."</strong></p>
                                <p>• <strong>Exit 전략:</strong> SPAC 합병 상장(2027) / BDC 상장(2028)</p>
                                <p>• <strong>글로벌:</strong> 크로스보더 플랫폼 전면 가동</p>
                                <p>• <strong>완성:</strong> 자립형 도시 생태계 구축 및 재투자 선순환</p>
                             </div>
                         </div>
                       </li>
                    </ul>
                 </div>
              </div>

           </div>
       </section>

        {/* --- 05. TECHNOLOGY (TIPS & WEB3) --- */}
        <section className="py-16 md:py-24 border-b border-slate-100 overflow-hidden relative">
           <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
           </div>

           <div className="flex flex-col lg:flex-row gap-16 relative z-10">
             <div className="lg:w-1/3">
               <div className="inline-block mb-6">
                  {/* Enhanced TIPS Badge */}
                  <div className="flex flex-col items-start gap-1">
                     <span className="text-[10px] font-bold text-cyan-600 uppercase tracking-widest pl-1">Government Funded</span>
                     <div className="bg-gradient-to-r from-blue-700 to-cyan-600 text-white px-5 py-2.5 rounded-xl shadow-xl shadow-cyan-200/50 flex items-center gap-3">
                        <div className="bg-white/20 p-1.5 rounded-full"><Rocket size={16} fill="currentColor"/></div>
                        <div>
                            <strong className="block text-sm font-black leading-tight">TIPS 선정 기업</strong>
                           <span className="text-[10px] font-medium opacity-90 block">정부 선정 기술 창업 기업</span>
                        </div>
                    </div>
                  </div>
               </div>
               
               <span className="text-cyan-600 font-bold text-xs md:text-sm tracking-widest uppercase block mb-3 flex items-center gap-2">
                  <Zap size={16} fill="currentColor"/> 05 Technology
                </span>
               <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-8 leading-tight">
                 Tech-Driven<br/>Scale-up
               </h2>
               <p className="text-slate-600 text-sm leading-relaxed mb-8">
                  로컬 비즈니스의 고질적 문제인 '낮은 확장성'과 '불투명성'을 <strong>AI와 Web3</strong> 기술로 혁신합니다.
               </p>
               <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 p-4 bg-white/50 rounded-xl border-2 border-cyan-100 shadow-sm hover:border-cyan-400 transition-colors">
                     <div className="bg-cyan-600 p-2.5 rounded-lg text-white"><Globe size={22}/></div>
                     <div>
                        <strong className="text-cyan-900 text-sm block">Cross-border AI</strong>
                        <span className="text-xs text-cyan-700 font-bold">정부 지원 TIPS 선정 과제</span>
                     </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white/50 rounded-xl border border-violet-100 shadow-sm hover:border-violet-300 transition-colors">
                     <div className="bg-violet-600 p-2.5 rounded-lg text-white"><Coins size={22}/></div>
                     <div>
                        <strong className="text-violet-900 text-sm block">Web3 Governance</strong>
                        <span className="text-xs text-violet-700 font-medium">Trust Protocol & DAO</span>
                     </div>
                  </div>
               </div>
             </div>

             <div className="lg:w-2/3 grid grid-cols-1 gap-12">
                 
                 <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden group ring-1 ring-slate-100">
                    <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-6 flex justify-between items-center text-white">
                       <h3 className="font-bold text-lg flex items-center gap-3">
                          <Bot className="text-cyan-400" size={24}/> Cross-border AI Platform
                       </h3>
                       <span className="bg-cyan-500 text-slate-900 text-[11px] font-black px-3 py-1.5 rounded-full shadow-lg shadow-cyan-500/30 flex items-center gap-1.5">
                          <CheckCircle2 size={12} strokeWidth={3}/> TIPS 선정
                       </span>
                    </div>
                    <div className="p-8">
                       <p className="text-sm text-slate-600 mb-8 leading-relaxed font-medium">
                          "수요 예측 및 물류 자동화 AI를 통해 로컬 제품을 전 세계 마켓플레이스(Amazon, Qoo10 등)에 자동으로 연결합니다."
                       </p>
                       
                       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col items-center text-center relative group-hover:bg-cyan-50/30 transition-colors">
                             <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-500 shadow-sm mb-3 border border-slate-100"><Search size={18}/></div>
                             <strong className="text-sm text-slate-900 mb-1">1. 정보 수집</strong>
                             <div className="text-[10px] text-slate-500 space-y-1">
                                <p>Human-like 시뮬레이션</p>
                                <p>Layout Patterning</p>
                             </div>
                             <div className="mt-3 text-[9px] font-mono bg-white px-2 py-1 rounded border border-slate-200 text-slate-400">
                                Selenium / BS4
                             </div>
                             <div className="hidden md:block absolute top-1/2 -right-3 text-slate-300 z-10 bg-white rounded-full p-0.5"><ArrowRight size={14}/></div>
                          </div>

                           <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col items-center text-center relative group-hover:bg-cyan-50/30 transition-colors">
                             <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-500 shadow-sm mb-3 border border-slate-100"><ScanLine size={18}/></div>
                              <strong className="text-sm text-slate-900 mb-1">2. 마켓 연동</strong>
                             <div className="text-[10px] text-slate-500 space-y-1">
                                <p>카테고리 자동 매칭</p>
                                <p>옵션/속성 자동 추출</p>
                             </div>
                             <div className="mt-3 text-[9px] font-mono bg-white px-2 py-1 rounded border border-slate-200 text-slate-400">
                                 BERT / FastText
                             </div>
                             <div className="hidden md:block absolute top-1/2 -right-3 text-slate-300 z-10 bg-white rounded-full p-0.5"><ArrowRight size={14}/></div>
                          </div>

                          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col items-center text-center relative group-hover:bg-cyan-50/30 transition-colors">
                             <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-500 shadow-sm mb-3 border border-slate-100"><Truck size={18}/></div>
                              <strong className="text-sm text-slate-900 mb-1">3. 판매/배송</strong>
                             <div className="text-[10px] text-slate-500 space-y-1">
                                <p>OCR 상품 자동 등록</p>
                                <p>판매 수요 예측</p>
                             </div>
                             <div className="mt-3 text-[9px] font-mono bg-white px-2 py-1 rounded border border-slate-200 text-slate-400">
                                AI Vision / TF
                             </div>
                          </div>
                       </div>

                       <div className="flex items-center gap-2 mb-4">
                          <Activity size={16} className="text-cyan-600"/>
                          <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">Project Roadmap</span>
                       </div>
                       
                       <div className="border-t border-slate-100 pt-4">
                          <div className="flex justify-between text-[10px] text-slate-500">
                              <div className="flex flex-col items-center w-1/3">
                                <span className="font-bold text-slate-800 mb-1">2025</span>
                                <span className="bg-slate-100 px-2 py-1 rounded">한국 → 미/일 판매</span>
                              </div>
                             <div className="h-px bg-slate-200 flex-1 mx-2 mt-2"></div>
                             <div className="text-center flex flex-col items-center">
                                 <span className="block font-bold text-slate-600 mb-1">2026</span>
                                <span>US/JP <ArrowRight size={8} className="inline"/> KR</span>
                             </div>
                             <div className="h-px bg-slate-200 flex-1 mx-2 mt-2"></div>
                             <div className="text-center flex flex-col items-center">
                                <span className="block font-bold text-cyan-600 mb-1">2027</span>
                                 <span className="bg-cyan-50 text-cyan-700 px-2 py-1 rounded font-bold border border-cyan-100">Global ↔ Global</span>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>

                 <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden group ring-1 ring-slate-100">
                    <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-6 flex justify-between items-center text-white">
                        <h3 className="font-bold text-lg flex items-center gap-3">
                          <Coins className="text-violet-400" size={24}/> On-chain Governance
                       </h3>
                       <span className="bg-violet-500 text-white text-[11px] font-black px-3 py-1.5 rounded-full shadow-lg shadow-violet-500/30">Trust Protocol</span>
                    </div>
                    <div className="p-8">
                       <p className="text-sm text-slate-600 mb-8 leading-relaxed font-medium">
                          블록체인 기반의 투명한 의사결정(DAO)과 자금 집행(Smart Contract) 시스템을 통해 지역 사회의 신뢰 비용을 혁신합니다.
                       </p>
                       
                       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                          <div className="bg-violet-50/50 p-4 rounded-2xl border border-violet-100 text-center relative group-hover:bg-violet-50 transition-colors">
                              <div className="w-10 h-10 mx-auto bg-white rounded-full flex items-center justify-center text-violet-600 mb-3 border border-violet-100 font-bold text-sm shadow-sm">01</div>
                             <strong className="block text-sm text-slate-900 mb-1">Vote</strong>
                             <span className="text-[10px] text-slate-500 block">DAO 가중치 투표</span>
                          </div>
                          <div className="bg-violet-50/50 p-4 rounded-2xl border border-violet-100 text-center relative group-hover:bg-violet-50 transition-colors">
                             <div className="absolute top-1/2 -left-3 w-6 h-px bg-violet-200 hidden md:block"></div>
                              <div className="w-10 h-10 mx-auto bg-white rounded-full flex items-center justify-center text-violet-600 mb-3 border border-violet-100 font-bold text-sm shadow-sm">02</div>
                             <strong className="block text-sm text-slate-900 mb-1">Execute</strong>
                             <span className="text-[10px] text-slate-500 block">Smart Escrow 집행</span>
                          </div>
                          <div className="bg-violet-50/50 p-4 rounded-2xl border border-violet-100 text-center relative group-hover:bg-violet-50 transition-colors">
                             <div className="absolute top-1/2 -left-3 w-6 h-px bg-violet-200 hidden md:block"></div>
                             <div className="w-10 h-10 mx-auto bg-white rounded-full flex items-center justify-center text-violet-600 mb-3 border border-violet-100 font-bold text-sm shadow-sm">03</div>
                             <strong className="block text-sm text-slate-900 mb-1">Proof</strong>
                             <span className="text-[10px] text-slate-500 block">IPFS 온체인 증빙</span>
                          </div>
                       </div>

                       <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-3 text-center">Development Phases</span>
                          <div className="flex justify-between items-center text-[10px] text-slate-500 relative">
                             <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -z-10"></div>
                              <span className="bg-white px-2 py-1 rounded border border-slate-200 relative z-10">설계</span>
                             <span className="bg-white px-2 py-1 rounded border border-violet-200 text-violet-700 font-bold relative z-10 shadow-sm">파일럿</span>
                             <span className="bg-white px-2 py-1 rounded border border-slate-200 relative z-10">시범운영</span>
                             <span className="bg-white px-2 py-1 rounded border border-slate-200 relative z-10">DAO</span>
                          </div>
                       </div>
                    </div>
                 </div>

             </div>
           </div>
        </section>

        {/* --- 06. ALLIANCE (Network Expansion) --- */}
        <section className="py-16 md:py-24 border-b border-slate-100">
           <div className="mb-12 text-center md:text-left">
             <span className="text-pink-600 font-bold text-xs md:text-sm tracking-widest uppercase block mb-3 flex items-center justify-center md:justify-start gap-2">
               <span className="w-8 h-px bg-pink-600"></span> 06 Alliance
             </span>
             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Connecting<br/>The Dots</h2>
             <p className="text-slate-600 max-w-2xl mx-auto md:mx-0">전국 주요 거점의 '지역경영회사'들과 연합하여 사업을 공동 성장시킵니다.</p>
           </div>

           {/* 1. Alliance Structure: Anchor & Content with CSP Hub */}
           <div className="flex flex-col items-center gap-8 mb-20">
              
              {/* CSP HQ Hub */}
              <div className="w-full max-w-sm text-center relative z-20">
                 <div className="bg-slate-900 text-white px-8 py-4 rounded-2xl shadow-xl inline-flex flex-col items-center border-4 border-slate-100">
                    <span className="text-xs font-bold text-blue-400 mb-1">STRATEGIC HUB</span>
                    <h3 className="text-2xl font-black tracking-tight">CSP</h3>
                     <p className="text-[10px] text-slate-400 mt-1">Community Scale-up Partners</p>
                 </div>
                 {/* Connector Lines */}
                 <div className="absolute top-full left-1/2 -translate-x-1/2 h-8 w-0.5 bg-slate-300"></div>
                 <div className="absolute top-[calc(100%+32px)] left-1/4 right-1/4 h-0.5 bg-slate-300"></div>
                 <div className="absolute top-[calc(100%+32px)] left-1/4 h-8 w-0.5 bg-slate-300"></div>
                 <div className="absolute top-[calc(100%+32px)] right-1/4 h-8 w-0.5 bg-slate-300"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-8">
                 {/* Anchor Partners (연결기업) */}
                 <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 relative group hover:border-slate-300 transition-colors">
                    <div className="absolute -top-3 left-8 bg-white border border-slate-200 px-3 py-1 rounded-full text-[10px] font-bold text-slate-500 shadow-sm flex items-center gap-1">
                       <Anchor size={12} className="text-pink-600"/> REGIONAL HUBS
                     </div>
                    <h3 className="font-bold text-lg mb-6 text-slate-900 flex items-center gap-2">
                       Anchor Partners
                       <span className="text-xs font-normal text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-100">연결기업</span>
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                       {[
                          {name: '공존공간', loc: '수원/행궁', role: 'Town Management', desc: 'F&B, 공간매니지먼트, 도시문화기획'},
                          {name: '윙윙', loc: '대전', role: 'Community', desc: '유휴공간 재생, 청년 커뮤니티, 로컬 프로그램'},
                          {name: '콘텐츠 복덕방', loc: '제주', role: 'Lifestyle', desc: '지역 네트워킹, 스테이, 편집샵 운영'},
                          {name: '괜찮아마을', loc: '전남/목포', role: 'Travel', desc: '지역 체류 여행, 워케이션, 로컬 브랜딩'}
                       ].map((item, i) => (
                          <div key={i} className="bg-white p-3 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                             <div className="flex justify-between items-start mb-2">
                                 <span className="text-[10px] font-bold text-pink-600 bg-pink-50 px-1.5 py-0.5 rounded">{item.loc}</span>
                                <span className="text-[9px] text-slate-400">{item.role}</span>
                             </div>
                              <strong className="block text-sm text-slate-900 mb-1">{item.name}</strong>
                             <p className="text-[10px] text-slate-500 leading-tight">{item.desc}</p>
                          </div>
                       ))}
                    </div>
                 </div>
                 
                 {/* Content Partners (파트너기업) */}
                 <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 relative group hover:border-slate-300 transition-colors">
                    <div className="absolute -top-3 left-8 bg-white border border-slate-200 px-3 py-1 rounded-full text-[10px] font-bold text-slate-500 shadow-sm flex items-center gap-1">
                       <Layers size={12} className="text-blue-600"/> FUNCTIONAL EXPERTS
                    </div>
                     <h3 className="font-bold text-lg mb-6 text-slate-900 flex items-center gap-2">
                       Content Partners
                       <span className="text-xs font-normal text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-100">파트너기업</span>
                    </h3>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                       {[
                          {name: '비로컬 (BELOCAL)', role: 'Media', desc: '로컬 미디어, 창업 교육, 브랜딩 컨설팅'},
                          {name: '아트스퀘어', role: 'Art', desc: '아트 콘텐츠, 전시기획, 예술품 공동투자'},
                          {name: 'GMEG', role: 'MICE', desc: '글로벌 전시, 페스티벌 기획, 해외 에이전시'},
                          {name: '제로포인트트레일', role: 'Outdoor', desc: '아웃도어 액티비티, 트래킹 코스 개발'}
                       ].map((item, i) => (
                          <div key={i} className="bg-white p-3 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                             <div className="flex justify-between items-start mb-2">
                                <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">{item.role}</span>
                             </div>
                             <strong className="block text-sm text-slate-900 mb-1">{item.name}</strong>
                             <p className="text-[10px] text-slate-500 leading-tight">{item.desc}</p>
                          </div>
                       ))}
                    </div>
                 </div>
              </div>
           </div>

           {/* 2. Dual Expansion Graph (Anchor vs Partner) */}
           <div className="mt-16">
             <div className="mb-6 flex justify-between items-end">
                <div>
                   <h3 className="text-2xl font-bold text-slate-900 mb-1">Network Expansion (2025-2033)</h3>
                   <p className="text-sm text-slate-500">연결기업의 안정화와 파트너기업의 확장을 통한 이원화 성장 전략</p>
                </div>
                <div className="flex gap-4 text-xs">
                   <span className="flex items-center gap-1.5"><div className="w-3 h-1 bg-slate-800 rounded-full"></div>연결기업 (Anchor)</span>
                   <span className="flex items-center gap-1.5"><div className="w-3 h-1 bg-pink-500 rounded-full"></div>파트너기업 (Contents)</span>
                </div>
             </div>

             <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm relative overflow-hidden overflow-x-auto">
                <div className="relative h-64 flex items-end justify-between px-2 z-10 min-w-[600px] gap-2">
                   {[
                      {y: '2025', a: 8, p: 12},
                      {y: '2026', a: 12, p: 20},
                      {y: '2027', a: 12, p: 28},
                      {y: '2028', a: 12, p: 36},
                      {y: '2029', a: 12, p: 44},
                      {y: '2030', a: 12, p: 52},
                      {y: '2033', a: 12, p: 75},
                   ].map((d, i) => (
                      <div key={i} className="flex-1 flex flex-col justify-end items-center group relative h-full">
                         {/* Anchor Bar (Bottom) */}
                          <div className="w-full max-w-[20px] bg-slate-800 rounded-b-md relative z-10" style={{height: `${d.a * 1.5}%`}}>
                            <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] font-bold text-slate-600">{d.a}</span>
                         </div>
                         {/* Partner Bar (Top Stacked visually but separate) */}
                         <div className="w-full max-w-[20px] bg-pink-500 rounded-t-md mb-0.5 relative z-10" style={{height: `${d.p * 1.5}%`}}>
                            <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[9px] font-bold text-pink-600">{d.p}</span>
                          </div>
                         <div className="mt-3 text-xs font-bold text-slate-400 group-hover:text-slate-900">{d.y}</div>
                      </div>
                   ))}
                </div>
             </div>
           </div>
        </section>

        {/* --- 07. GROWTH --- */}
        <section className="py-16 md:py-24">
          
          {/* 7.1 Capital Circulation & Year Plan */}
          <div className="mb-24">
             <div className="text-center mb-12">
                <span className="text-slate-900 font-bold text-xs md:text-sm tracking-widest uppercase block mb-3">07 Growth</span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Capital Circulation & Roadmap</h2>
                <p className="text-slate-600 text-lg">자본 순환 구조를 통한 지속 성장 및 연도별 실행 계획</p>
             </div>

             <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm max-w-5xl mx-auto mb-12">
                {/* Infinity Loop Concept */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 relative">
                   <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -z-10 hidden md:block"></div>
                   {[
                      {t: 'CSP 설립', d: '2024.11', i: <Building2 size={20}/>},
                      {t: '투자유치/펀드', d: '2025.3Q', i: <Coins size={20}/>},
                      {t: 'M&A/지분편입', d: '2025-26', i: <Briefcase size={20}/>},
                      {t: '상장 (SPAC/BDC)', d: '2027-28', i: <Rocket size={20}/>},
                      {t: '재투자/확장', d: '2028~', i: <RefreshCw size={20}/>},
                   ].map((step, idx) => (
                   <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center text-center w-full md:w-40 relative z-10 hover:-translate-y-1 transition-transform">
                         <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-600 mb-2">{step.i}</div>
                         <strong className="block text-sm text-slate-900">{step.t}</strong>
                         <span className="text-xs text-slate-400">{step.d}</span>
                      </div>
                   ))}
                </div>

                {/* Detailed Timeline Table */}
                 <div className="overflow-hidden border border-slate-200 rounded-xl">
                   <div className="grid grid-cols-4 bg-slate-50 text-xs font-bold text-slate-500 uppercase tracking-wider py-3 px-4 border-b border-slate-200">
                      <div>Period</div>
                      <div className="col-span-3">Key Milestones</div>
                   </div>
                   <div className="divide-y divide-slate-100">
                      <div className="grid grid-cols-4 py-4 px-4 hover:bg-slate-50/50">
                         <div className="text-sm font-bold text-slate-900">2025년</div>
                         <div className="col-span-3 text-sm text-slate-600 space-y-1">
                            <p>• <span className="font-bold text-blue-600">투자유치:</span> 시드/프리A 투자 유치 및 파트너십 1차 협약</p>
                            <p>• <span className="font-bold text-blue-600">M&A:</span> 1차 연계기업(지역경영회사) 인수 및 지분 확보</p>
                            <p>• <span className="text-slate-400">기반:</span> 데이터 표준화 및 AI 파일럿 테스트</p>
                         </div>
                      </div>
                      <div className="grid grid-cols-4 py-4 px-4 hover:bg-slate-50/50">
                          <div className="text-sm font-bold text-slate-900">2026년</div>
                         <div className="col-span-3 text-sm text-slate-600 space-y-1">
                            <p>• <span className="font-bold text-blue-600">확장:</span> 2차 연계기업 M&A 및 전국 20개 거점 확보</p>
                             <p>• <span className="font-bold text-blue-600">펀드:</span> 지역성장펀드 결성 및 자회사 지분 펀드 편입</p>
                            <p>• <span className="text-slate-400">시스템:</span> 운영 대시보드 오픈 및 온체인 정산 시범</p>
                         </div>
                      </div>
                      <div className="grid grid-cols-4 py-4 px-4 hover:bg-slate-50/50">
                         <div className="text-sm font-bold text-slate-900">2027년~</div>
                         <div className="col-span-3 text-sm text-slate-600 space-y-1">
                             <p>• <span className="font-bold text-pink-600">Exit:</span> SPAC 합병 상장 (2027) / BDC 상장 추진 (2028)</p>
                            <p>• <span className="font-bold text-pink-600">Global:</span> 글로벌 크로스보더 플랫폼 전면 가동</p>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* 7.2 Financial Roadmap (Area Chart) */}
          <div className="bg-slate-900 rounded-3xl p-6 md:p-10 text-white relative overflow-hidden shadow-2xl max-w-5xl mx-auto border border-slate-800 mb-24">
             {/* Background Glow */}
             <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-900/50 to-transparent pointer-events-none"></div>
             
             <div className="relative h-80 md:h-96 mb-8 pt-10 px-2 md:px-12">
               
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" style={{paddingBottom: '1.5rem', paddingLeft: '1rem', paddingRight: '1rem'}}>
                   <defs>
                      <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                         <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
                         <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                      </linearGradient>
                      <linearGradient id="lineStroke" x1="0" y1="0" x2="1" y2="0">
                         <stop offset="0%" stopColor="#60A5FA" />
                         <stop offset="100%" stopColor="#22D3EE" />
                      </linearGradient>
                   </defs>
                   <path 
                      d="M0,350 L50,320 Q350,200 500,140 T950,10 V350 H0 Z" 
                      fill="url(#areaGradient)" 
                      stroke="none"
                   />
                   <path 
                      d="M0,350 L50,320 Q350,200 500,140 T950,10" 
                      fill="none" 
                      stroke="url(#lineStroke)" 
                      strokeWidth="4"
                      strokeLinecap="round"
                   />
                </svg>
                
                <div className="absolute left-[5%] bottom-[10%] group">
                   <div className="relative">
                      <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10 relative"></div>
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-32 bg-slate-800/90 backdrop-blur border border-slate-700 p-3 rounded-xl text-center shadow-xl transition-transform hover:scale-110 duration-300 z-20">
                         <span className="text-xs text-slate-400 block mb-1">Foundation</span>
                         <strong className="text-xl text-white font-black block">7.9억</strong>
                         <span className="text-[10px] text-blue-400">2025년</span>
                      </div>
                   </div>
                </div>

                <div className="absolute left-[35%] bottom-[50%] group">
                   <div className="relative">
                      <div className="w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-900 shadow-[0_0_15px_rgba(34,211,238,0.5)] z-10 relative"></div>
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-36 bg-slate-800/90 backdrop-blur border border-slate-700 p-3 rounded-xl text-center shadow-xl transition-transform hover:scale-110 duration-300 z-20">
                         <span className="text-xs text-slate-400 block mb-1">Expansion</span>
                         <strong className="text-2xl text-white font-black block">55.5억</strong>
                         <span className="text-[10px] text-cyan-400">2026년</span>
                       </div>
                   </div>
                   <div className="absolute top-4 left-1.5 w-px h-[140px] bg-cyan-400/20 border-r border-dashed border-cyan-400/50"></div>
                </div>

                 <div className="absolute right-[5%] top-[5%] group">
                   <div className="relative">
                      <div className="w-6 h-6 bg-pink-500 rounded-full border-4 border-slate-900 shadow-[0_0_20px_rgba(236,72,153,0.8)] z-10 relative animate-pulse-slow"></div>
                       <div className="absolute right-0 md:right-8 top-8 md:top-0 w-36 md:w-40 bg-pink-900/80 backdrop-blur border border-pink-500/50 p-4 rounded-xl text-right shadow-2xl transition-transform hover:scale-105 duration-300 z-20">
                         <span className="text-xs text-pink-200 block mb-1 font-bold">Scale-up Goal</span>
                         <strong className="text-2xl md:text-3xl text-white font-black block leading-none">106.9억</strong>
                         <span className="text-[10px] text-pink-300 mt-1 block">2027년 예상 매출</span>
                       </div>
                   </div>
                </div>
             </div>
          </div>

          {/* 7.3 Butterfly Model Card */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
                <div className="bg-slate-50 border border-slate-200 rounded-[3rem] p-12 flex items-center justify-center relative aspect-square lg:aspect-auto h-full min-h-[400px] md:min-h-[500px]">
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-slate-50 to-slate-100 opacity-50"></div>
                   
                   <div className="relative w-full max-w-md aspect-square">
                      {[1, 2, 3, 4].map((i) => (
                         <div key={i} className="absolute inset-0 m-auto border border-emerald-100 rounded-full" style={{width: `${i*25}%`, height: `${i*25}%`}}></div>
                      ))}
                      
                      {[0, 72, 144, 216, 288].map((deg) => (
                         <div key={deg} className="absolute inset-0 m-auto w-px h-full bg-emerald-100" style={{transform: `rotate(${deg}deg)`}}></div>
                      ))}

                      <svg className="absolute inset-0 w-full h-full drop-shadow-2xl" viewBox="0 0 200 200">
                         <polygon 
                            points="100,20 176,76 147,165 53,165 24,76" 
                            fill="rgba(16, 185, 129, 0.1)" 
                            stroke="#059669" 
                            strokeWidth="2"
                            className="animate-pulse-slow"
                         />
                         <circle cx="100" cy="20" r="4" fill="#059669" />
                         <circle cx="176" cy="76" r="4" fill="#059669" />
                         <circle cx="147" cy="165" r="4" fill="#059669" />
                         <circle cx="53" cy="165" r="4" fill="#059669" />
                         <circle cx="24" cy="76" r="4" fill="#059669" />
                      </svg>

                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-10 text-center z-10">
                         <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-md mb-2 mx-auto text-emerald-600 border border-emerald-50"><UserCheck size={16} className="md:w-5 md:h-5"/></div>
                         <strong className="text-xs md:text-sm font-bold text-slate-900 bg-white/80 px-2 rounded">기업가</strong>
                         <span className="text-[8px] md:text-[10px] text-slate-500 block">Entrepreneur</span>
                      </div>
                      <div className="absolute top-[30%] right-0 translate-x-4 md:translate-x-8 text-center z-10">
                          <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-md mb-2 mx-auto text-emerald-600 border border-emerald-50"><Leaf size={16} className="md:w-5 md:h-5"/></div>
                         <strong className="text-xs md:text-sm font-bold text-slate-900 bg-white/80 px-2 rounded">브랜드</strong>
                         <span className="text-[8px] md:text-[10px] text-slate-500 block">Brand</span>
                      </div>
                      <div className="absolute bottom-[10%] right-0 translate-x-2 md:translate-x-4 text-center z-10">
                         <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-md mb-2 mx-auto text-emerald-600 border border-emerald-50"><Briefcase size={16} className="md:w-5 md:h-5"/></div>
                         <strong className="text-xs md:text-sm font-bold text-slate-900 bg-white/80 px-2 rounded">사업</strong>
                         <span className="text-[8px] md:text-[10px] text-slate-500 block">Business</span>
                      </div>
                      <div className="absolute bottom-[10%] left-0 -translate-x-2 md:-translate-x-4 text-center z-10">
                         <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-md mb-2 mx-auto text-emerald-600 border border-emerald-50"><Store size={16} className="md:w-5 md:h-5"/></div>
                         <strong className="text-xs md:text-sm font-bold text-slate-900 bg-white/80 px-2 rounded">시장</strong>
                         <span className="text-[8px] md:text-[10px] text-slate-500 block">Market</span>
                      </div>
                      <div className="absolute top-[30%] left-0 -translate-x-4 md:-translate-x-8 text-center z-10">
                         <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-md mb-2 mx-auto text-emerald-600 border border-emerald-50"><Map size={16} className="md:w-5 md:h-5"/></div>
                         <strong className="text-xs md:text-sm font-bold text-slate-900 bg-white/80 px-2 rounded">지역가치</strong>
                         <span className="text-[8px] md:text-[10px] text-slate-500 block">Local Value</span>
                      </div>
                   </div>
                </div>

                <div className="space-y-4">
                   <div className="text-left mb-6 border-l-4 border-emerald-500 pl-4">
                      <h3 className="text-2xl font-black text-slate-900">나비성장모델 (LICORN KPI)</h3>
                       <p className="text-sm text-slate-500 mt-1">로컬 브랜드의 지속가능한 성장을 위한 5대 핵심 지표</p>
                   </div>
                   
                   <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex gap-4 items-start group">
                      <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors shrink-0">
                         <UserCheck size={24}/>
                      </div>
                      <div>
                         <h4 className="text-lg font-bold text-slate-900 mb-1">1. 기업가 (Entrepreneurship)</h4>
                         <p className="text-sm text-slate-600 leading-relaxed">기획·경영·협업 역량을 종합 평가합니다. 창의적 사고와 리더십, 네트워크 활용 능력을 측정하여 기업가의 성장 가능성을 진단합니다.</p>
                      </div>
                   </div>
                   <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex gap-4 items-start group">
                      <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors shrink-0">
                         <Leaf size={24}/>
                      </div>
                      <div>
                         <h4 className="text-lg font-bold text-slate-900 mb-1">2. 브랜드 (Brand Value)</h4>
                         <p className="text-sm text-slate-600 leading-relaxed">로컬 정체성의 확립과 확장성을 평가합니다. 지역 고유성을 담은 스토리텔링과 글로벌 시장에서의 소구력을 측정합니다.</p>
                      </div>
                   </div>
                   <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex gap-4 items-start group">
                       <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors shrink-0">
                         <Briefcase size={24}/>
                      </div>
                      <div>
                         <h4 className="text-lg font-bold text-slate-900 mb-1">3. 사업 (Business Scale)</h4>
                         <p className="text-sm text-slate-600 leading-relaxed">매출, 고용, 투자 유치 등 정량적 성과를 측정합니다. 비즈니스 모델의 수익성과 지속 가능성을 객관적 데이터로 검증합니다.</p>
                      </div>
                   </div>
                   <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex gap-4 items-start group">
                       <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors shrink-0">
                         <Store size={24}/>
                      </div>
                      <div>
                         <h4 className="text-lg font-bold text-slate-900 mb-1">4. 시장 (Market Impact)</h4>
                         <p className="text-sm text-slate-600 leading-relaxed">시장 경쟁력과 산업 생태계 파급력을 분석합니다. 신규 시장 창출 능력과 경쟁 우위 요소를 평가합니다.</p>
                      </div>
                   </div>
                   <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex gap-4 items-start group">
                       <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors shrink-0">
                         <Map size={24}/>
                      </div>
                      <div>
                         <h4 className="text-lg font-bold text-slate-900 mb-1">5. 지역가치 (Local Impact)</h4>
                         <p className="text-sm text-slate-600 leading-relaxed">지역 자원 활용도와 상권 활성화 기여도를 측정합니다. 지역 사회와의 상생 및 로컬 가치 사슬 연계성을 중점적으로 봅니다.</p>
                      </div>
                   </div>
                </div>
          </div>

          {/* 6.3 UN SDGs */}
          <div className="bg-white border border-slate-200 rounded-3xl p-10 shadow-sm relative overflow-hidden">
             {/* Background Decoration */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-bl-full -z-10"></div>
             
             <div className="mb-10 text-center md:text-left">
                <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                   <div className="bg-blue-600 p-2 rounded-lg text-white"><Globe size={24}/></div>
                   <h3 className="text-3xl font-bold text-slate-900">UN SDGs Alignment</h3>
                </div>
                <p className="text-slate-600 max-w-3xl leading-relaxed">
                   CSP는 지역의 문제를 비즈니스 솔루션으로 풀어내며, <strong>UN 지속가능발전목표(SDGs)</strong>의 구체적인 실현을 목표로 합니다.
                </p>
             </div>

             <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
                {[
                   { t: 'Testbed', d: '파일럿 실증 환경 제공' },
                   { t: 'ESG Coaching', d: '임팩트 KPI 설계/측정' },
                   { t: 'B2B Connect', d: '공공/기업 판로 개척' },
                   { t: 'Fund Match', d: '성장 자금(VC) 연계' },
                   { t: 'Management', d: '운영 고도화/규제 해결' },
                ].map((item, i) => (
                   <div key={i} className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center hover:bg-slate-100 transition-colors">
                      <strong className="block text-xs font-bold text-blue-600 mb-1 uppercase tracking-wider">{item.t}</strong>
                      <span className="text-[11px] text-slate-500 font-medium">{item.d}</span>
                  </div>
                ))}
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="group relative bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 overflow-hidden">
                   <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                   <div className="flex items-start gap-4 mb-4 relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-green-500 text-white flex items-center justify-center font-black text-xl shadow-md shrink-0">3</div>
                      <div>
                         <span className="text-[10px] font-bold text-green-600 uppercase tracking-wider bg-green-50 px-2 py-0.5 rounded border border-green-100 mb-1 inline-block">Good Health</span>
                         <h4 className="text-lg font-bold text-slate-900">건강과 웰빙</h4>
                      </div>
                   </div>
                   <p className="text-sm text-slate-600 leading-relaxed pl-16 border-l-2 border-green-100">
                      지역 생활권 내 <strong>문화·운동·돌봄 인프라</strong>를 확충하여 주민의 신체적·정신적·사회적 건강을 증진하는 로컬 서비스를 육성합니다.
                   </p>
                </div>

                <div className="group relative bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 overflow-hidden">
                   <div className="absolute top-0 right-0 w-24 h-24 bg-red-700/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                   <div className="flex items-start gap-4 mb-4 relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-red-700 text-white flex items-center justify-center font-black text-xl shadow-md shrink-0">8</div>
                      <div>
                         <span className="text-[10px] font-bold text-red-700 uppercase tracking-wider bg-red-50 px-2 py-0.5 rounded border border-red-100 mb-1 inline-block">Decent Work</span>
                          <h4 className="text-lg font-bold text-slate-900">양질의 일자리와 경제성장</h4>
                      </div>
                   </div>
                   <p className="text-sm text-slate-600 leading-relaxed pl-16 border-l-2 border-red-100">
                       지역경영회사를 <strong>스케일업(Scale-up)</strong>하여 지역 내 고용을 확대하고, 민간 투자를 유치하여 자생적인 지역 경제 성장을 견인합니다.
                   </p>
                </div>

                <div className="group relative bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 overflow-hidden">
                   <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                   <div className="flex items-start gap-4 mb-4 relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-orange-500 text-white flex items-center justify-center font-black text-xl shadow-md shrink-0">11</div>
                      <div>
                         <span className="text-[10px] font-bold text-orange-600 uppercase tracking-wider bg-orange-50 px-2 py-0.5 rounded border border-orange-100 mb-1 inline-block">Sustainable Cities</span>
                          <h4 className="text-lg font-bold text-slate-900">지속가능한 도시와 공동체</h4>
                      </div>
                   </div>
                   <p className="text-sm text-slate-600 leading-relaxed pl-16 border-l-2 border-orange-100">
                       유휴 공간과 생활 SOC를 <strong>지역 거점(Anchor)</strong>으로 전환하고, 민관 협력 거버넌스를 구축하여 도시의 회복력(Resilience)을 높입니다.
                   </p>
                </div>

                <div className="group relative bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 overflow-hidden">
                   <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-500/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                   <div className="flex items-start gap-4 mb-4 relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-yellow-500 text-white flex items-center justify-center font-black text-xl shadow-md shrink-0">12</div>
                      <div>
                         <span className="text-[10px] font-bold text-yellow-600 uppercase tracking-wider bg-yellow-50 px-2 py-0.5 rounded border border-yellow-100 mb-1 inline-block">Responsible Consumption</span>
                          <h4 className="text-lg font-bold text-slate-900">책임 있는 소비와 생산</h4>
                      </div>
                   </div>
                   <p className="text-sm text-slate-600 leading-relaxed pl-16 border-l-2 border-yellow-100">
                      로컬 조달(Local Sourcing), 재고 최적화, 에너지 절감을 통해 <strong>투명한 공급망</strong>과 <strong>순환 경제</strong> 모델을 정착시킵니다.
                   </p>
                </div>

             </div>
          </div>
        </section>

        {/* --- 07. CEO EPILOGUE (New Section) --- */}
        <section className="py-24 md:py-32 bg-slate-900 text-white relative overflow-hidden">
           {/* Abstract Background */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                 <path d="M0 100 C 20 0 50 0 100 100 Z" fill="url(#epilogueGradient)" />
                 <defs>
                    <linearGradient id="epilogueGradient" x1="0" y1="0" x2="0" y2="1">
                       <stop offset="0%" stopColor="#3B82F6" />
                       <stop offset="100%" stopColor="#10B981" />
                    </linearGradient>
                 </defs>
              </svg>
           </div>
           
           <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
              <div className="mb-10 inline-block p-4 rounded-full bg-white/5 border border-white/10">
                 <Quote size={48} className="text-blue-400" />
              </div>
               
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-12 leading-tight">
                 "좋은 기업이<br/>
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">좋은 도시</span>를 만듭니다."
              </h2>
              
              <div className="prose prose-lg md:prose-xl prose-invert mx-auto mb-16 font-light leading-relaxed text-slate-300">
                 <p>
                    CSP는 단순히 '좋은 일(Doing Good)'을 하는 것에 그치지 않습니다.<br/>
                    우리는 지역에 뿌리내린 기업들이 의미 있는 <strong>성장(Meaningful Growth)</strong>을 이루고,<br/>
                    그 성장이 다시 도시의 생명력이 되는 미래를 만듭니다.
                 </p>
                 <p className="mt-8">
                    자본이 지역에 머물고, 청년이 돌아오며,<br/>
                    도시가 자생적으로 숨 쉬는 <strong>지속 가능한 지역경제 생태계</strong>.<br/>
                    이것이 CSP가 그리는 스케일업의 최종 목적지입니다.
                 </p>
              </div>
              
              <div className="flex flex-col items-center">
                 {/* Signature Effect */}
                 <div className="font-serif italic text-xl md:text-2xl text-slate-400 mb-2">Min Wook-jo</div>
                  <div className="h-px w-20 bg-slate-700 mb-2"></div>
                 <span className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-widest">Representative Partner, CSP</span>
              </div>
           </div>
        </section>

        {/* --- GLOSSARY SECTION --- */}
        <section className="py-20 bg-slate-50 border-t border-slate-200">
           <div className="max-w-5xl mx-auto px-6 md:px-12">
              <div className="flex items-center gap-3 mb-8">
                 <div className="bg-slate-200 p-2 rounded-lg text-slate-500"><BookOpen size={20}/></div>
                 <h3 className="text-xl font-bold text-slate-900">Terminologies</h3>
              </div>
              
               <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                 {[
                    {t: 'Venture Studio (벤처 스튜디오)', d: '내부에서 아이디어를 발굴해 직접 인력과 자본을 투입, 창업부터 성장(Scale-up), 회수(Exit)까지 전 과정을 주도하는 컴퍼니 빌더 모델.'},
                    {t: 'Area Management Company (지역경영회사)', d: '단일 건물을 넘어, 지역 단위로 공간·콘텐츠·커뮤니티를 통합 관리하여 도시의 가치를 높이고 자립형 경제를 만드는 운영 방식.'},
                    {t: 'TCJTC (선순환 모델)', d: 'Traffic(유입) → Capital(자본) → Jobs(일자리) → Traffic(재유입) → Capital(재투자)로 이어지는 지역 경제의 3중 선순환 구조.'},
                    {t: 'Loconomy (로코노미)', d: 'Local과 Economy의 합성어로, 지역 고유의 문화와 특색이 비즈니스 가치가 되는 경제 현상.'},
                    {t: 'Zebra (지브라 기업)', d: '빠른 성장을 추구하는 유니콘과 달리, 수익성과 사회적 가치를 동시에 추구하며 상생하는 지속 가능한 기업.'},
                    {t: 'LICORN (라이콘)', d: 'Lifestyle & Local Unicorn. 라이프스타일 및 로컬 분야에서 혁신을 통해 유니콘으로 성장할 잠재력을 가진 기업.'},
                    {t: 'SPAC / BDC', d: 'SPAC은 기업 인수 목적의 상장 회사, BDC는 비상장 기업에 투자하는 상장형 사업개발회사로 CSP의 주요 회수(Exit) 전략.'},
                 ].map((term, i) => (
                    <div key={i} className="flex gap-4 items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></div>
                       <div>
                          <strong className="block text-sm text-slate-900 mb-1">{term.t}</strong>
                           {/* Visual for TCJTC specific entry */}
                          {term.t.includes('TCJTC') ? (
                             <div className="mt-2 mb-2 p-2 bg-emerald-50 rounded border border-emerald-100 flex items-center justify-between text-[10px] text-emerald-700 font-bold">
                                 <span>Traffic</span> <ArrowRight size={10}/> <span>Capital</span> <ArrowRight size={10}/> <span>Jobs</span> <Repeat size={10}/>
                             </div>
                          ) : null}
                          <p className="text-xs text-slate-500 leading-relaxed">{term.d}</p>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </section>

         {/* --- EXPLORE MORE LINKS --- */}
        <section className="py-20 bg-white border-t border-slate-200">
           <div className="max-w-5xl mx-auto px-6 md:px-12">
              <div className="flex items-center gap-3 mb-8">
                 <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><ExternalLink size={20}/></div>
                 <h3 className="text-xl font-bold text-slate-900">Explore More</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                 <button 
                    onClick={() => window.open('https://www.belocal.kr/news/articleView.html?idxno=2244171', '_blank')}
                    className="flex flex-col items-start p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all text-left h-full group"
                 >
                    <div className="bg-white p-3 rounded-xl mb-4 text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                       <Newspaper size={24}/>
                    </div>
                    <strong className="text-sm font-bold text-slate-900 mb-2 group-hover:text-blue-700">CEO 인터뷰</strong>
                    <p className="text-xs text-slate-500 leading-relaxed">CSP 민욱조 대표가 말하는 지역 혁신과 벤처 스튜디오의 미래</p>
                 </button>

                 <button 
                    onClick={() => window.open('https://www.belocal.kr/news/articleView.html?idxno=2244342', '_blank')}
                    className="flex flex-col items-start p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all text-left h-full group"
                 >
                    <div className="bg-white p-3 rounded-xl mb-4 text-emerald-600 shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                       <TrendingUp size={24}/>
                    </div>
                    <strong className="text-sm font-bold text-slate-900 mb-2 group-hover:text-emerald-700">투자유치 기사</strong>
                    <p className="text-xs text-slate-500 leading-relaxed">CSP의 성장 가능성을 인정한 투자 유치 소식과 향후 계획</p>
                 </button>

                 <button 
                    onClick={() => window.open('https://www.belocal.kr/news/articleList.html?sc_sub_section_code=S2N95&sc_section_code=S1N8&view_type=sm', '_blank')}
                    className="flex flex-col items-start p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all text-left h-full group"
                 >
                    <div className="bg-white p-3 rounded-xl mb-4 text-violet-600 shadow-sm group-hover:bg-violet-600 group-hover:text-white transition-colors">
                       <FileText size={24}/>
                    </div>
                     <strong className="text-sm font-bold text-slate-900 mb-2 group-hover:text-violet-700">공동연구 칼럼</strong>
                    <p className="text-xs text-slate-500 leading-relaxed">비로컬과 함께 연구한 지역경제 활성화 생태계 심층 분석</p>
                 </button>

                 <button 
                    onClick={() => window.open('https://tcjtc.vercel.app', '_blank')}
                    className="flex flex-col items-start p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all text-left h-full group"
                 >
                    <div className="bg-white p-3 rounded-xl mb-4 text-pink-600 shadow-sm group-hover:bg-pink-600 group-hover:text-white transition-colors">
                        <PieChart size={24}/>
                    </div>
                    <strong className="text-sm font-bold text-slate-900 mb-2 group-hover:text-pink-700">공동연구 인포그래픽</strong>
                    <p className="text-xs text-slate-500 leading-relaxed">데이터로 보는 지역 경제 선순환 모델 시각화 자료</p>
                 </button>
              </div>
           </div>
        </section>

      </main>

      {/* --- FOOTER (Existing) --- */}
      <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex h-16 px-6 bg-slate-900 rounded-2xl items-center justify-center text-white font-bold text-2xl shadow-xl mb-6">CSP</div>
           <h2 className="text-3xl font-black text-slate-900 mb-4">Join the Scale-up</h2>
          <p className="text-slate-600 mb-8 max-w-md mx-auto text-sm">
            지속 가능한 지역경제 생태계, CSP와 함께 설계하십시오.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200 text-sm">
              <Download size={18} /> Download Full Deck (PDF)
            </button>
            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-900 border border-slate-200 font-bold rounded-lg hover:bg-slate-50 transition-all shadow-sm text-sm" onClick={() => window.print()}>
              <Printer size={18} /> Print View
            </button>
          </div>

          <div className="text-[10px] text-slate-400 border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© 2025 CSP Inc. All rights reserved.</p>
             <p>Based on CSP Corporate Strategic Deck v2.5</p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default CSPWhitepaper;
