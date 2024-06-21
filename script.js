let starsContainer = document.querySelectorAll('#stars');
starsContainer.forEach(container => {
    for(let i=0;i<5;i++){
        let img=document.createElement('img');
        img.src="images/icon-star.svg";
        img.alt="stars";
        container.appendChild(img);
    }
})