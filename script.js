function generatePlan() {

    // Get user input
    let name = document.getElementById("name").value;
    let age = Number(document.getElementById("age").value);
    let height = Number(document.getElementById("height").value);
    let weight = Number(document.getElementById("weight").value);

    let goal = document.getElementById("goal").value;
    let activity = document.getElementById("activity").value;

    // Check input
    if (name === "" || age === 0 || height === 0 || weight === 0 ||
        goal === "" || activity === "") {

        alert("Please fill all the details.");
        return;
    }

    // BMI calculation
    let heightInMeter = height / 100;
    let bmi = weight / (heightInMeter * heightInMeter);

    bmi = bmi.toFixed(1);

    // Water recommendation
    let water = (weight * 0.033).toFixed(1);

    // Workout recommendation
    let workout = "";

    if (goal === "weightloss") {
        workout = "30–45 minutes/day";
    }
    else if (goal === "muscle") {
        workout = "45–60 minutes/day";
    }
    else if (goal === "fitness") {
        workout = "30–40 minutes/day";
    }
    else {
        workout = "20–30 minutes/day";
    }

    // BMI message
    let bmiMessage = "";

    if (bmi < 18.5) {
        bmiMessage = "Your BMI is in the underweight range.";
    }
    else if (bmi < 25) {
        bmiMessage = "Your BMI is in the normal range.";
    }
    else if (bmi < 30) {
        bmiMessage = "Your BMI is in the overweight range.";
    }
    else {
        bmiMessage = "Your BMI is in the obesity range.";
    }

    // AI recommendation
    let recommendation = "";

    if (goal === "weightloss") {

        recommendation =
            "Focus on regular cardio exercises, strength training and a balanced calorie-controlled diet. " +
            "Start gradually and maintain consistency.";

    }
    else if (goal === "muscle") {

        recommendation =
            "Focus on strength training exercises such as squats, push-ups and resistance exercises. " +
            "Include adequate protein and recovery time.";

    }
    else if (goal === "fitness") {

        recommendation =
            "Maintain a balanced routine containing cardio, strength training and stretching. " +
            "Try to stay physically active every day.";

    }
    else {

        recommendation =
            "Include stretching, yoga and mobility exercises in your routine. " +
            "Avoid staying in the same position for long periods.";

    }

    // Diet recommendation
    let diet = "";

    if (goal === "weightloss") {

        diet =
            "Choose vegetables, fruits, whole grains, lean protein and limit highly processed foods.";

    }
    else if (goal === "muscle") {

        diet =
            "Include protein-rich foods such as eggs, pulses, milk, paneer, fish or lean meat along with balanced meals.";

    }
    else {

        diet =
            "Eat a balanced diet containing vegetables, fruits, protein, whole grains and healthy fats.";

    }

    // Exercise recommendation
    let exercises = "";

    if (goal === "weightloss") {

        exercises =
            "Walking, jogging, cycling, jumping jacks and bodyweight exercises.";

    }
    else if (goal === "muscle") {

        exercises =
            "Squats, push-ups, lunges, planks and resistance exercises.";

    }
    else if (goal === "fitness") {

        exercises =
            "Walking, jogging, squats, push-ups, planks and stretching.";

    }
    else {

        exercises =
            "Yoga, stretching, shoulder mobility, hamstring stretches and light exercises.";

    }

    // Display results
    document.getElementById("welcome").innerHTML =
        "Hello <b>" + name + "</b>! Here is your personalized fitness plan.";

    document.getElementById("bmi").innerHTML =
        bmi + "<br><small>" + bmiMessage + "</small>";

    document.getElementById("water").innerHTML =
        water + " L/day";

    document.getElementById("workout").innerHTML =
        workout;

    document.getElementById("recommendation").innerHTML =
        recommendation;

    document.getElementById("diet").innerHTML =
        diet;

    document.getElementById("exercises").innerHTML =
        exercises;

    // Scroll to result
    document.getElementById("result").scrollIntoView({
        behavior: "smooth"
    });
}
