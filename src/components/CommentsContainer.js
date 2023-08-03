import React from 'react';

const commentsData = [
    {
        nam: "barkkha",
        text: "lorem is very beautiful",
        replies: [
            {
                nam: "barkkha",
        text: "lorem is very beautiful",
        replies: [
            {
                nam: "barkkha",
                text: "lorem is very beautiful",
                replies:[
                    {
                        nam: "barkkha",
                        text: "lorem is very beautiful",
                        replies:[]
                    },
                ],
            },
            {
                nam: "barkkha",
                text: "lorem is very beautiful",
                replies:[]
            },
        ],
            },
            {nam: "barkkha",
            text: "lorem is very beautiful",
            replies: []
        },
        {
            nam: "barkkha",
            text: "lorem is very beautiful",
            replies:[]
        },
        {
            nam: "barkkha",
            text: "lorem is very beautiful",
            replies:[]
        },
            
        ],
    },
    {
        nam: "barkkha",
        text: "lorem is very beautiful",
        replies: [],
    },
    {
        nam: "barkkha",
        text: "lorem is very beautiful",
        replies: [],
    },
    {
        nam: "barkkha",
        text: "lorem is very beautiful",
        replies: [],
    },
];

const Comment = ({ data }) => {
   const{ nam, text, replies} = data;
    return <div className="flex shadow-sm bg-gray-100 rounded-sm p-2 m-3">
        <img className="h-8 w-8"
        alt="user" src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
      />
      <div className="px-3">
        <p className="font-bold">{nam}</p>
        <p>{text}</p>
      </div>
        </div>;
}; 

const CommentsList = ({ comments }) => {
    return comments.map((comment, index) => (
        <div key={index}>
      <Comment  data={comment} />
      <div className="pl-5 border border-l-black ml-5">
      <CommentsList comments={comment.replies} />
         
      </div> 
      </div>
    ));
  };

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
        <h1 className="text-2xl font-bold">Comments: </h1>
        <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
