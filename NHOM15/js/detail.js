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

// Danh sách Laptop (ID: 101, 102...)
const laptops = [
    {
        id: 101,
        name: "MSI Katana 15 (2416VN)",
        price: 22500000,
        oldPrice: "25.000.000đ",
        image: "https://via.placeholder.com/300?text=MSI+Katana+15", 
        badge: "Gaming",
        description: "Laptop gaming quốc dân, hiệu năng vượt trội, hệ thống tản nhiệt tối ưu cho cày game nặng."
    },
    {
        id: 102,
        name: "MacBook Air M2 256GB",
        price: 24990000,
        oldPrice: "27.990.000đ",
        image: "https://via.placeholder.com/300?text=MacBook+Air",
        badge: "Mỏng nhẹ",
        description: "Thiết kế sang trọng, pin cực trâu, màn hình Retina sắc nét chuẩn đồ họa."
    },
    {
        id: 103,
        name: "Lenovo ThinkPad E14 Gen 5",
        price: 18500000,
        oldPrice: "20.000.000đ",
        image: "https://via.placeholder.com/300?text=ThinkPad",
        badge: "Bền bỉ",
        description: "Bàn phím gõ siêu êm, độ bền đạt chuẩn quân đội, phù hợp cho dân coder."
    }
];

// Danh sách Đồ ăn (ID: 201, 202...)
const foods = [
    {
        id: 201, // ID bắt đầu từ 201 cho đồ ăn
        name: "Khô Gà Lá Chanh ( Loại 2 )",
        price: 78000,
        oldPrice: "1000.000đ",
        image: "./img/khoga.jpg", 
        badge: "Bán chạy",
        description: "Khô gà bã mía MIXIFOOD tuyệt phẩm bã mía chất lượng cao, SIÊU NGON - ĐẬM ĐÀ"
    },
];

// =========================================================================
// 2. XỬ LÝ LOGIC HIỂN THỊ CHI TIẾT
// =========================================================================

// Bước A: Gộp 3 mảng trên lại thành 1 mảng tổng to đùng tên là allProducts
const allProducts = products.concat(laptops, foods);

// Bước B: Lấy tham số ID từ thanh địa chỉ URL xuống (Ví dụ: detail.html?id=201)
const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get('id')); 

// Bước C: Tìm kiếm sản phẩm có ID trùng với ID trên URL trong mảng gộp tổng
const product = allProducts.find(function(item) {
    return item.id === productId;
});

// Bước D: Đổ dữ liệu tìm được ra các thẻ HTML của trang detail.html
if (product) {
    // Nếu tìm thấy món hàng/món ăn khớp ID
    document.getElementById("detailName").innerText = product.name;
    document.getElementById("detailPrice").innerText = product.price.toLocaleString('vi-VN') + "đ";
    document.getElementById("detailOldPrice").innerText = product.oldPrice;
    document.getElementById("detailImage").src = product.image;
    document.getElementById("detailDesc").innerText = product.description;
} else {
    // Nếu gõ bừa ID không tồn tại trên URL
    document.getElementById("productDetailContent").innerHTML = `
        <div class="col-12 text-center text-danger mt-5">
            <h3>Không tìm thấy thông tin sản phẩm này!</h3>
            <a href="index.html" class="btn btn-outline-danger mt-3">Quay lại trang chủ</a>
        </div>
    `;
}