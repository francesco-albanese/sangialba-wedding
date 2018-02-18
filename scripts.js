// Init onePageScroll
onePageScroll(".main");

// Init Parallax
document.addEventListener("DOMContentLoaded", function (event) {
    var containers = [
        document.querySelector('.we-are-getting-married'),
        document.querySelector('.vanessa'),
        document.querySelector('.francesco'),
        document.querySelector('.save-the-date'),
        document.querySelector('.join-us'),
        document.querySelector('.our-photos'),
        document.querySelector('.days-to-go'),
        document.querySelector('.honeymoon')
    ];

    containers.map(function (container) {
        return new Parallax(container)
    });

    // work out days to go
    function daysBetween(one, another) {
        another = new Date('06-21-2018');
        var isDue = one.getTime() >= another.getTime();
        if (isDue) {
            return "OVER!";
        }
        return Math.round(Math.abs((+ one) - (+ another)) / 8.64e7);
    }

    function setDaysToGoText() {
        var counter = document.querySelector('.days-to-go__counter');
        var daysToGo = daysBetween(new Date());
        counter.innerHTML = daysToGo;
    }

    setDaysToGoText();
});