import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { test } from "../consts/tests.js";
const Test_detail = () => {
  const navigate = useNavigate();
  const backAction = () => {
    navigate(-1);
  };

  // Get a random index
  const randomIndex = Math.floor(Math.random() * test.length);

  // Get the random element from the array
  const randomElement = test[randomIndex];

  useEffect(() => {
    // Tạo động script để tải Quiz Maker
    const script = document.createElement("script");
    script.src = "https://take.quiz-maker.com/3012/CDN/quiz-embed-v1.js";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      // Logic khởi tạo Quiz Maker có thể được đặt ở đây
      const quizElements = document.querySelectorAll(
        "a[data-quiz],div[data-quiz]"
      );
      if (quizElements) {
        for (let i = 0; i < quizElements.length; i++) {
          quizElements[i].id = "quiz-embed-" + i;
          quizElements[
            i
          ].href = `javascript:var i=document.getElementById('quiz-embed-${i}');try{qz.startQuiz(i)}catch(e){i.start=1;i.style.cursor='wait';i.style.opacity='0.5'};void(0);`;
        }
      }
    };

    return () => {
      // Gỡ bỏ script khi component bị hủy
      document.head.removeChild(script);
    };
  }, []);
  return (
    <div className="w-full h-full">
      <div>
        <img src="./assets/icons/home.png" alt=""></img>
      </div>
      <button
        className="bg-neutral-200 font-bold py-2 px-4 rounded text-sm ml-5 mt-5"
        onClick={backAction}
      >
        Back
      </button>
      <div className="w-full h-full p-10 rounded ">
        <a
          data-quiz= {randomElement.data_quiz}
          data-type="4"
          data-height="100%"
          //   data-fullscreen="true"
          //href="https://take.quiz-maker.com/Q850YR2J4"  Q850YR2J4
          href= {randomElement.url}
        >
          Loading...
        </a>
      </div>
    </div>
  );
};

export default Test_detail;