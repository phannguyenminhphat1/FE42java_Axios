var nguoiDungService = new NguoiDungService();
getListUser();

function laiTetGit(){
    console.log("Lại thêm người dùng");
}

function getListUser() {
    nguoiDungService.layDanhSachNguoiDung().then(function (result) {
        console.log(result.data);
        renderTable(result.data);
    }).catch(function (err) {
        console.log(err);
    });
    // sau khi duyệt xong mảng and gán dòng cột ở dưới thì .. gọi hàm RenderTable


}
function renderTable(arr) {
    // 2
    // sau khi có mảng bên người dùng service thì...
    // duyệt mảng
    // trước khi duyệt mảng tạo ra cái chuỗi rỗng:
    var contentHTML = "";
    // nếu không trả ra mảng mới thì nên dùng foreach thay vì map
    arr.forEach(function (item, index) {
        contentHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${item.taiKhoan}</td>
                <td>${item.matKhau}</td>
                <td>${item.hoTen}</td>
                <td>${item.email}</td>
                <td>${item.soDT}</td>
                <td>${item.maLoaiNguoiDung}</td>
                <td>
                    <button class="btn btn-info" data-toggle="modal" data-target="#myModal"  onclick="editUser(${item.id})"> Sửa</button>
                    <button class="btn btn-danger" onclick="deleteUser(${item.id})"> Xóa</button>
                </td>

            </tr>
        `;

    });
    getEle("tblDanhSachNguoiDung").innerHTML = contentHTML;

}
getEle("btnThemNguoiDung").addEventListener("click", function () {
    var footer = "<button class='btn btn-success' onclick='addUser()'> Add user </button>"
    // DOM tới class modal footer
    document.getElementsByClassName("modal-footer")[0].innerHTML = footer;
    document.getElementsByClassName("modal-title")[0].innerHTML = "Add User";

    // B4. sau khi setAtribute disabled cho nút sửa thì này cũng bị luôn nên phải tháo ra
    getEle("TaiKhoan").removeAttribute("disabled");
})

// sau khi tạo cái trên xong thì thêm cái onclick vào...
function addUser() {
    console.log(123);
    var taiKhoan = getEle("TaiKhoan").value;
    var hoTen = getEle("HoTen").value;
    var matKhau = getEle("MatKhau").value;
    var email = getEle("Email").value;
    var soDT = getEle("SoDienThoai").value;
    var loaiNguoiDung = getEle("loaiNguoiDung").value;

    var user = new NguoiDung(taiKhoan, hoTen, matKhau, email, soDT, loaiNguoiDung);
    nguoiDungService.themNguoiDung(user).then(function (result) {
        getListUser();
    }).catch(function (err) {
        console.log(err);
    })

    // sau khi thêm được thì mong muốn là bấm nút thêm là nó thêm vào sever nên phải qia NguoiDungService
}

function getEle(id) {
    return document.getElementById(id);
}

// B4
// DElete USER
function deleteUser(id) {
    console.log(id);
    nguoiDungService.xoaNguoiDung(id).then(function (result) {
        getListUser();

    }).catch(function (err) {
        console.log(err);
    })

}

// EDIT USER
function editUser(id) {
    document.getElementsByClassName("modal-title")[0].innerHTML = "UPDATE USER";
    var footer = `<button class='btn btn-success' onclick='updateUser(${id})'> Update </button>`;
    document.getElementsByClassName("modal-footer")[0].innerHTML = footer;
    nguoiDungService.layThongTinNguoiDung(id).then(function(result){
        console.log(result.data);
        // Đổ data ra ngoài
        getEle("TaiKhoan").value = result.data.taiKhoan;
        getEle("TaiKhoan").setAttribute("disabled", true);
        getEle("HoTen").value = result.data.hoTen;
        getEle("MatKhau").value = result.data.matKhau;
        getEle("Email").value = result.data.email;
        getEle("SoDienThoai").value = result.data.soDT;
        getEle("loaiNguoiDung").value = result.data.maLoaiNguoiDung;

    }) .catch(function(err){
        console.log(err);
    })
}
// UPDATE USER
// Nhấn update thì sẽ lấy lại mấy dữ liệu mới
function updateUser(id){
    var taiKhoan = getEle("TaiKhoan").value;
    var hoTen = getEle("HoTen").value;
    var matKhau = getEle("MatKhau").value;
    var email = getEle("Email").value;
    var soDT = getEle("SoDienThoai").value;
    var loaiNguoiDung = getEle("loaiNguoiDung").value;

    var user = new NguoiDung(taiKhoan, hoTen, matKhau, email, soDT, loaiNguoiDung);
    nguoiDungService.capNhatNguoiDung(id,user).then(function (result) {
        alert("update thành công")
        getListUser();
    }).catch(function (err) {
        console.log(err);
    })
}