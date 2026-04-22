let danhSach = [];

function diemDanh() {
    let ten = document.getElementById("ten").value;
    let trangthai = document.getElementById("trangthai").value;
    let lydo = document.getElementById("lydo").value;

    if (ten === "") {
        alert("Nhập tên đi bro 🥲");
        return;
    }

    let nhanVien = {
        ten: ten,
        trangthai: trangthai,
        lydo: trangthai === "absent" ? lydo : ""
    };

    danhSach.push(nhanVien);

    hienThi();
}

function hienThi() {
    let ul = document.getElementById("danhsach");
    ul.innerHTML = "";

    let tongCoMat = 0;

    danhSach.forEach(nv => {
        let li = document.createElement("li");

        if (nv.trangthai === "present") {
            li.innerHTML = `✅ ${nv.ten} - Có mặt`;
            tongCoMat++;
        } else {
            li.innerHTML = `❌ ${nv.ten} - Vắng (${nv.lydo})`;
        }

        ul.appendChild(li);
    });

    document.getElementById("tong").innerText = 
        "Tổng có mặt: " + tongCoMat;
}
