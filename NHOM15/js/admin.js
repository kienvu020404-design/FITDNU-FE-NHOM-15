const API_URL = "https://69fae82e88a7af0ecca7ea14.mockapi.io/api/v1/products";

function formatVNDInput(value) {
    const digits = String(value).replace(/\D/g, "");
    if (!digits) return "";
    return Number(digits).toLocaleString('vi-VN');
}

function parsePriceValue(value) {
    return Number(String(value).replace(/\D/g, "")) || 0;
}

// 1. LẤY DỮ LIỆU TỪ API VÀ HIỂN THỊ
async function fetchProducts() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        
        renderAdminTable(data); 
        console.log("Đã lấy được dữ liệu:", data);
    } catch (error) {
        console.error("Lỗi khi tải dữ liệu:", error);
    }
}

// Render dữ liệu ra bảng
function renderAdminTable(products) {
    const tbody = document.getElementById("adminTableBody");
    tbody.innerHTML = ""; // Xóa dữ liệu cũ
    
    products.forEach(product => {
        const tr = document.createElement("tr");
        
        let typeBadgeClass = 'bg-secondary';
        if (product.type === 'phone') typeBadgeClass = 'bg-primary';
        else if (product.type === 'laptop') typeBadgeClass = 'bg-dark';
        else if (product.type === 'food') typeBadgeClass = 'bg-success';
        
        tr.innerHTML = `
            <td class="fw-bold text-muted">${product.id}</td>
            <td>
                <img src="${product.image}" onerror="this.src='https://via.placeholder.com/50'" class="rounded border" style="width: 50px; height: 50px; object-fit: contain;">
            </td>
            <td class="fw-bold">${product.name}</td>
            <td><span class="badge ${typeBadgeClass}">${product.type || 'Khác'}</span></td>
            <td class="text-danger fw-bold">${Number(product.price).toLocaleString('vi-VN')}đ</td>
            <td class="text-end">
                <button class="btn btn-warning btn-sm text-dark me-1" title="Sửa"><i class="fa-solid fa-pen-to-square"></i></button>
                <button class="btn btn-danger btn-sm btn-delete" data-id="${product.id}" title="Xóa"><i class="fa-solid fa-trash"></i></button>
            </td>
        `;
        tbody.appendChild(tr);
    });

    // Gắn sự kiện xóa cho các nút vừa tạo
    const deleteButtons = document.querySelectorAll(".btn-delete");
    deleteButtons.forEach(btn => {
        btn.addEventListener("click", function() {
            const id = this.getAttribute("data-id");
            deleteProduct(id);
        });
    });
}
// 2. THÊM SẢN PHẨM MỚI (POST)
async function addProduct(newProductData) {
    try {
        const btnSave = document.getElementById("btnSave");
        btnSave.disabled = true;
        btnSave.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Đang lưu...';

        const response = await fetch(API_URL, {
            method: 'POST', 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newProductData) 
        });
        
        if (response.ok) {
            alert("Thêm sản phẩm thành công!");
            document.getElementById("productForm").reset(); // Reset form
            fetchProducts(); 
        }
    } catch (error) {
        console.error("Lỗi khi thêm:", error);
    } finally {
        const btnSave = document.getElementById("btnSave");
        btnSave.disabled = false;
        btnSave.innerHTML = '<i class="fa-solid fa-floppy-disk"></i> Lưu sản phẩm';
    }
}

// 3. XÓA SẢN PHẨM (DELETE)
async function deleteProduct(id) {
    if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này không?")) {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'DELETE' 
            });
            
            if (response.ok) {
                alert("Đã xóa thành công!");
                fetchProducts(); 
            }
        } catch (error) {
            console.error("Lỗi khi xóa:", error);
        }
    }
}
// 4. KHỞI TẠO VÀ GẮN SỰ KIỆN KHI TRANG TẢI XONG
document.addEventListener("DOMContentLoaded", () => {
    // Tải danh sách sản phẩm ban đầu
    fetchProducts();

    const inputPrice = document.getElementById("inputPrice");
    const inputOldPrice = document.getElementById("inputOldPrice");
    if (inputPrice) {
        inputPrice.addEventListener("input", function () {
            this.value = formatVNDInput(this.value);
        });
    }
    if (inputOldPrice) {
        inputOldPrice.addEventListener("input", function () {
            this.value = formatVNDInput(this.value);
        });
    }
    
    // Gắn sự kiện submit form thêm mới (nút btnSave)
    const btnSave = document.getElementById("btnSave");
    if (btnSave) {
        btnSave.addEventListener("click", function() {
            const name = document.getElementById("inputName").value.trim();
            const price = document.getElementById("inputPrice").value;
            const parsedPrice = parsePriceValue(price);
            
            if (!name || !parsedPrice) {
                alert("Vui lòng nhập tên và giá bán sản phẩm!");
                return;
            }

            const newProduct = {
                name: name,
                price: parsedPrice,
                oldPrice: parsePriceValue(document.getElementById("inputOldPrice").value),
                image: document.getElementById("inputImage").value.trim() || 'https://via.placeholder.com/150',
                badge: document.getElementById("inputBadge").value.trim(),
                description: document.getElementById("inputDesc").value.trim(),
                type: document.getElementById("inputType").value 
            };
            
            // Đẩy lên API
            addProduct(newProduct);
        });
    }

    // Nút làm mới danh sách
    const btnRefresh = document.querySelector(".fa-rotate-right").closest("button");
    if (btnRefresh) {
        btnRefresh.addEventListener("click", fetchProducts);
    }
});