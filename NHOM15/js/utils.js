function formatVND(value) {
    if (value === undefined || value === null || value === '') return '';

    const numericString = String(value).replace(/[^[0-9]\.\-]/g, '');
    const parsed = Number(numericString);

    if (!Number.isFinite(parsed)) {
        return String(value);
    }

    return parsed.toLocaleString('vi-VN') + 'đ';
}
