import React from "react";

export default function NewsArticleSearch(){
    return(
        <form>
            <label htmlFor="newsName">News Name</label>
            <input
                id="newsName"
                name="newsName"
                type="text"
                value=''
            />
            <button aria-label="get-news"> Get Your Fave News</button>
        </form>
    )
}