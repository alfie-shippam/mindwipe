document.addEventListener("DOMContentLoaded", function() {
    const releaseButton = document.getElementById("Release");
    const thoughts = document.getElementById("Thoughts");

    if (releaseButton && thoughts) {
        releaseButton.addEventListener("click", function(event) {
            event.preventDefault();

            if (thoughts.value.trim() !== "") {
                thoughts.classList.add("shrink");

                setTimeout(function() {
                    thoughts.value = '';
                }, 1000);

                setTimeout(function(){
                    thoughts.classList.remove("shrink");
                }, 2000);
            } else {
                console.log("No thoughts... nothing to release.");
            }
        });
    } else {
        console.error("Elements not found");
    }
});
