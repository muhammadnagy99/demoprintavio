
document.getElementById('fileUpload').addEventListener('change', function(event) {
    const reader = new FileReader();
    reader.onload = function(e) {
        // Apply the image to all overlays
        document.querySelectorAll('.image-overlay').forEach(function(overlay) {
            overlay.style.backgroundImage = `url(${e.target.result})`;
            overlay.style.display = 'block';
        });
    };
    reader.readAsDataURL(event.target.files[0]);
});
document.getElementById('fileUpload').addEventListener('change', function(event) {
    const reader = new FileReader();
    reader.onload = function(e) {
        // Apply the image to all overlays
        document.querySelectorAll('.image-overlayB').forEach(function(overlay) {
            overlay.style.backgroundImage = `url(${e.target.result})`;
            overlay.style.display = 'block';
        });
    };
    reader.readAsDataURL(event.target.files[0]);
});

