
var setRating;

function setRating(num){
    setRating = num;
    // console.log(num);
    // return num;
    
}



function submit(){
    const rating = setRating;
    const oldDiv = document.getElementById('main');
    oldDiv.innerHTML = `
    <div class="main">
        <div class="welcome-img">
            <img src="images/illustration-thank-you.svg" alt="" height="100px" width="150px">
        </div>
        <div id="star-number">
            You Selected ${rating} out of 5
        </div>
        <div class="thanks-text">
            <div>
                <h2>Thank You!</h2>
            </div>
            <div>
                <p>
                    We appreciate you taking the time to give a rating.If you ever need more support, dont't hesitate to get in touch!
                </p>
            </div>
        </div>
    </div>
    `
    
    
}