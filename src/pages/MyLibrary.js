import React from 'react'
import SnippetGridWrapper from '../wrappers/SnippetGridWrapper'
import SingleSnippetThumb from '../util_components/SingleSnippetThumb'
import PageWrapper from '../wrappers/PageWrapper';

function MyLibrary(){
    return (
        <PageWrapper>
            <SnippetGridWrapper title={"My Library"}>
                <SingleSnippetThumb title={"useFetch Hook"} dateUpdated={Date.now()} tags={['React','Javascript']} desc="Declarative fetch api that allows to make a variety of requests using a single line function"/>
                <SingleSnippetThumb title={"useFetch Hook"} dateUpdated={Date.now()} tags={['React','Javascript']} desc="Declarative fetch api that allows to make a variety of requests using a single line function"/>
                <SingleSnippetThumb title={"useFetch Hook"} dateUpdated={Date.now()} tags={['React','Javascript']} desc="Declarative fetch api that allows to make a variety of requests using a single line function"/>
                <SingleSnippetThumb title={"useFetch Hook"} dateUpdated={Date.now()} tags={['React','Javascript']} desc="Declarative fetch api that allows to make a variety of requests using a single line function"/>
                <SingleSnippetThumb title={"useFetch Hook"} dateUpdated={Date.now()} tags={['React','Javascript']} desc="Declarative fetch api that allows to make a variety of requests using a single line function"/>
                <SingleSnippetThumb title={"useFetch Hook"} dateUpdated={Date.now()} tags={['React','Javascript']} desc="Declarative fetch api that allows to make a variety of requests using a single line function"/>
            </SnippetGridWrapper>
        </PageWrapper>
    )
}

export default MyLibrary
