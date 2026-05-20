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