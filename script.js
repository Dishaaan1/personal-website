function showFlower(flower) {
    const flowerDisplay = document.getElementById('flower-display');
    let flowerImage = '';

    if (flower === 'rose') {
        flowerImage = 'images/rose.jpg';
    } else if (flower === 'tulip') {
        flowerImage = 'images/tulip.jpg';
    } else if (flower === 'lily') {
        flowerImage = 'images/lily.jpg';
    }

    flowerDisplay.innerHTML = `<img src="${flowerImage}" alt="${flower}">`;
}

// Optional: Dynamic Image Change
window.onload = function() {
    const dynamicImg = document.getElementById('dynamicImg');
    
    setInterval(() => {
        const hour = new Date().getHours();
        
        if (hour >= 6 && hour < 18) {
            dynamicImg.src = 'images/daytime.jpg';
        } else {
            dynamicImg.src = 'images/nighttime.jpg';
        }
    }, 5000); // Change image every 5 seconds
};
