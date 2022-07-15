export const UssersList =({users}) => (
    <ul>
    {
        users.map(user =>   <li key={user.id}>{user.name}</li>
)
    }
    </ul>
)