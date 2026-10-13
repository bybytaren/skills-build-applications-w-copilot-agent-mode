import CollectionPage from './CollectionPage.jsx'
import { fetchCollection as fetch } from '../api.js'
import useCollection from '../hooks/useCollection.js'

function Workouts() {
  const { items, error, isLoading } = useCollection('/api/workouts/', fetch)

  return (
    <CollectionPage
      title="Workouts"
      description="Pick a session and make today count."
      items={items}
      error={error}
      isLoading={isLoading}
      emptyMessage="No suggested workouts are available yet."
    >
      <div className="row g-3">
        {items.map((workout) => (
          <article className="col-md-6 col-lg-4" key={workout._id || workout.name}>
            <div className="card card-body h-100 shadow-sm">
              <h2 className="h5">{workout.name || workout.title || 'Workout'}</h2>
              <p className="text-body-secondary">{workout.description || 'A session to keep your momentum going.'}</p>
              <p className="mb-1">
                {workout.difficulty || 'All levels'}
                {workout.durationMinutes != null ? ` · ${workout.durationMinutes} min` : ''}
              </p>
              {Array.isArray(workout.activities) && workout.activities.length > 0 && (
                <p className="small mb-0">{workout.activities.join(' · ')}</p>
              )}
            </div>
          </article>
        ))}
      </div>
    </CollectionPage>
  )
}

export default Workouts
