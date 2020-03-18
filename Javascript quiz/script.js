document.getElementById("question_1").style.display = "none";
document.getElementById("stats").style.display = "none";
document.getElementById("answer_d").style.display = "none";

var answer_array = new Array();

var music = new Audio("Kahoot.mp3"); //Background music
var click = new Audio("answer.mp3"); //Button click
var lose = new Audio("lose.mp3"); //plays when score is below 5
var pass = new Audio("pass.mp3"); //plays whwen score is above 6
var win = new Audio("100.mp3"); //plays when score is perfect

var correctAnswers = 0; //var to record how many answers correct

document.getElementById("welcome_text").className = "row h-100 animated fadeIn"; //Animation

document.getElementById("stats").style.zIndex = "1";
document.getElementById("question_1").style.zIndex = "2";

//shows your answers comparing the correct answers
function seeAnswers() {
  music.pause();
  music.currentTime = 0;
  document.getElementById("stats").className = "row h-100 animated fadeOut"; //This is the animation to transition to next

  document.getElementById("results").style.zIndex = "10";

  setTimeout(function() {
    document.getElementById("stats").style.display = "none";
  }, 500); // Sets a timeout to play the animation

  setTimeout(function() {
    document.getElementById("results").style.display = "inline";
    document.getElementById("results").className = "row h-100 animated fadeIn";
  }, 500); //This is the animation
}

function question1() {
  //Display the question

  document.getElementById("welcome_text").className =
    "row h-100 animated fadeOut faster"; //This is the animation

  setTimeout(function() {
    document.getElementById("welcome_text").style.display = "none"; //Sets a timeout to play the animation
  }, 500);

  document.getElementById("welcome_text").style.zIndex = "1";
  document.getElementById("question_1").style.zIndex = "2";

  //The quiz begins here
  setTimeout(function() {
    document.getElementById("question_1").style.display = "flex"; // Sets a timeout to play the animation
  }, 500);

  document.getElementById("question_1").className = "row h-100 animated fadeIn"; //This is the animation
  music.play();

  //Set the question's text and answers
  setTimeout(function() {
    document.getElementById("question").innerHTML = "What does CSS stand for?";
    document.getElementById("answer_a").innerHTML = "Cascading CSS";
    document.getElementById("answer_b").innerHTML = "Cascading style sheets";
    document.getElementById("answer_c").innerHTML = "Cascading separate style";
  }, 500);

  //Checking if the answer is right or wrong then go to the next question
  document.getElementById("answer_d").onclick = function() {
    click.play();
    question2();
  };

  document.getElementById("answer_a").onclick = function() {
    answer_array.push(document.getElementById("answer_a").innerHTML);

    click.play();
    question2();
    results();
  };
  document.getElementById("answer_b").onclick = function() {
    answer_array.push(document.getElementById("answer_b").innerHTML);

    click.play();
    //TODO: correct answer
    correctAnswers += 10;
    question2();
    results();
  };

  document.getElementById("answer_c").onclick = function() {
    answer_array.push(document.getElementById("answer_c").innerHTML);

    click.play();
    question2();
    results();
  };
}

// Question 2 begins as question 1 fades out and replacing the same divs
function question2() {
  document.getElementById("question_1").className =
    "row h-100 animated fadeOut"; //This is the animation to transition to next

  setTimeout(function() {
    document.getElementById("question_1").style.display = "none";
  }, 500); // Sets a timeout to play the animation

  setTimeout(function() {
    document.getElementById("question_1").style.display = "flex";
    document.getElementById("question_1").className =
      "row h-100 animated fadeIn";
  }, 500); //This is the animation

  //Set the question's text and answers
  setTimeout(function() {
    document.getElementById("question").innerHTML =
      "Which attribute can set text to Bold?";
    document.getElementById("answer_a").innerHTML = "Text-decoration";
    document.getElementById("answer_b").innerHTML = "Font Style";
    document.getElementById("answer_c").innerHTML = "Font weight";
  }, 500);

  //Checking if the answer is right or wrong then go to the next question
  //Checking if the answer is right or wrong then go to the next question
  document.getElementById("answer_d").onclick = function() {
    click.pause();
    click.currentTime = 0;
    click.play();
    question3();
    results();
  };

  document.getElementById("answer_a").onclick = function() {
    answer_array.push(document.getElementById("answer_a").innerHTML);

    click.pause();
    click.currentTime = 0;
    click.play();
    question3();
    results();
  };
  document.getElementById("answer_b").onclick = function() {
    answer_array.push(document.getElementById("answer_b").innerHTML);

    click.pause();
    click.currentTime = 0;
    click.play();
    question3();
    results();
  };

  document.getElementById("answer_c").onclick = function() {
    answer_array.push(document.getElementById("answer_c").innerHTML);

    click.pause();
    click.currentTime = 0;
    click.play();
    //TODO: correct answer
    correctAnswers += 10;
    question3();
    results();
  };
}

