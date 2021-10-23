import { Formik, Form, Field } from 'formik';
import React, { useState } from 'react'
import { GistsGrid } from './components/GistsGrid';


export const GistApp = () => {

    const [user, setUser] = useState('');

    return (
        <>
            <div className="app">

                <Formik initialValues={
                    {
                        username: ''
                    }
                }

                    onSubmit={
                        ({ username }) => {
                            document.querySelector('form input').value = '';
                            setUser(username);

                        }
                    }
                >

                    <Form>

                        <Field id="username" name="username" placeholder="User name" autoComplete="off" />
                        <button type="submit" className="btn-submit"> Get Gists </button>
                        <button type="button" className="btn-reset" onClick={ () => {document.querySelector('form input').value = '';} } > Reset </button>

                    </Form>


                </Formik>

                <i className="fab fa-github">GitHub Gists</i>

            </div>
            
            <hr />

            {
                //if
                user !== '' ? (

                    <div>
                        <GistsGrid user={user} />
                    </div>

                )

                    //else
                    :
                    (
                        <p>No gists found. Try searching by a username.</p>
                    )



            }

        </>
    )
}
