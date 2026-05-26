import './App.css'
import { useState, useEffect } from 'react'

const skills = [
  { name: 'JavaScript / TypeScript', level: 90, color: '#f7df1e' },
  { name: 'React / Vue', level: 85, color: '#61dafb' },
  { name: 'Node.js / Python', level: 80, color: '#68a063' },
  { name: 'SQL / NoSQL', level: 75, color: '#336791' },
  { name: 'Git / CI·CD', level: 88, color: '#f05032' },
]

const projects = [
  {
    title: '포트폴리오 웹사이트',
    desc: 'Vite + React로 제작한 개인 소개 페이지. 반응형 디자인과 부드러운 애니메이션 적용.',
    tags: ['Vite', 'React', 'CSS'],
    emoji: '🌐',
  },
  {
    title: '사내 데이터 대시보드',
    desc: '실시간 데이터를 시각화하는 대시보드. Chart.js와 WebSocket을 활용해 구현.',
    tags: ['Chart.js', 'WebSocket', 'Node.js'],
    emoji: '📊',
  },
  {
    title: 'E-커머스 플랫폼',
    desc: '풀스택 쇼핑몰 프로젝트. 결제 API 연동, 주문 관리 시스템 설계 및 구현.',
    tags: ['React', 'Python', 'PostgreSQL'],
    emoji: '🛒',
  },
]

export default function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = ['hero', 'about', 'skills', 'projects', 'contact']
      for (const id of sections.reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="portfolio">
      {/* ── NAV ── */}
      <nav className={scrolled ? 'nav scrolled' : 'nav'}>
        <span className="nav-logo" onClick={() => scrollTo('hero')}>YY</span>
        <ul className="nav-links">
          {['about', 'skills', 'projects', 'contact'].map((s) => (
            <li key={s}>
              <button
                className={activeSection === s ? 'active' : ''}
                onClick={() => scrollTo(s)}
              >
                {s === 'about' ? '소개' : s === 'skills' ? '기술' : s === 'projects' ? '프로젝트' : '연락처'}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* ── HERO ── */}
      <section id="hero" className="hero">
        <div className="hero-bg">
          <div className="blob blob1" />
          <div className="blob blob2" />
          <div className="blob blob3" />
        </div>
        <div className="hero-content">
          <div className="avatar">
            <span>YY</span>
          </div>
          <p className="hero-greeting">안녕하세요 👋</p>
          <h1 className="hero-name">양 양<span className="accent">.</span></h1>
          <p className="hero-role">
            <span className="tag-role">풀스택 개발자</span> &amp;{' '}
            <span className="tag-role">UI 엔지니어</span>
          </p>
          <p className="hero-desc">
            사용자 경험을 중심에 두고,<br />
            아름답고 빠른 웹 서비스를 만듭니다.
          </p>
          <div className="hero-cta">
            <button className="btn-primary" onClick={() => scrollTo('projects')}>
              프로젝트 보기
            </button>
            <button className="btn-outline" onClick={() => scrollTo('contact')}>
              연락하기
            </button>
          </div>
        </div>
        <div className="scroll-hint" onClick={() => scrollTo('about')}>
          <span>↓</span>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="section about">
        <div className="section-inner">
          <h2 className="section-title">소개 <span className="accent">·</span></h2>
          <div className="about-grid">
            <div className="about-text">
              <p>
                저는 <strong>사용자가 실제로 즐겨 쓰는 서비스</strong>를 만드는 개발자입니다.
                프론트엔드의 섬세한 인터랙션부터 백엔드의 안정적인 아키텍처까지,
                제품 전반을 이해하고 구현할 수 있습니다.
              </p>
              <p>
                빠른 학습과 팀 커뮤니케이션을 강점으로 삼아, 다양한 도메인에서
                실무 경험을 쌓아왔습니다.
              </p>
              <div className="info-cards">
                <div className="info-card">
                  <span className="info-icon">📍</span>
                  <div>
                    <strong>위치</strong>
                    <p>서울, 대한민국</p>
                  </div>
                </div>
                <div className="info-card">
                  <span className="info-icon">💼</span>
                  <div>
                    <strong>경력</strong>
                    <p>5년+</p>
                  </div>
                </div>
                <div className="info-card">
                  <span className="info-icon">🎓</span>
                  <div>
                    <strong>전공</strong>
                    <p>컴퓨터공학</p>
                  </div>
                </div>
                <div className="info-card">
                  <span className="info-icon">🌐</span>
                  <div>
                    <strong>언어</strong>
                    <p>한국어 / 영어</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-stats">
              <div className="stat-card">
                <span className="stat-num">50+</span>
                <span className="stat-label">완료 프로젝트</span>
              </div>
              <div className="stat-card">
                <span className="stat-num">5+</span>
                <span className="stat-label">협업 기업</span>
              </div>
              <div className="stat-card">
                <span className="stat-num">100%</span>
                <span className="stat-label">납기 준수율</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="section skills">
        <div className="section-inner">
          <h2 className="section-title">기술 스택 <span className="accent">·</span></h2>
          <div className="skills-list">
            {skills.map((skill) => (
              <div key={skill.name} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-pct">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div
                    className="skill-fill"
                    style={{ width: `${skill.level}%`, background: skill.color }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="tech-tags">
            {['React', 'Vue', 'TypeScript', 'Node.js', 'Python', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS', 'Figma', 'Git'].map((t) => (
              <span key={t} className="tech-tag">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="section projects">
        <div className="section-inner">
          <h2 className="section-title">프로젝트 <span className="accent">·</span></h2>
          <div className="project-grid">
            {projects.map((p) => (
              <div key={p.title} className="project-card">
                <div className="project-emoji">{p.emoji}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="project-tag">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="section contact">
        <div className="section-inner">
          <h2 className="section-title">연락처 <span className="accent">·</span></h2>
          <p className="contact-desc">
            새로운 기회나 협업 제안을 언제든지 환영합니다.
          </p>
          <div className="contact-links">
            <a href="mailto:yang_yang94@kdn.com" className="contact-card">
              <span className="contact-icon">✉️</span>
              <strong>이메일</strong>
              <span>yang_yang94@kdn.com</span>
            </a>
            <a href="https://github.com/sky940819-alt" className="contact-card" target="_blank" rel="noreferrer">
              <span className="contact-icon">🐙</span>
              <strong>GitHub</strong>
              <span>sky940819-alt</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <p>© 2026 양양 · Built with Vite + React</p>
      </footer>
    </div>
  )
}
