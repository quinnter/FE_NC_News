import React from 'react'

const ErrorPage = ({ error }) => {
    return (
        <div>
            {error ? <p>{error.response.data.msg}</p> : <p>Page Not Found</p>}
        </div>
    )
}

export default ErrorPage
