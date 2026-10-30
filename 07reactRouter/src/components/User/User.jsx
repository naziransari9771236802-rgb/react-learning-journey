import { useParams } from 'react-router-dom'

function User() {
const params = useParams()

console.log('User Params:', params)

return (
    <div>
        <h1>User ID: {params.userid}</h1>
    </div>
)

}

export default User
