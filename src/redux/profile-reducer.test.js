import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from 'react';

let state = {
    posts: [
        {id: 1, message: 'Hi, how are u?', likesCount: 12},
        {id: 2, message: 'it is my first post', likesCount: 5}]
};

it('length of posts should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator('it-kamas')

    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(3);
});

it('message of new post should be correct', () => {
    // 1. test data
    let action = addPostActionCreator('it-kamas')

    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts[2].message).toBe('it-kamas');
});

it('after deleting length of messages should be decrement', () => {
    // 1. test data
    let action = deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(1);
});

it('after deleting length shouldnt be decrement if id is incorrect', () => {
    // 1. test data
    let action = deletePost(1000);

    // 2. action
    let newState = profileReducer(state, action);
    // 3. expectation
    expect(newState.posts.length).toBe(2);
});