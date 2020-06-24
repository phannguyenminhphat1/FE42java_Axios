function NguoiDungService() {
    // bước 2

    // this.danhSachNguoiDung = [];


    // bước 1
    this.layDanhSachNguoiDung = function () {
        return axios({
            url: "https://5a6451dcf2bae00012ca1a6a.mockapi.io/api/NguoiDung",
            method: "GET"
            // method: GET, POST, PUT,DELETE

        });
        // để nó đến 2 trường hợp dưới thì phải trải qua gia đoan: pending
        // nếu lấy dữ liệu về thành công thì nó chứa trong hàm: then()
        // chỉ thực hiện 1 trong 2 hàm dưới
        // .data là ở bên tab Console sau khi log ra thấy: để ý cái data


        // .then(function (result) {
        //     console.log(result.data);
        //     // cái mảng nằm trong cái reslut.data 
        //     // 2
        //     this.danhSachNguoiDung = result.data;
        // })
        // // nếu lấy dữ liệu về không thành công thì nó chứa trong hàm: catch()
        // .catch(function (err) {
        //     console.log(err);
        // })
        // sau khi log cái dưới thấy nó chạy trước cái log ở trên: bất đồng bộ(cái nào show đc cứ show ra)
        // nguyên cái cục AXOIS ở trên là sau 1 khoảng tgian mới chạy vì liên quan đến network;
        // cái nào k liên quan đến network thì chạy trước.. vì vậy dẫn đến bất đồng bộ


        // console.log(this.danhSachNguoiDung);

    }
    this.themNguoiDung = function (user) {
        return axios({
            url: "https://5a6451dcf2bae00012ca1a6a.mockapi.io/api/NguoiDung",
            method: "POST",
            // đẩy lên sever
            data: user
        });
    }

    this.xoaNguoiDung = function (id) {
        return axios({
            url: `https://5a6451dcf2bae00012ca1a6a.mockapi.io/api/NguoiDung/${id}`,
            method: "DELETE",
        })
    }

    // sửa ngdung
    this.layThongTinNguoiDung = function (id) {
        return axios({
            url: `https://5a6451dcf2bae00012ca1a6a.mockapi.io/api/NguoiDung/${id}`,
            method: "GET",
        })
    }
    this.capNhatNguoiDung = function (id, user) {
        return axios({
            url: `https://5a6451dcf2bae00012ca1a6a.mockapi.io/api/NguoiDung/${id}`,
            method: "PUT",
            data: user
        })
    }
}