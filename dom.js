var main = document.querySelector ("main");

var ladder = "This is my stepladder. I never knew my real ladder.";
var pasta = "What do you call a fake noodle? An impasta.";
var teacher = "My teacher pointed at me with her ruler and said: At the end of this ruler is an idiot. I got a detention after asking which end.";

const p = document.createElement('p');
p.textContent = "That's all folks!"

const template =`
    <section>
        <ul>
        <li>${ladder}</li>
        <li>${pasta}</li>
        <li>${teacher}</li>
        </ul>
        <p></p>
    </section>
`
main.innerHTML = template
main.appendChild(p)