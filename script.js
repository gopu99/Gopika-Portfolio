function enlargeImage() {
    // Get the modal
    var modal = document.getElementById("imageModal");
    // Get the image and insert it inside the modal
    var img = document.querySelector(".image-container img");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;

    // Optionally, you could include the text below the image like this:
    captionText.innerHTML = img.alt + "<br><p style='color:#fff;'>Gopika Kanattil</p>";
}

function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}
