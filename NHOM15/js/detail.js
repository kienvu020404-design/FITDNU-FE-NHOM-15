// 1. Tạm thời copy mảng dữ liệu vào đây để test
const products = [
    {
        id: 1,
        name: "Xiaomi REDMI K90 Pro Max",
        price: 14950000,
        oldPrice: "16.990.000đ",
        image: "./img/k90prm.jpg",
        description: "Điện thoại gaming siêu mạnh với chip Snapdragon 8 Elite Gen 5, tản nhiệt chất lỏng VC..."
    },
    {
        id: 2,
        name: "iPhone 15 Pro Max 256GB",
        price: 29500000,
        oldPrice: "34.990.000đ",
        image: "./img/15prm1.jpg",
        description: "Khung titan siêu nhẹ, camera zoom quang học 5x sắc nét, chip A17 Pro đỉnh cao."
    },
    {
        id: 3,
        name: "Xiaomi 17 Pro Max",
        price: 21000000,
        oldPrice: "30.000.000đ",
        image: "./img/ximi17prm.png",
        description: "Flagship cao cấp, màn hình lớn và một màn hình phụ, Snapdragon 8 Elite Gen 5,..."
    },
    {
        id: 4,
        name: "Xiaomi 17 Pro",
        price: 15000000,
        oldPrice: "25.000.000đ",
        image: "./img/ximi17pro.png",
        description: "Flagship cao cấp, màn hình nhỏ và một màn hình phụ, Snapdragon 8 Elite Gen 5,..."
    },
    {
        id: 5,
        name: "Samsung S26 Ultra",
        price: 30490000,
        oldPrice: "35.000.000đ",
        image:"./img/S26U.jpg",
        badge: "Mới",
        description:"mang đến trải nghiệm flagship đỉnh cao nhờ sự kết hợp giữa màn hình 6.9 inch Dynamic AMOLED 2X 120Hz với độ sáng kỷ lục 2600 nits. Sức mạnh phần cứng được bảo chứng bởi vi xử lý Snapdragon 8 Elite Gen 5 cùng RAM 12GB, đảm bảo mọi tác vụ đa nhiệm và chơi game đồ họa nặng luôn vận hành mượt mà. Không chỉ dừng lại ở hiệu năng, thiết bị còn là công cụ sáng tạo nội dung chuyên nghiệp với khả năng quay video 8K@30fps sắc nét, mang lại chất lượng hình ảnh chuẩn điện ảnh.",
    },
];

// 2. Kỹ thuật lấy ID từ thanh URL (Ví dụ: detail.html?id=1)
const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get('id')); // Chuyển chuỗi '1' thành số 1

// 3. Tìm sản phẩm trong mảng có id khớp với id trên URL
const product = products.find(function(item) {
    return item.id === productId;
});

// 4. In dữ liệu ra giao diện HTML
if (product) {
    // Nếu tìm thấy sản phẩm
    document.getElementById("detailName").innerText = product.name;
    document.getElementById("detailPrice").innerText = product.price.toLocaleString('vi-VN') + "đ";
    document.getElementById("detailOldPrice").innerText = product.oldPrice;
    document.getElementById("detailImage").src = product.image;
    document.getElementById("detailDesc").innerText = product.description;
} else {
    // Nếu ID trên URL bị sai hoặc không tồn tại
    document.getElementById("productDetailContent").innerHTML = `
        <div class="col-12 text-center text-danger mt-5">
            <h3>Không tìm thấy sản phẩm!</h3>
            <a href="index.html" class="btn btn-outline-danger mt-3">Quay lại trang chủ</a>
        </div>
    `;
}