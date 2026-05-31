let testscore= 85;
switch (true) {
    case (testscore >= 90):
        console.log("Outstanding - Top Performer");
        break;
    case (testscore >= 85):
        console.log("Excellent - Above Expectations");
        break;
    case (testscore >= 70):
        console.log("Good - Meets Expectations");
        break;
    case (testscore >= 50):
        console.log("Needs Improvement");
        break;
    default:
        console.log("Needs Improvement");
}