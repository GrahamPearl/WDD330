export default class CommentModel {
    constructor(type) {
        this.comments = readFromLocalStorage(type) || [];
    }

    showCommentsList() {}
}

function readFromLocalStorage(key) {
    return JSON.parse(window.localStorage.getItem(key));
}

function writeToLocalStorage(key, data) {
    window.localStorage.setItem(key, JSON.stringify(data));
}