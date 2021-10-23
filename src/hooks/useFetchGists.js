import { useEffect, useState } from 'react'
import { getGists } from '../helpers/getGists';


export const useFetchGists = (username) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        
        getGists(username)
        .then((gists) => setState({
            data: gists,
            loading: false
        }));

        
    }, [username])

    return state;

}
