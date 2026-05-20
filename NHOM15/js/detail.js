// 1. Tạm thời copy mảng dữ liệu vào đây để test
const products = [
    {
        id: 1,
        name: "Xiaomi REDMI K90 Pro Max",
        price: 14950000,
        oldPrice: "16.990.000đ",
        image: "./img/redmi-k90.png", // Đảm bảo đường dẫn ảnh đúng
        description: "Điện thoại gaming siêu mạnh với chip Snapdragon 8 Elite Gen 5, tản nhiệt chất lỏng VC..."
    },
    {
        id: 2,
        name: "iPhone 15 Pro Max 256GB",
        price: 29500000,
        oldPrice: "34.990.000đ",
        image: "https://img.dienthoaiviet.vn/image/product/iphone-15-pro-max.png",
        description: "Khung titan siêu nhẹ, camera zoom quang học 5x sắc nét, chip A17 Pro đỉnh cao."
    }
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