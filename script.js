const rating_page = document.querySelector(".rating-page");
const success_page = document.querySelector(".success-page");

const refresh_button = document.querySelector(".icon-wrapper");
const form = document.querySelector("form");
const submit_button = document.querySelector(".submit-btn");

const rated_score_content = document.querySelector(".rated-score span");

function process_error_msg(e) {
    const msgdiv = document.createElement("div");
    msgdiv.style.alignSelf = 'center';
    msgdiv.textContent = e.message;
    msgdiv.classList.add("error-msg");
    rating_page.appendChild(msgdiv);
}

function clear_error_msg() {
    const msgdiv = document.querySelector(".error-msg");
    if (msgdiv) {
        msgdiv.remove();
    }
}

function clear_option() {
    const options = form.querySelectorAll("input[type='radio']");
    options.forEach((option) => {
        option.checked = false;
    })
}

function get_rating_score() {
    const seleted_score = form.querySelector("input[type='radio']:checked");    
    if (!seleted_score) {
        throw new Error("No rating selected, please select a score.");
    }
    return seleted_score.value;
}

function process_rating_submission() {
    try {
        clear_error_msg();
        const score = get_rating_score();
        rated_score_content.textContent = `You selected ${score} out of 5`;
        rating_page.classList.add("deactivate");
        success_page.classList.remove("deactivate");
        clear_option();
    } catch (e) {
        process_error_msg(e);
    }
}

submit_button.addEventListener("click", (e) => {
    e.preventDefault();
    process_rating_submission();
})

const options = form.querySelectorAll("input[type='radio']");

options.forEach((o) => {
    o.addEventListener("click", () => {
        clear_error_msg();
    })
})

refresh_button.addEventListener("click", () => {
    refresh_button.classList.remove("triggered");
    void refresh_button.offsetWidth;
    refresh_button.classList.add("triggered");
    clear_option();
})