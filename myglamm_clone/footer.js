const mainFooter = document.querySelector('footer');



let btmDiv = document.createElement('div');




function showBtmDiv() {

    let div1 = document.createElement('div');
    div1.setAttribute('id', 'footer__btm--headings');

    let div2 = document.createElement('div');
    div2.setAttribute('id', 'footer__btm--last')

    div2.innerHTML = `

    <form id="subscribe">
        <input id="subscribe__email" type="email" placeholder="Please enter valid email ID">
        <input id="subscribe__btn" type="submit" value="SUBSCRIBE NOW">
    </form>
    <div>
        <p>STAY CONNECTED</p>
        <div></div>
    <div>
        <a href="#"><img src="" alt=""></a>
        <a href="#"><img src="" alt=""></a>
        <a href="#"><img src="" alt=""></a>
        <a href="#"><img src="" alt=""></a>
        <a href="#"><img src="" alt=""></a>
    </div>
</div>
<div>
    <a href="#"><img src="" alt=""></a>
    <a href="#"><img src="" alt=""></a>
</div>

    `;


    btmDiv.append(div1, div2);
    mainFooter.append(btmDiv);
}
showBtmDiv();