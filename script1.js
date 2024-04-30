
// Khai báo danh sách nguyên tố hóa học và thông tin chi tiết
var elements = [
    { symbol: 'Fe', name: 'Iron', atomicNumber: 26, atomicMass: 55.845, description: 'Iron is a chemical element with symbol Fe and atomic number 26. It is a metal in the first transition series.' },
    // Thêm các nguyên tố khác vào đây
];

// Sự kiện click vào nguyên tố
mesh.addEventListener('click', function(event) {
    // Xác định nguyên tố đã click
    var elementSymbol = 'Fe'; // Thay 'Fe' bằng logic để lấy ký hiệu nguyên tố từ mesh

    // Tìm nguyên tố trong danh sách
    var selectedElement = elements.find(function(element) {
        return element.symbol === elementSymbol;
    });

    // Hiển thị thông tin nguyên tố
    if (selectedElement) {
        var elementInfoDiv = document.getElementById('element-info');
        elementInfoDiv.innerHTML = `
            <h2>${selectedElement.name} (${selectedElement.symbol})</h2>
            <p>Atomic Number: ${selectedElement.atomicNumber}</p>
            <p>Atomic Mass: ${selectedElement.atomicMass}</p>
            <p>Description: ${selectedElement.description}</p>
        `;
        elementInfoDiv.style.display = 'block';
    } else {
        alert('Thông tin không khả dụng cho nguyên tố đã chọn.');
    }
});

// Hàm ẩn thông tin nguyên tố khi click bên ngoài
document.addEventListener('click', function(event) {
    var elementInfoDiv = document.getElementById('element-info');
    if (!elementInfoDiv.contains(event.target)) {
        elementInfoDiv.style.display = 'none';
    }
});
