export class Question {
    static create(question) {
        return fetch('https://spa-app-questions-default-rtdb.firebaseio.com/questions.json', {
            method: 'POST',
            body: JSON.stringify(question),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(response => {
            question.id = response.name;
            return question
        })
        .then(addToLS)
    }
}

function addToLS(question) {
    const all = getQuestionsFromLS();

    all.push(question);
    localStorage.setItem('questions', JSON.stringify(all));
}

function getQuestionsFromLS() {
    return JSON.parse(localStorage.getItem('questions') || '[]')
}