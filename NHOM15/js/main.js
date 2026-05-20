// 1. Thêm ID và Mô tả vào mảng dữ liệu
const products = [
    {
        id: 1, // BẮT BUỘC PHẢI CÓ ID ĐỂ PHÂN BIỆT
        name: "Xiaomi REDMI K90 Pro Max",
        price: 14950000,
        oldPrice: "16.990.000đ",
        image: "./img/k90prm.jpg",
        badge: "Giảm 10%",
        description: "Điện thoại gaming siêu mạnh với chip Snapdragon 8 Elite Gen 5, tản nhiệt chất lỏng VC..."
    },
    {
        id: 2,
        name: "iPhone 15 Pro Max 256GB",
        price: 29500000,
        oldPrice: "34.990.000đ",
        image: "./img/15prm1.jpg",
        badge: "Mới",
        description: "Khung titan siêu nhẹ, camera zoom quang học 5x sắc nét, chip A17 Pro đỉnh cao."
    },
    {
        id: 3,
        name: "Xiaomi 17 Pro Max",
        price: 21000000,
        oldPrice: "30.000.000đ",
        image:"./img/ximi17prm.png",
        badge: "Mới",
        description:"Màn hình sau độc nhất, Snapdragon 8 Elite Gen 5",
    },
    {
        id: 4,
        name: "Xiaomi 17 Pro",
        price: 15000000,
        oldPrice: "25.000.000đ",
        image:"./img/ximi17pro.png",
        badge: "Mới",
        description:"Màn hình sau độc nhất, Snapdragon 8 Elite Gen 5",
    },
    {
        id: 5,
        name: "Samsung S26 Ultra",
        price: 30490000,
        oldPrice: "35.000.000đ",
        image:"./img/S26U.jpg",
        badge: "Mới",
        description:"Flagship cao cấp của Samsung",
    },
    
];
// ==========================================
// PHẦN XỬ LÝ CHO ĐỒ ĂN NỔI BẬT
// ==========================================

// 1. Mảng dữ liệu Đồ ăn
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

// 2. Hàm in danh sách Đồ ăn ra giao diện
function renderFoods(foodData) {
    const foodContainer = document.getElementById("foodList");
    
    if (!foodContainer) return;

    foodContainer.innerHTML = "";

    for (let i = 0; i < foodData.length; i++) {
        const item = foodData[i];
        
        const productHTML = `
            <div class="col-6 col-md-4 col-lg-3">
                <div class="card h-100 shadow-sm border-0 product-card">
                    <span class="badge bg-danger position-absolute" style="top: 10px; right: 10px;">${item.badge}</span>
                    <img src="${item.image}" class="card-img-top" alt="${item.name}">
                    <div class="card-body text-center d-flex flex-column">
                        <h6 class="card-title fw-bold">${item.name}</h6>
                        <div class="mt-auto">
                            <p class="text-danger fw-bold m-0">${item.price.toLocaleString('vi-VN')}đ</p>
                            <p class="text-muted text-decoration-line-through small">${item.oldPrice}</p>
                            <a href="detail.html?id=${item.id}" class="btn btn-danger btn-sm w-100 mt-2">Xem chi tiết</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        foodContainer.innerHTML += productHTML;
    }
}

// 3. Gọi hàm để chạy hiển thị đồ ăn
renderFoods(foods);
// ==========================================
// PHẦN XỬ LÝ CHO LAPTOP NỔI BẬT
// ==========================================

// 1. Mảng dữ liệu Laptop (Chú ý ID phải khác biệt với điện thoại để không bị trùng khi xem chi tiết)
const laptops = [
    {
        id: 101, // Bắt đầu từ 101 cho laptop
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

// 2. Hàm in danh sách Laptop ra giao diện
function renderLaptops(laptopData) {
    // Tìm khung chứa có id là laptopList
    const laptopContainer = document.getElementById("laptopList");
    
    if (!laptopContainer) return; // Tránh lỗi nếu trang không có khung này

    laptopContainer.innerHTML = "";

    for (let i = 0; i < laptopData.length; i++) {
        const item = laptopData[i];
        
        // Code HTML giống hệt thẻ điện thoại
        const productHTML = `
            <div class="col-6 col-md-4 col-lg-3">
                <div class="card h-100 shadow-sm border-0 product-card">
                    <span class="badge bg-danger position-absolute" style="top: 10px; right: 10px;">${item.badge}</span>
                    <img src="${item.image}" class="card-img-top" alt="${item.name}">
                    <div class="card-body text-center d-flex flex-column">
                        <h6 class="card-title fw-bold">${item.name}</h6>
                        <div class="mt-auto">
                            <p class="text-danger fw-bold m-0">${item.price.toLocaleString('vi-VN')}đ</p>
                            <p class="text-muted text-decoration-line-through small">${item.oldPrice}</p>
                            <a href="detail.html?id=${item.id}" class="btn btn-danger btn-sm w-100 mt-2">Xem chi tiết</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        laptopContainer.innerHTML += productHTML;
    }
}

// 3. Gọi hàm để chạy
renderLaptops(laptops);
// 2. Sửa hàm renderProducts để gắn hàm onclick vào nút
function renderProducts(productList) {
    const productContainer = document.getElementById("productList");
    productContainer.innerHTML = "";

    for (let i = 0; i < productList.length; i++) {
        const item = productList[i];
        
        const productHTML = `
            <div class="col-6 col-md-4 col-lg-3">
                <div class="card h-100 shadow-sm border-0 product-card">
                    <span class="badge bg-danger position-absolute" style="top: 10px; right: 10px;">${item.badge}</span>
                    <img src="${item.image}" class="card-img-top p-3" alt="${item.name}">
                    <div class="card-body text-center">
                        <h6 class="card-title fw-bold">${item.name}</h6>
                        <p class="text-danger fw-bold m-0">${item.price.toLocaleString('vi-VN')}đ</p>
                        <p class="text-muted text-decoration-line-through small">${item.oldPrice}</p>
                        <a href="detail.html?id=${item.id}" class="btn btn-danger btn-sm w-100 mt-2">Xem chi tiết</a>
                    </div>
                </div>
            </div>
        `;
        productContainer.innerHTML += productHTML;
    }
}

renderProducts(products);
// Hàm hiển thị chi tiết sản phẩm
function showDetail(productId) {
    // 1. Tìm sản phẩm trong mảng dựa vào ID được truyền vào
    // Sử dụng hàm .find() của mảng
    const product = products.find(function(item) {
        return item.id === productId;
    });

    // Nếu không tìm thấy sản phẩm thì dừng hàm
    if (!product) return; 

    // 2. Lấy các thẻ HTML trong Modal và nhét dữ liệu vào
    document.getElementById("modalName").innerText = product.name;
    document.getElementById("modalPrice").innerText = product.price.toLocaleString('vi-VN') + "đ";
    document.getElementById("modalOldPrice").innerText = product.oldPrice;
    document.getElementById("modalImage").src = product.image;
    document.getElementById("modalDesc").innerText = product.description || "Đang cập nhật mô tả...";

    // 3. Sử dụng API của Bootstrap 5 để gọi Modal hiện lên
    const myModalElement = document.getElementById('productDetailModal');
    const modalInstance = new bootstrap.Modal(myModalElement);
    modalInstance.show();
}