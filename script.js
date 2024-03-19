
var setRating;



function setRating(num){
    setRating = num;
    // console.log(num);
    // return num;
    
}

// const button = document.getElementById(setRating)

// button.addEventListener('click', ()=>{
// button.style.color = 'red';
// })



function submit(){
    const rating = setRating;
    if(rating>0){
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
    else{
    const oldDiv = document.getElementById('main');
    oldDiv.innerHTML = `
    <div class="main">
        <div class="welcome-img">
            <img src="images/illustration-thank-you.svg" alt="" height="100px" width="150px">
        </div>
        <div id="star-number">
            Please select a number out of 5
        </div>
        <div class="thanks-text">
            <div>
                <p>
                    Please let us know your experience. If you are happy in our service please press in 5!
                </p>
            </div>
            <div>
                    <h2>Thank You!</h2>
            </div>
        </div>
    </div>
    `
    }
    
    
}