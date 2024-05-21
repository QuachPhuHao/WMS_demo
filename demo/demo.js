function calculateVolumeAndSuggestLocation(length, width, height) {
    const volume = length * width * height;
    let location = '';
    if (volume > 0 && volume <= 5) {
      location = 'Khu vực C';
    } else if (volume > 5 && volume <= 10) {
      location = 'Khu vực B';
    } else if (volume > 10) {
      location = 'Khu vực A';
    } else {
      location = 'Thể tích không hợp lệ';
    }
    return { volume, location };
  }
  
  document.getElementById('volumeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    const height = parseFloat(document.getElementById('height').value);
    const result = calculateVolumeAndSuggestLocation(length, width, height);
    document.getElementById('result').innerText = `Thể tích: ${result.volume} m³ - Gợi ý: ${result.location}`;
  });
  