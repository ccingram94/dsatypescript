import { signIn } from 'next-auth/client'

function Unauthorized() {
    return (
        <div className="flex flex-col">
            <div className="bg-pink-900 rounded-xl">
                <h1>oh no you didn't</h1>
                <p>This area cannot be accessed without an account.</p>
                <p>Please sign in here.</p>
                <button onClick={signIn}>sign in</button>
            </div>
        </div>
    )
}

export default Unauthorized