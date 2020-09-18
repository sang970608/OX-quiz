function value_check() {
    const value1 = document.querySelector('input[name="ques1"]:checked').value;
    const value2 = document.querySelector('input[name="ques2"]:checked').value;
    const value3 = document.querySelector('input[name="ques3"]:checked').value;
    const value4 = document.querySelector('input[name="ques4"]:checked').value;
    const value5 = document.querySelector('input[name="ques5"]:checked').value;
    
    location.href="result.html?" + value1 + ":" + value2 + ":" + value3 + ":" + value4 + ":" + value5
}