import { Navigate, Route, Routes } from 'react-router-dom'

function Dashboard() {
  return (
    <main className="container py-5">
      <header className="d-flex align-items-center gap-3 border-bottom pb-4">
        <img
          src="/octofitapp-small.png"
          alt=""
          width="56"
          height="56"
          className="object-fit-contain"
        />
        <div>
          <p className="small text-uppercase text-success fw-semibold mb-1">OctoFit Tracker</p>
          <h1 className="h3 mb-0">Training dashboard</h1>
        </div>
      </header>
      <section className="py-5" aria-labelledby="dashboard-title">
        <h2 id="dashboard-title" className="h5">Your activity</h2>
        <p className="text-body-secondary mb-0">Your workouts and team progress will appear here.</p>
      </section>
    </main>
  )
}

function OctoFitApp() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default OctoFitApp