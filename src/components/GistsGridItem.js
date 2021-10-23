import React from 'react'

export const GistsGridItem = ({ description = '', file = '', url = '', language = ''}) => {

    if (!description) {
        description = 'Untitled gist';
    }

    if (!language) {
        language = 'Plain Text';
    }

    return (
        <div className="gist-card">
            <div className="description">
                <span>{description}</span>
                <div className="forks">
                    <button>Open Fork</button>
                    <a href={url} target="__blank" ><i className="fas fa-paperclip"></i></a>
                </div>
            </div>

            <hr/>

            <div className="files">
            <h4>Files</h4>
            <i className="fas fa-file"> <span> {file} </span> </i>
            <span className="language" style={{
                backgroundColor: language === 'JavaScript' && '#FF5050'
            }}> {language} </span>
            </div>


        </div>
    )
}
