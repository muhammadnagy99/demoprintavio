function previewImage() {
    var file = document.getElementById('fileUpload').files[0];
    var reader = new FileReader();
    reader.onloadend = function() {
        document.getElementById('imagePreview').style.display = 'block';
        document.getElementById('imagePreview').src = reader.result;
        document.querySelector('.upload-instructions').style.display = 'none';
    }
    if (file) {
        reader.readAsDataURL(file);
    } else {
        document.getElementById('imagePreview').style.display = 'none';
        document.querySelector('.upload-instructions').style.display = 'block';
    }
}

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
document.getElementById('fileUpload').addEventListener('change', function(event) {
    const reader = new FileReader();
    reader.onload = function(e) {
        // Apply the image to all overlays
        document.querySelectorAll('.image-overlayBM').forEach(function(overlay) {
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
        document.querySelectorAll('.image-overlayWM').forEach(function(overlay) {
            overlay.style.backgroundImage = `url(${e.target.result})`;
            overlay.style.display = 'block';
        });
    };
    reader.readAsDataURL(event.target.files[0]);
});

