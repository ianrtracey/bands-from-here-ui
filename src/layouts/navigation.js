import React from 'react';

const Navigation = (props) => {
    // const title = props.title.site.siteMetadata.title
    return (
    <nav className="db dt-l w-100 border-box pa3 ph5-l">
        <a className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="#" title="Home">
            {/* {title} */}
        </a>
        <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
            <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#" title="Home">Home</a>
            <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#" title="How it Works">How it Works</a>
            <a className="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#" title="Blog">Blog</a>
        </div>
    </nav>
    )
}

export default Navigation