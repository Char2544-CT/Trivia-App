import { useState } from "react";

const Home = () => {
    
    // State to hold the form data
    const [forms, setForms] = useState({
        
            name: '',
            category: '',
            difficulty: '', 
});

    //Will display error message if the form is not filled out correctly
    const [error, setError] = useState('')
    const [quizData, setQuizData] = useState(null);

    const handleChange = (event) => {
        const {name, value} = event.target;


        setForms((prevForms) => ({
            ...prevForms,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Check if all fields are filled
        if (!forms.name || !forms.category || !forms.difficulty) {
            setError('Please fill out all fields');
            return;
        }

        // If all fields are filled, clear the error message
        setError('');

        try {
            const {name, category, difficulty} = forms;
            const response = await fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`, {
                method: 'GET',
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
        
        
        const data = await response.json();

        setQuizData(data.results);
        console.log(data.results);
        } catch (error) {
            console.error('Error fetching data:', error);
            setError('Error fetching data');
        }
    }

        return(
            <div>
                <h1>Trivia App</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={forms.name}
                        onChange={handleChange}
                        placeholder="Name"
                    />
                    <select 
                        name="difficulty"
                        value={forms.difficulty}
                        onChange={handleChange}
                    >
                        <option value="">Select Difficulty</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                    <select
                        name="category"
                        value={forms.category}
                        onChange={handleChange}
                    >   
                        <option value="">Select Category</option> 
                        <option value="9">General Knowledge</option>
                        <option value="12">Entertainment: Music</option>
                        <option value="15">Entertainment: Video Games</option>
                        <option value="17">Science & Nature</option>
                        <option value="18">Science: Computers</option>
                    </select>
                    
                    <button type="submit">Submit</button>
                </form>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
        )   
};

export default Home;