// Question 3 begins as question 1 fades out and replacing the same divs
function question3() {
  document.getElementById("question_1").className =
    "row h-100 animated fadeOut"; //This is the animation to transition to next

  setTimeout(function() {
    document.getElementById("question_1").style.display = "none";
  }, 500); // Sets a timeout to play the animation

  setTimeout(function() {
    document.getElementById("question_1").style.display = "flex";
    document.getElementById("question_1").className =
      "row h-100 animated fadeIn";
  }, 500); //This is the animation

  //Set the question's text and answers
  setTimeout(function() {
    document.getElementById("question").innerHTML =
      "Which tag is used to link an external CSS file?";
    document.getElementById("answer_a").innerHTML = "Script";
    document.getElementById("answer_b").innerHTML = "Link";
    document.getElementById("answer_c").innerHTML = "Rel";
  }, 500);

  //Checking if the answer is right or wrong then go to the next question
  document.getElementById("answer_d").onclick = function() {
    click.pause();
    click.currentTime = 0;
    click.play();
    question4();
    results();
  };

  document.getElementById("answer_a").onclick = function() {
    answer_array.push(document.getElementById("answer_a").innerHTML);

    click.pause();
    click.currentTime = 0;
    click.play();
    question4();
    results();
  };
  document.getElementById("answer_b").onclick = function() {
    answer_array.push(document.getElementById("answer_b").innerHTML);

    click.pause();
    click.currentTime = 0;
    click.play();
    //TODO: correct answer
    correctAnswers += 10;
    question4();
    results();
  };

  document.getElementById("answer_c").onclick = function() {
    answer_array.push(document.getElementById("answer_c").innerHTML);

    click.pause();
    click.currentTime = 0;
    click.play();
    question4();
    results();
  };
}

