import CollectionPage from './CollectionPage.jsx'
import getDisplayName from './displayName.js'
import { fetchCollection as fetch } from '../api.js'
import useCollection from '../hooks/useCollection.js'

function Leaderboard() {
  const { items, error, isLoading } = useCollection('/api/leaderboard/', fetch)

  return (
    <CollectionPage
      title="Leaderboard"
      description="Celebrate the people and teams putting in the work."
      items={items}
      error={error}
      isLoading={isLoading}
      emptyMessage="The leaderboard is waiting for its first activity."
    >
      <div className="list-group shadow-sm">
        {items.map((entry, index) => (
          <article className="list-group-item d-flex align-items-center gap-3" key={entry._id || `${entry.period}-${entry.rank}-${index}`}>
            <span className="badge rounded-pill text-bg-success fs-6">{entry.rank || index + 1}</span>
            <div className="flex-grow-1">
              <h2 className="h6 mb-1">{getDisplayName(entry.user || entry.team || entry.name)}</h2>
              <p className="small text-body-secondary mb-0">
                {entry.team?.name ? `${entry.team.name} · ` : ''}{entry.period || 'All time'}
              </p>
            </div>
            <strong>{entry.points ?? 0} pts</strong>
          </article>
        ))}
      </div>
    </CollectionPage>
  )
}

export default Leaderboard
