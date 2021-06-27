const totalBtns = 20;
generateBtn();

function generateBtn() {
    for(let i=1; i<=totalBtns; i++) {
        var button = document.createElement("input");
        button.type = "button";
        button.value= "Button "+i;
        button.id = i;
        button.onclick = (event) => {
            alert(event.target.id);
        }
        console.log(btnWrapper)
        btnWrapper.append(button);
    }
}