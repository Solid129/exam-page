import { Component } from 'react';
import './App.css';
import ExamPage from './components/ExamPage/ExamPage';
import StartPage from './containers/StartPage/StartPage';
import axios from 'axios';

// to get exam data
const baseUrl = "http://localhost:3001";
// exam sample data = {
//   examDurationInMinutes: 120,
//   sections: [
//     {
//       maths: [
//         { qnum: "1", quesText: "What is square of 2?", option1: "1", option2: "2", option3: "3", option4: "4" }
//       ]
//     },
//     {
//       english: [
//         { qnum: "1", quesText: "Which of the following sentences is grammatically incorrect?", option1: "Is this your jacket?", "option2": "Whose jacket is this?", "option3": "Is this jacket yours?", "option4": "Who's jacket is this?" }
//       ]
//     },
//     {
//       science: [
//         { qnum: "1", quesText: "What is total number of planets in our solar system?", option1: "6", option2: "7", option3: "8", option4: "9" }
//       ]
//     }
//   ]
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exam: null,
      examStarted: false,
      errorMessage: ""
    };
  }

  componentWillMount() {
    this.fetchData();
  }

  fetchData() {
    var newState = null;
    axios.get(baseUrl)
      .then(response => {
        newState = response.data.exam;
        this.setState({ exam: newState });
      }).catch(e => {
        this.setState({
          errorMessage: e.message
        });
      });
  }

  onStart = () => {
    if (this.state.exam) {
      this.setState({
        examStarted: true
      });
    }
  }

  render() {
    var exam = <StartPage onStart={this.onStart}></StartPage>;
    if (this.state.errorMessage !== "") {
      exam = <h2>{this.state.errorMessage}</h2>
    }
    if (this.state.examStarted) {
      exam = <ExamPage exam={this.state.exam} />
    }
    return (
      <div className="App">
        {exam}
      </div>
    );
  }
}

export default App;
