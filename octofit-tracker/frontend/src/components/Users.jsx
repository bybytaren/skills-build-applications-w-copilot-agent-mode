import CollectionPage from './CollectionPage.jsx'
import { fetchCollection as fetch } from '../api.js'
import useCollection from '../hooks/useCollection.js'

function Users() {
  const { items, error, isLoading } = useCollection('/api/users/', fetch)

  return (
    <CollectionPage
      title="Athletes"
      description="Meet the members tracking their progress with OctoFit."
      items={items}
      error={error}
      isLoading={isLoading}
      emptyMessage="No athletes have joined yet."
    >
      <div className="row g-3">
        {items.map((user) => (
          <article className="col-md-6 col-lg-4" key={user._id || user.email || user.username}>
            <div className="card card-body h-100 shadow-sm">
              <h2 className="h5">{user.name || user.username || 'Athlete'}</h2>
              {user.username && <p className="text-body-secondary mb-1">@{user.username}</p>}
              {user.email && <p className="mb-0">{user.email}</p>}
            </div>
          </article>
        ))}
      </div>
    </CollectionPage>
  )
}

export default Users
