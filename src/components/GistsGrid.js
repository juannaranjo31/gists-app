import React from 'react'
import { useFetchGists } from '../hooks/useFetchGists';
import { GistsGridItem } from './GistsGridItem';


export const GistsGrid = React.memo(( {user} ) => {

    const {data, loading} = useFetchGists(user);

    return (
        <div className="gists-grid">
            {
                data.length === 0 ? ( loading ? <p>Loading...</p>: <p>No gists found. Try searching by a username.</p>)
                
                :
        
                data.map( ({html_url, files, description, id}) => {
                    const filename = Object.values(files)[0].filename;
                    const language = Object.values(files)[0].language;
                    return <GistsGridItem description={description} file={filename} url={html_url} language={language} key={id} />;
                })
            }

            
        </div>
    )
})
