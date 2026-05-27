const API_URL = "https://69fae82e88a7af0ecca7ea14.mockapi.io/api/v1/products";
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

async function fetchAndRenderDetail() {
    if (!productId) {
        showNotFound();
        return;
    }

    try {
        const response = await fetch(`${API_URL}/${productId}`);
        
        if (!response.ok) {
            showNotFound();
            return;
        }
        
        const product = await response.json();
        
        // Đổ dữ liệu ra các thẻ HTML của trang detail.html
        document.getElementById("detailName").innerText = product.name;
        document.getElementById("detailPrice").innerText = Number(product.price).toLocaleString('vi-VN') + "đ";
        document.getElementById("detailOldPrice").innerText = product.oldPrice || "";
        document.getElementById("detailImage").src = product.image;
        document.getElementById("detailDesc").innerText = product.description || "Chưa có mô tả cho sản phẩm này.";
        
    } catch (error) {
        console.error("Lỗi khi tải chi tiết sản phẩm:", error);
        showNotFound();
    }
}

function showNotFound() {
    const container = document.getElementById("productDetailContent");
    if (container) {
        container.innerHTML = `
            <div class="col-12 text-center text-danger mt-5">
                <h3>Không tìm thấy thông tin sản phẩm này!</h3>
                <a href="index.html" class="btn btn-outline-danger mt-3">Quay lại trang chủ</a>
            </div>
        `;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    fetchAndRenderDetail();
});