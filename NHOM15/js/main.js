const API_URL = "https://69fae82e88a7af0ecca7ea14.mockapi.io/api/v1/products";
// 1. LẤY DỮ LIỆU TỪ API VÀ HIỂN THỊ TRANG CHỦ
async function fetchAndRenderHome() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        
        // Phân loại sản phẩm dựa vào trường 'type'
        const phones = data.filter(item => item.type === 'phone' || !item.type); // Mặc định nếu ko có type là phone
        const laptops = data.filter(item => item.type === 'laptop');

        // Render từng danh mục
        renderCategory(phones, "productList");
        renderCategory(laptops, "laptopList");

    } catch (error) {
        console.error("Lỗi khi tải dữ liệu trang chủ:", error);
    }
}
// 2. HÀM RENDER CHUNG CHO CÁC DANH MỤC
function renderCategory(products, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = "";

    if (products.length === 0) {
        container.innerHTML = `<p class="text-center text-muted w-100">Chưa có sản phẩm nào trong danh mục này.</p>`;
        return;
    }

    products.forEach(item => {
        const productHTML = `
            <div class="col-6 col-md-4 col-lg-3">
                <div class="card h-100 shadow-sm border-0 product-card">
                    ${item.badge ? `<span class="badge bg-danger position-absolute" style="top: 10px; right: 10px;">${item.badge}</span>` : ''}
                    <img src="${item.image}" onerror="this.src='https://via.placeholder.com/300'" class="card-img-top p-3" alt="${item.name}" style="object-fit: contain; height: 200px;">
                    <div class="card-body text-center d-flex flex-column">
                        <h6 class="card-title fw-bold">${item.name}</h6>
                        <div class="mt-auto">
                            <p class="text-danger fw-bold m-0">${Number(item.price).toLocaleString('vi-VN')}đ</p>
                            ${item.oldPrice ? `<p class="text-muted text-decoration-line-through small">${item.oldPrice}</p>` : '<p class="text-muted small">&nbsp;</p>'}
                            <a href="detail.html?id=${item.id}" class="btn btn-danger btn-sm w-100 mt-2">Xem chi tiết</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += productHTML;
    });
}
// 3. KHỞI TẠO KHI TẢI TRANG
document.addEventListener("DOMContentLoaded", () => {
    fetchAndRenderHome();
});
