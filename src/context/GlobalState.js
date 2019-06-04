import React, { useState } from 'react'
import ShopContext from './shop-context'

const GlobalState = props => {
  const [activeItem, setActiveItem] = useState('overview')
  const [activeQuestion, setActiveQuestion] = useState({})
  const [answered, setAnswered] = useState(false)
  const [avatar, setAvatar] = useState('world.jpg')
  const [bio, setBio] = useState('')
  const [correct, setCorrect] = useState(false)
  const [loading, setLoading] = useState(false)
  const [modalStatus, setModalStatus] = useState(false)
  const [percentage, setPercentage] = useState(0)
  const [previousQuestions, setPreviousQuestions] = useState([])
  const [questions, setQuestions] = useState([])
  const [questionIndex, setQuestionIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [starAmount, setStarAmount] = useState(0)
  const [user, setUser] = useState({})
  const [visible, setVisible] = useState(true)

  const fetchQuestions = () => {
    setLoading(true)
    fetch('http://localhost:3000/questions/get_trivia')
    .then(res => res.json())
    .then(questions => {
      setQuestions(questions.results)
      setActiveQuestion(questions.results[0])
      setLoading(false)
    })
  }

  const authenticatingUser = (username, password) => {
    fetch('http://localhost:3000/login', {
      method: "POST",
      headers:{"Content-Type":"application/json", "Accept": "application/json"},
      body:JSON.stringify({
        username: username,
        password: password
      })
    })
    .then(res => res.json())
    .then(data => {
      if (data.authenticated) {
        setUser(data.user)
        setStarAmount(Math.floor(data.user.correct_answers / 10))
        setPercentage((data.user.correct_answers % 10) * 10)
        setAvatar(data.user.avatar)
        setBio(data.user.bio)
        localStorage.setItem('token', data.token)
      } else {
        alert('Incorrect username or password')
      }
    })
  }

  const authenticatingToken = (token) => {
    fetch('http://localhost:3000/verify_token', {
      headers:{"Authentication": `Bearer ${token}`}
    })
    .then(res => res.json())
    .then(user => {
      setUser(user)
      setStarAmount(Math.floor(user.correct_answers / 10))
      setPercentage((user.correct_answers % 10) * 10)
      setAvatar(user.avatar)
      setBio(user.bio)
    })
  }

  const logoutUser = () => {
    setUser({})
    setPercentage(0)
    setStarAmount(0)
    localStorage.removeItem('token')
  }

  const saveScore = (user, bool) => {
    let correct_answers
    bool ?
    correct_answers = user.correct_answers + 1
    :
    correct_answers = user.correct_answers
    fetch(`http://localhost:3000/users/${user.id}`, {
      method: 'PATCH',
      headers: {"Content-Type":"application/json", Accept:"application/json"},
      body: JSON.stringify({
        total_questions: user.total_questions + 1,
        correct_answers: correct_answers
      })
    })
  }

  // sets the activeQuestion to the next index in the questions array, then updates questionIndex to match the new activeQuestion
  const handleQuestionIndex = () => {
    setActiveQuestion(questions[questionIndex + 1])
    setQuestionIndex(questionIndex + 1)
  }

  const addPreviousQuestion = (question, correct) => {
    question.correct = correct
    setPreviousQuestions([...previousQuestions, question])
  }

  const incrementProgress = () => {
    let newProgress = percentage + 10
    if(newProgress >= 100){
      newProgress = 0
      incrementStarBar()
    }
    setPercentage(newProgress)
  }

  const incrementStarBar = () => {
    setStarAmount(starAmount + 1)
  }

  return(
    <ShopContext.Provider
      value={{
        activeItem,
        activeQuestion,
        addPreviousQuestion,
        answered,
        authenticatingUser,
        authenticatingToken,
        avatar,
        bio,
        correct,
        handleQuestionIndex,
        incrementProgress,
        incrementStarBar,
        fetchQuestions,
        loading,
        logoutUser,
        modalStatus,
        percentage,
        previousQuestions,
        questions,
        questionIndex,
        saveScore,
        setActiveItem,
        setAnswered,
        setAvatar,
        setBio,
        setCorrect,
        setModalStatus,
        setShowAnswer,
        setVisible,
        showAnswer,
        starAmount,
        user,
        visible
      }}>
      { props.children }
    </ShopContext.Provider>
  )
}

export default GlobalState
