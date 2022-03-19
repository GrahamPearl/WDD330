import CommentModel from "./CommentModel.js";

const newComment = {
    name: "",
    date: new Date(),
    content: "",
};

const commentList = [];
const commentUI = `<div class="addComment">
<h3>Add a comment</h3>
<input type="text" id="commentInput" />
<button id="commentSubmit">Comment</button>
</div>
<h2>Comments</h2>
<ul class="comments"></ul>`;

export default class Comments {
    constructor(type, elementId) {
        this.type = type;
        this.parentElement = document.getElementById(elementId);
        this.model = new CommentModel(this.type);
        //this.backButton = this.buildBackButton();
    }

    getAllComments() {
        return commentList;
    }

    showCommentsList(post = null) {
        try {
            const parent = document.getElementById(this.parentElement);
            if (parent.innerHTML === "") {
                parent.innerHTML = commentUI;
            }
        } catch (error) {
            console.log(error);
        }
    }

    renderCommentList(element, comments) {
        element.innerHTML = "";
        comments.forEach((element) => {
            let item = document.createElement("li");
            item.innerHTML = "<p>" + element.name + ":" + element.content + "</p>";

            element.appendChild(item);
        });
    }

    filterCommentsByName(hkeName) {
        return this.getAllComments().filter(
            (comment) => comment.hikeName === hikeName
        );
    }

    addComment() {}
}