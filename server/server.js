import app from './App.js'

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5050;

app.listen(PORT, ()=>{
    
    console.log(`Server is stated at http://localhost:${PORT}...`);
});