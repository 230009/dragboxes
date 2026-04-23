const items = document.querySelectorAll('.item');
const dropzones = document.querySelectorAll('.box-content, .bigBox');

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
        const draggedItem = document.querySelector('.is-dragging');
        const sourceRank = parseInt(draggedItem.parentElement.dataset.rank || 0);
        const targetRank = parseInt(dropzone.dataset.rank || 0);

        if (targetRank >= sourceRank) {
            e.preventDefault();
            dropzone.style.backgroundColor = 'lightblue';
        }
    });

    dropzone.addEventListener('dragleave', () => {
        dropzone.style.backgroundColor = "";
    });

    dropzone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropzone.style.backgroundColor = "";
        const draggedItem = document.querySelector('.is-dragging');
        dropzone.appendChild(draggedItem);  // Теперь добавляет в .box-content
    });
});

// Submit 
const submitBtn = document.getElementById('submitBtn');
const errorMessage = document.getElementById('error-message');
const boxContents = document.querySelectorAll('.box-content'); 

submitBtn.addEventListener('click', () => {
    let allFilled = true;

    boxContents.forEach(box => {  // ИЗМЕНЕНО: boxContents вместо smallBoxes
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