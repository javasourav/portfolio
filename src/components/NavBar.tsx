import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' }
]

const NavBar = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const stored = window.localStorage.getItem('portfolio-theme') as 'light' | 'dark' | null
    const initialTheme = stored ?? 'light'
    setTheme(initialTheme)
    document.documentElement.dataset.theme = initialTheme
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(nextTheme)
    document.documentElement.dataset.theme = nextTheme
    window.localStorage.setItem('portfolio-theme', nextTheme)
  }

  return (
    <header className="nav-bar fade-slide">
      <div className="nav-brand">
        <span>Sourav Kumar Negi</span>
        <small>Frontend Developer</small>
      </div>
      <nav className="nav-links">
        {navLinks.map(link => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
      <button onClick={toggleTheme} className="theme-toggle" type="button">
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </header>
  )
}

export default NavBar
