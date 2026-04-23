const items = document.querySelectorAll('.item');
const dropzones = document.querySelectorAll('.smallBox, .bigBox');

items.forEach(item => {
    item.addEventListener('dragstart', () => {
        item.classList.add('is-dragging');
    });

    item.addEventListener('dragend', () => {
        item.classList.remove('is-dragging');
    })
});

dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropzone.style.backgroundColor = 'lightblue';
    });

    dropzone.addEventListener('dragleave', () => {
        dropzone.style.backgroundColor = "";
    });

    dropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropzone.style.backgroundColor = "";
        const draggedItem = document.querySelector('.is-dragging');
        dropzone.appendChild(draggedItem);
    });
});

// Submit button handler
const submitBtn = document.getElementById('submitBtn');
const errorMessage = document.getElementById('error-message');
const smallBoxes = document.querySelectorAll('.smallBox'); 

submitBtn.addEventListener('click', () => {
    let allFilled = true;

    smallBoxes.forEach(box => {
        if (box.children.length === 0) {
            allFilled = false;
        }
    });

    if (allFilled) {
        errorMessage.style.display = 'none';
        alert('Form submitted successfully!');
    } else {
        errorMessage.textContent = 'All boxes must be filled!';
        errorMessage.style.display = 'block';
    }
});
