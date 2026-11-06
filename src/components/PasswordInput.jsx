function PasswordInput () {
    const handleChange = () => {
        console.log("Entering password...");
    }
return (
    <div>
        <label>Enter Password:</label>
        <input type="password" onChange={handleChange} />
    </div>
);
}
export default PasswordInput;