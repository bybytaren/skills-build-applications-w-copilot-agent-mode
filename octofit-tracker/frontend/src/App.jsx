import { Link, Navigate, NavLink, Route, Routes } from 'react-router-dom'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'

const sections = [
  { label: 'Activities', path: '/activities' },
  { label: 'Leaderboard', path: '/leaderboard' },
  { label: 'Teams', path: '/teams' },
  { label: 'Users', path: '/users' },
  { label: 'Workouts', path: '/workouts' },
]

function Dashboard() {
  return (
    <section className="py-5" aria-labelledby="dashboard-title">
      <p className="small text-uppercase text-success fw-semibold mb-2">Move together</p>
      <h1 id="dashboard-title" className="display-5 fw-bold">Your training, in sync.</h1>
      <p className="lead text-body-secondary mb-4">
        Track activity, cheer on your team, and find your next workout.
      </p>
      <div className="row g-3">
        {sections.map(({ label, path }) => (
          <div className="col-sm-6 col-lg-4" key={path}>
            <Link className="card card-body h-100 text-decoration-none shadow-sm" to={path}>
              <span className="fw-semibold text-success">{label}</span>
              <span className="text-body-secondary small mt-2">Explore {label.toLowerCase()}</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

function App() {
  return (
    <div className="container py-4">
      <header className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3 border-bottom pb-3">
        <Link className="d-flex align-items-center gap-3 text-decoration-none text-body" to="/">
          <img
            src="/octofitapp-small.png"
            alt=""
            width="52"
            height="52"
            className="object-fit-contain"
          />
          <span>
            <span className="d-block small text-uppercase text-success fw-semibold">OctoFit Tracker</span>
            <span className="d-block fw-bold">Training dashboard</span>
          </span>
        </Link>
        <nav className="nav nav-pills flex-wrap" aria-label="Main navigation">
          {sections.map(({ label, path }) => (
            <NavLink
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              key={path}
              to={path}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
