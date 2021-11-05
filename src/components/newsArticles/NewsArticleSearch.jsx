import React from "react";
import { Form } from './NewsArticleSearchStyles'

export default function NewsArticleSearch({ newsName,onHandleNewsNameChange, onHandleSubmit, newsTitle }){
    return(
        <Form onSubmit={onHandleSubmit}>
        <h1>{newsTitle} NEWS</h1>
            {/* <label htmlFor="newsName">News Name</label> */}
            <input
                id="newsName"
                name="newsName"
                type="text"
                value={newsName}
                onChange={onHandleNewsNameChange}
            />
            <button aria-label="get-news"> Get Your Fave News</button>
        </Form>
    )
}