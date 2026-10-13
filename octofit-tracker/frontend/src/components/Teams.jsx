import CollectionPage from './CollectionPage.jsx'
import { fetchCollection as fetch } from '../api.js'
import useCollection from '../hooks/useCollection.js'

function Teams() {
  const { items, error, isLoading } = useCollection('/api/teams/', fetch)

  return (
    <CollectionPage
      title="Teams"
      description="Find your crew and see who is moving together."
      items={items}
      error={error}
      isLoading={isLoading}
      emptyMessage="No teams have been created yet."
    >
      <div className="row g-3">
        {items.map((team) => (
          <article className="col-md-6 col-lg-4" key={team._id || team.name}>
            <div className="card card-body h-100 shadow-sm">
              <h2 className="h5">{team.name || 'Team'}</h2>
              <p className="text-body-secondary">{team.description || 'Ready to reach new goals together.'}</p>
              <p className="mb-0">{Array.isArray(team.members) ? team.members.length : team.memberCount || 0} members</p>
              {team.points != null && <p className="text-success fw-semibold mb-0">{team.points} points</p>}
            </div>
          </article>
        ))}
      </div>
    </CollectionPage>
  )
}

export default Teams