// Question 4 begins as question 1 fades out and replacing the same divs
function question4() {
  document.getElementById("question_1").className =
    "row h-100 animated fadeOut"; //This is the animation to transition to next

  setTimeout(function() {
    document.getElementById("question_1").style.display = "none";
  }, 500); // Sets a timeout to play the animation

  setTimeout(function() {
    document.getElementById("question_1").style.display = "flex";
    document.getElementById("question_1").className =
      "row h-100 animated fadeIn";
  }, 500); //This is the animation

  //Set the question's text and answers
  setTimeout(function() {
    document.getElementById("question").innerHTML =
      "Which attribute sets the underline property?";
    document.getElementById("answer_a").innerHTML = "Font style";
    document.getElementById("answer_b").innerHTML = "Text-decoration";
    document.getElementById("answer_c").innerHTML = "Font weight";
  }, 500);

  //Checking if the answer is right or wrong then go to the next question
  document.getElementById("answer_d").onclick = function() {
    click.pause();
    click.currentTime = 0;
    click.play();
    question5();
    results();
  };

  document.getElementById("answer_a").onclick = function() {
    answer_array.push(document.getElementById("answer_a").innerHTML);

    click.pause();
    click.currentTime = 0;
    click.play();
    question5();
    results();
  };
  document.getElementById("answer_b").onclick = function() {
    answer_array.push(document.getElementById("answer_b").innerHTML);

    click.pause();
    click.currentTime = 0;
    click.play();
    //TODO: correct answer
    correctAnswers += 10;
    question5();
    results();
  };

  document.getElementById("answer_c").onclick = function() {
    answer_array.push(document.getElementById("answer_c").innerHTML);

    click.pause();
    click.currentTime = 0;
    click.play();
    question5();
    results();
  };

  // Question 5 begins as question 1 fades out and replacing the same divs
  function question5() {
    document.getElementById("question_1").className =
      "row h-100 animated fadeOut"; //This is the animation to transition to next

    setTimeout(function() {
      document.getElementById("question_1").style.display = "none";
    }, 500); // Sets a timeout to play the animation

    setTimeout(function() {
      document.getElementById("question_1").style.display = "flex";
      document.getElementById("answer_d").style.display = "inline-block";
      document.getElementById("question_1").className =
        "row h-100 animated fadeIn";
    }, 500); //This is the animation

    //Set the question's text and answers
    setTimeout(function() {
      document.getElementById("question").innerHTML =
        "Which measurement unit is NOT relative?";
      document.getElementById("answer_a").innerHTML = "Px";
      document.getElementById("answer_b").innerHTML = "Cm";
      document.getElementById("answer_c").innerHTML = "%";
      document.getElementById("answer_d").innerHTML = "Em";
    }, 500);

    //Checking if the answer is right or wrong then go to the next question
    document.getElementById("answer_d").onclick = function() {
      answer_array.push(document.getElementById("answer_d").innerHTML);

      click.pause();
      click.currentTime = 0;
      click.play();
      question6();
      results();
    };

    document.getElementById("answer_a").onclick = function() {
      answer_array.push(document.getElementById("answer_a").innerHTML);

      click.pause();
      click.currentTime = 0;
      click.play();
      question6();
      results();
    };
    document.getElementById("answer_b").onclick = function() {
      answer_array.push(document.getElementById("answer_b").innerHTML);

      click.pause();
      click.currentTime = 0;
      click.play();
      //TODO: correct answer
      correctAnswers += 10;
      question6();
      results();
    };

    document.getElementById("answer_c").onclick = function() {
      answer_array.push(document.getElementById("answer_c").innerHTML);

      click.pause();
      click.currentTime = 0;
      click.play();
      question6();
      results();
    };
  }

  // Question 6 begins as question 1 fades out and replacing the same divs
  function question6() {
    document.getElementById("question_1").className =
      "row h-100 animated fadeOut"; //This is the animation to transition to next

    setTimeout(function() {
      document.getElementById("question_1").style.display = "none";
    }, 500); // Sets a timeout to play the animation

    setTimeout(function() {
      document.getElementById("question_1").style.display = "flex";
      document.getElementById("question_1").className =
        "row h-100 animated fadeIn";
    }, 500); //This is the animation

    //Set the question's text and answers
    setTimeout(function() {
      document.getElementById("question").innerHTML =
        "Which measurement unit IS relative";
      document.getElementById("answer_a").innerHTML = "Em";
      document.getElementById("answer_b").innerHTML = "Cm";
      document.getElementById("answer_c").innerHTML = "MM";
      document.getElementById("answer_d").innerHTML = "Inch";
    }, 500);

    //Checking if the answer is right or wrong then go to the next question
    document.getElementById("answer_d").onclick = function() {
      answer_array.push(document.getElementById("answer_d").innerHTML);

      click.pause();
      click.currentTime = 0;
      click.play();
      question7();
      results();
    };

    document.getElementById("answer_a").onclick = function() {
      answer_array.push(document.getElementById("answer_a").innerHTML);

      click.pause();
      click.currentTime = 0;
      click.play();
      //TODO: correct answer
      correctAnswers += 10;
      question7();
      results();
    };
    document.getElementById("answer_b").onclick = function() {
      answer_array.push(document.getElementById("answer_b").innerHTML);

      click.pause();
      click.currentTime = 0;
      click.play();
      question7();
      results();
    };

    document.getElementById("answer_c").onclick = function() {
      answer_array.push(document.getElementById("answer_c").innerHTML);

      click.pause();
      click.currentTime = 0;
      click.play();
      question7();
      results();
    };
  }

  // Question 7 begins as question 1 fades out and replacing the same divs
  function question7() {
    document.getElementById("question_1").className =
      "row h-100 animated fadeOut"; //This is the animation to transition to next

    setTimeout(function() {
      document.getElementById("question_1").style.display = "none";
    }, 500); // Sets a timeout to play the animation

    setTimeout(function() {
      document.getElementById("question_1").style.display = "flex";
      document.getElementById("question_1").className =
        "row h-100 animated fadeIn";
    }, 500); //This is the animation

    //Set the question's text and answers
    setTimeout(function() {
      document.getElementById("question").innerHTML =
        "What attribute is used to move <br /> an element's content away from it's border?";
      document.getElementById("answer_a").innerHTML = "Margin";
      document.getElementById("answer_b").innerHTML = "Padding";
      document.getElementById("answer_c").innerHTML = "Border";
      document.getElementById("answer_d").innerHTML = "Width";
    }, 500);

    //Checking if the answer is right or wrong then go to the next question
    document.getElementById("answer_d").onclick = function() {
      answer_array.push(document.getElementById("answer_d").innerHTML);

      click.pause();
      click.currentTime = 0;
      click.play();
      question8();
      results();
    };

    document.getElementById("answer_a").onclick = function() {
      answer_array.push(document.getElementById("answer_a").innerHTML);

      click.pause();
      click.currentTime = 0;
      click.play();
      question8();
      results();
    };
    document.getElementById("answer_b").onclick = function() {
      answer_array.push(document.getElementById("answer_b").innerHTML);

      click.pause();
      click.currentTime = 0;
      click.play();
      //TODO: correct answer
      correctAnswers += 10;
      question8();
      results();
    };

    document.getElementById("answer_c").onclick = function() {
      answer_array.push(document.getElementById("answer_c").innerHTML);

      click.pause();
      click.currentTime = 0;
      click.play();
      question8();
      results();
    };
  }

  // Question 8 begins as question 1 fades out and replacing the same divs
  function question8() {
    document.getElementById("question_1").className =
      "row h-100 animated fadeOut"; //This is the animation to transition to next

    setTimeout(function() {
      document.getElementById("question_1").style.display = "none";
    }, 500); // Sets a timeout to play the animation

    setTimeout(function() {
      document.getElementById("question_1").style.display = "flex";
      document.getElementById("question_1").className =
        "row h-100 animated fadeIn";
    }, 500); //This is the animation

    //Set the question's text and answers
    setTimeout(function() {
      document.getElementById("question").innerHTML =
        "Which attribute does not contribute to a block elements total width?";
      document.getElementById("answer_a").innerHTML = "Width";
      document.getElementById("answer_b").innerHTML = "Border";
      document.getElementById("answer_c").innerHTML = "Background-image";
      document.getElementById("answer_d").innerHTML = "Padding";
    }, 500);

    //Checking if the answer is right or wrong then go to the next question
    document.getElementById("answer_d").onclick = function() {
      answer_array.push(document.getElementById("answer_d").innerHTML);

      click.pause();
      click.currentTime = 0;
      click.play();
      question9();
      results();
    };

    document.getElementById("answer_a").onclick = function() {
      answer_array.push(document.getElementById("answer_a").innerHTML);

      click.pause();
      click.currentTime = 0;
      click.play();
      question9();
      results();
    };
    document.getElementById("answer_b").onclick = function() {
      answer_array.push(document.getElementById("answer_b").innerHTML);

      click.pause();
      click.currentTime = 0;
      click.play();
      question9();
      results();
    };

    document.getElementById("answer_c").onclick = function() {
      answer_array.push(document.getElementById("answer_c").innerHTML);

      click.pause();
      click.currentTime = 0;
      click.play();
      //TODO: correct answer
      correctAnswers += 10;
      question9();
      results();
    };
  }

  // Question 9 begins as question 1 fades out and replacing the same divs
  function question9() {
    document.getElementById("question_1").className =
      "row h-100 animated fadeOut"; //This is the animation to transition to next

    setTimeout(function() {
      document.getElementById("question_1").style.display = "none";
    }, 500); // Sets a timeout to play the animation

    setTimeout(function() {
      document.getElementById("question_1").style.display = "flex";
      document.getElementById("question_1").className =
        "row h-100 animated fadeIn";
    }, 500); //This is the animation

    //Set the question's text and answers
    setTimeout(function() {
      document.getElementById("question").innerHTML =
        "What property changes positioned elements display order?";
      document.getElementById("answer_a").innerHTML = "Width";
      document.getElementById("answer_b").innerHTML = "Background";
      document.getElementById("answer_c").innerHTML = "Z-index";
      document.getElementById("answer_d").innerHTML = "Azimuth";
    }, 500);

    //Checking if the answer is right or wrong then go to the next question
    document.getElementById("answer_d").onclick = function() {
      answer_array.push(document.getElementById("answer_d").innerHTML);

      click.pause();
      click.currentTime = 0;
      click.play();
      question10();
      results();
    };

    document.getElementById("answer_a").onclick = function() {
      answer_array.push(document.getElementById("answer_a").innerHTML);

      click.pause();
      click.currentTime = 0;
      click.play();
      question10();
      results();
    };
    document.getElementById("answer_b").onclick = function() {
      answer_array.push(document.getElementById("answer_b").innerHTML);

      click.pause();
      click.currentTime = 0;
      click.play();
      question10();
      results();
    };

    document.getElementById("answer_c").onclick = function() {
      answer_array.push(document.getElementById("answer_c").innerHTML);

      click.pause();
      click.currentTime = 0;
      click.play();
      //TODO: correct answer
      correctAnswers += 10;
      question10();
      results();
    };
  }

  // Question 10 begins as question 1 fades out and replacing the same divs
  function question10() {
    document.getElementById("question_1").className =
      "row h-100 animated fadeOut"; //This is the animation to transition to next

    setTimeout(function() {
      document.getElementById("question_1").style.display = "none";
    }, 500); // Sets a timeout to play the animation

    setTimeout(function() {
      document.getElementById("question_1").style.display = "flex";
      document.getElementById("question_1").className =
        "row h-100 animated fadeIn";
    }, 500); //This is the animation

    //Set the question's text and answers
    setTimeout(function() {
      document.getElementById("question").innerHTML =
        "Which value of backgroud-repeat will <br /> cause a background to repeat vertically?";
      document.getElementById("answer_a").innerHTML = "Repeat-x";
      document.getElementById("answer_b").innerHTML = "Repeat";
      document.getElementById("answer_c").innerHTML = "Repeat-y";
      document.getElementById("answer_d").innerHTML = "No-repeat";
    }, 500);

    //Checking if the answer is right or wrong then go to the next question
    document.getElementById("answer_d").onclick = function() {
      answer_array.push(document.getElementById("answer_d").innerHTML);

      click.pause();
      click.currentTime = 0;
      click.play();
      showStats();
      results();
    };

    document.getElementById("answer_a").onclick = function() {
      answer_array.push(document.getElementById("answer_a").innerHTML);

      click.pause();
      click.currentTime = 0;
      click.play();
      showStats();
      results();
    };
    document.getElementById("answer_b").onclick = function() {
      answer_array.push(document.getElementById("answer_b").innerHTML);

      click.pause();
      click.currentTime = 0;
      click.play();
      showStats();
      results();
    };

    document.getElementById("answer_c").onclick = function() {
      answer_array.push(document.getElementById("answer_c").innerHTML);

      click.pause();
      click.currentTime = 0;
      click.play();
      //TODO: correct answer
      correctAnswers += 10;
      showStats();
      results();
    };
  }

  //shows score
  function showStats() {
    music.pause();
    music.currentTime = 0;
    document.getElementById("question_1").className =
      "row h-100 animated fadeOut"; //This is the animation to transition to next

    document.getElementById("stats").style.zIndex = "10";

    setTimeout(function() {
      document.getElementById("question_1").style.display = "none";
    }, 500); // Sets a timeout to play the animation

    setTimeout(function() {
      document.getElementById("stats").style.display = "flex";
      document.getElementById("stats").className = "row h-100 animated fadeIn";
    }, 500); //This is the animation

    var elem = document.getElementById("myBar"); //The stats bar animation to give visual of score
    var width = 0;
    var id = setInterval(frame, 30);
    function frame() {
      if (width >= correctAnswers) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width * 1 + "%";
      }
    }

    // The quiz will comment on your score.
    if (correctAnswers >= 60 && correctAnswers <= 90) {
      document.getElementById("statsText").innerHTML =
        "Great Job! you passed! You got " + correctAnswers / 10 + " out of 10";
      document.getElementById("images").src = "gold.png";
      document.getElementById("images").style.visibility = "visible";
      pass.play();
    } else if (correctAnswers == 50) {
      document.getElementById("statsText").innerHTML =
        "lol You barely made it. You got " + correctAnswers / 10 + " out of 10";
      document.getElementById("images").src = "bronze.png";
      document.getElementById("images").style.visibility = "visible";
      lose.play();
    } else if (correctAnswers <= 40) {
      document.getElementById("statsText").innerHTML =
        "AHAHAH you lose! You got " + correctAnswers / 10 + " out of 10";
      lose.play();
      document.getElementById("images").src = "poop.png";
      document.getElementById("images").style.visibility = "visible";
    } else if (correctAnswers == 100) {
      document.getElementById("statsText").innerHTML =
        "HOLY MOLY, you're so smart! You got " +
        correctAnswers / 10 +
        " out of 10";
      document.getElementById("images").src = "gift.png";
      document.getElementById("100").href =
        "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
      document.getElementById("images").style.visibility = "visible";
      win.play();
    }
  }

  function results() {
    document.getElementById("result0").innerHTML = answer_array[0];
    document.getElementById("result1").innerHTML = answer_array[1];
    document.getElementById("result2").innerHTML = answer_array[2];
    document.getElementById("result3").innerHTML = answer_array[3];
    document.getElementById("result4").innerHTML = answer_array[4];
    document.getElementById("result5").innerHTML = answer_array[5];
    document.getElementById("result6").innerHTML = answer_array[6];
    document.getElementById("result7").innerHTML = answer_array[7];
    document.getElementById("result8").innerHTML = answer_array[8];
    document.getElementById("result9").innerHTML = answer_array[9];
  }
}
