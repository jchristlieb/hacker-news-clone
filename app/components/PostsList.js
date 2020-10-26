import React from 'react'
import PropTypes from 'prop-types'
import PostMetaInfo from "./PostMetaInfo";
import Title from "./Title";

export default function PostsList({posts}) {
    if (posts.left === 0) {
        return (
            <p className="center-text">
                This user hasn't posted yet
            </p>
        )
    }
    return (
        <ul>
            {posts.map((post) => {
                return (
                    <li key={post.id} className="post">
                        <Title id={post.id} title={post.title} url={post.url}/>
                        <PostMetaInfo
                            by={post.by}
                            time={post.time}
                            id={post.id}
                            descendants={post.descendants}
                        />
                    </li>
                )
            })}
        </ul>
    )
}

PostsList.propTypes = {
    posts: PropTypes.array.isRequired
}
