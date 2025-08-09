 const colorSelect = document.getElementById('colorSelect');
  const removeBtn = document.getElementById('removeBtn');

  removeBtn.addEventListener('click', () => {
    // Check if something is selected
    if (colorSelect.selectedIndex >= 0) {
      // Remove the selected option
      colorSelect.remove(colorSelect.selectedIndex);
    }
  });