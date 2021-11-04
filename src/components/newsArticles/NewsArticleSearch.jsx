import React from "react";

export default function NewsArticleSearch({ newsName,onHandleNewsNameChange, onHandleSubmit }){
    return(
        <form onSubmit={onHandleSubmit}>
            <label htmlFor="newsName">News Name</label>
            <input
                id="newsName"
                name="newsName"
                type="text"
                value={newsName}
                onChange={onHandleNewsNameChange}
            />
            <button aria-label="get-news"> Get Your Fave News</button>
        </form>
    )
}