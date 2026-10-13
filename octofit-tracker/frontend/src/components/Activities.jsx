import CollectionPage from './CollectionPage.jsx'
import { fetchCollection as fetch } from '../api.js'
import useCollection from '../hooks/useCollection.js'

function Activities() {
  const { items, error, isLoading } = useCollection('/api/activities/', fetch)

  return (
    <CollectionPage
      title="Activities"
      description="A record of the movement you and your team have logged."
      items={items}
      error={error}
      isLoading={isLoading}
      emptyMessage="No activities have been logged yet."
    >
      <div className="row g-3">
        {items.map((activity) => (
          <article className="col-md-6 col-lg-4" key={activity._id || `${activity.user}-${activity.type}-${activity.date}`}>
            <div className="card card-body h-100 shadow-sm">
              <h2 className="h5">{activity.type || activity.name || 'Activity'}</h2>
              <p className="text-body-secondary mb-1">Athlete: {activity.user?.name || activity.user?.username || 'Member'}</p>
              <p className="mb-1">{activity.durationMinutes ?? activity.duration ?? '—'} min</p>
              {activity.distanceKm != null && <p className="mb-1">{activity.distanceKm} km</p>}
              {activity.points != null && <p className="text-success fw-semibold mb-0">{activity.points} points</p>}
            </div>
          </article>
        ))}
      </div>
    </CollectionPage>
  )
}

export default Activities
