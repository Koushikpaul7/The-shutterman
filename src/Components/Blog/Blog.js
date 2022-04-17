import React from 'react';

const Blog = () => {
    return (
        <div className='container mt-5'>
        <h3> Difference between authorization and authentication.</h3>
        <br />
        <h5>Authentication:</h5>
        <p><ol>
            <li>Authentication is the checking of identity to provide the access to te system</li>
            <li>In authentication the user will be verified</li>
            <li>Authentication is done before authorization</li>
            </ol></p>
            <h5>Authorization:</h5>
            <p><ol>
                <li>Authorization is what users can and cannot access.</li>
                <li>Authorization verifies whether the access of users are allowed  through terms and conditions.</li>
                <li>It is done after successful authentication</li>
                </ol></p>
                <br />
                <h3> Why we are using firebase? What other options do we have to implement authentication?</h3>
                <br />
                <p>The main reasons behind using firebase are:</p>
                <p>Firebase database: It is used to store users data and details.</p>
                <p>Firebase Authentication: We can use the authentication by firebase quite easily.</p>
                <p>Firebase cloud Storage: It is used store the contents like profile pictures , messages etc which are generated bt the users.</p>
                <br />
                <p>Other authentication platform we can use are:</p>
                <p><ol>
                    <li>Ory</li>
                    <li>supabase</li>
                    <li>Octa</li>
                    <li>Keycloak etc</li>
                    </ol></p>

                <h3>What other services does firebase provide other than authentication?</h3>
                <p>The services firebase provides without authentication are:
                    <ul>
                    <li>Cloud storage</li>
                    <li>Google analytics</li>
                    <li>Hosting</li>
                    <li>Predictions</li>
                    <li>Remote Config</li>
                    <li>Cloud firestore etc</li>
                    </ul>
                </p>
        </div>
    );
};

export default Blog;