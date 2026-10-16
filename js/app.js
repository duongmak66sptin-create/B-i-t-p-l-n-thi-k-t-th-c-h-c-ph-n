const danhsachgoc = [
  { ma: 'HS01', ten: 'Cà Văn Giang', diem: 8.5 },
  { ma: 'HS02', ten: 'Mùa A Dương', diem: 9.0 },
  { ma: 'HS03', ten: 'Đinh Thị Minh Ngọc', diem: 7.8 },
  { ma: 'HS04', ten: 'Liễu Thị Khánh Thảo', diem: 8.2 },
  { ma: 'HS05', ten: 'Lò Văn Nam', diem: 5.5 },
  { ma: 'HS06', ten: 'Nguyễn Thị Mai', diem: 6.8 },
];

let danhsach = [...danhsachgoc];

function xeploai(diem) {
  if (diem >= 8.0) {
    return { loai: 'gioi', tenloai: 'Giỏi', maubadge: 'bg-success' };
  } else if (diem >= 6.5) {
    return { loai: 'kha', tenloai: 'Khá', maubadge: 'bg-primary' };
  } else {
    return {
      loai: 'trungbinh',
      tenloai: 'Trung bình',
      maubadge: 'bg-warning text-dark',
    };
  }
}

function vebang(dulieu) {
  const bang = document.getElementById('bangdiem');
  bang.innerHTML = '';

  if (dulieu.length === 0) {
    const hangrong = document.createElement('tr');
    hangrong.innerHTML = `<td colspan="6" class="text-danger fw-bold py-3">Không tìm thấy dữ liệu học sinh nào!</td>`;
    bang.appendChild(hangrong);
    return;
  }

  dulieu.forEach((hs, vitri) => {
    const xl = xeploai(hs.diem);
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${vitri + 1}</td>
      <td><strong>${hs.ma}</strong></td>
      <td class="text-start">${hs.ten}</td>
      <td class="fw-bold">${hs.diem.toFixed(1)}</td>
      <td><span class="badge ${xl.maubadge}">${xl.tenloai}</span></td>
      <td>
        <button type="button" class="btn btn-sm btn-outline-danger" onclick="xoahocsinh('${
          hs.ma
        }')">Xóa</button>
      </td>
    `;
    bang.appendChild(tr);
  });
}

function tinhthongke() {
  const tongso = danhsach.length;
  const osiso = document.getElementById('siso');
  const odiemtb = document.getElementById('diemtb');
  const odiemmax = document.getElementById('diemmax');
  const odiemmin = document.getElementById('diemmin');

  if (tongso === 0) {
    osiso.textContent = '0';
    odiemtb.textContent = '0.0';
    odiemmax.textContent = '0.0';
    odiemmin.textContent = '0.0';
    return;
  }

  let tongdiem = 0;
  let max = danhsach[0].diem;
  let min = danhsach[0].diem;

  for (let i = 0; i < tongso; i++) {
    const d = danhsach[i].diem;
    tongdiem += d;
    if (d > max) max = d;
    if (d < min) min = d;
  }

  const trungbinh = tongdiem / tongso;

  osiso.textContent = tongso;
  odiemtb.textContent = trungbinh.toFixed(2);
  odiemmax.textContent = max.toFixed(1);
  odiemmin.textContent = min.toFixed(1);
}

window.xoahocsinh = function (ma) {
  danhsach = danhsach.filter((hs) => hs.ma !== ma);
  timkiemvaloc();
  tinhthongke();
};

function timkiemvaloc() {
  const tukhoa = document.getElementById('timkiem').value.toLowerCase().trim();
  const tieuchiloc = document.getElementById('lochocluc').value;

  const ketqualoc = danhsach.filter((hs) => {
    const khopten = hs.ten.toLowerCase().includes(tukhoa);
    const loaihs = xeploai(hs.diem).loai;
    const khoploai = tieuchiloc === 'tatca' || loaihs === tieuchiloc;
    return khopten && khoploai;
  });

  vebang(ketqualoc);
}

document.getElementById('timkiem').addEventListener('input', timkiemvaloc);
document.getElementById('lochocluc').addEventListener('change', timkiemvaloc);

document.getElementById('formnhap').addEventListener('submit', function (e) {
  e.preventDefault();

  const ohoten = document.getElementById('hoten');
  const odiem = document.getElementById('diem');
  const giatriten = ohoten.value.trim();
  const giatridiem = parseFloat(odiem.value);

  let hople = true;

  if (giatriten === '') {
    ohoten.classList.add('is-invalid');
    hople = false;
  } else {
    ohoten.classList.remove('is-invalid');
  }

  if (isNaN(giatridiem) || giatridiem < 0 || giatridiem > 10) {
    odiem.classList.add('is-invalid');
    hople = false;
  } else {
    odiem.classList.remove('is-invalid');
  }

  if (!hople) return;

  const mamoi = 'HS' + String(danhsach.length + 1).padStart(2, '0');
  danhsach.push({
    ma: mamoi,
    ten: giatriten,
    diem: giatridiem,
  });

  ohoten.value = '';
  odiem.value = '';

  timkiemvaloc();
  tinhthongke();
});

document.getElementById('nutreset').addEventListener('click', function () {
  danhsach = [...danhsachgoc];
  document.getElementById('timkiem').value = '';
  document.getElementById('lochocluc').value = 'tatca';
  document.getElementById('hoten').classList.remove('is-invalid');
  document.getElementById('diem').classList.remove('is-invalid');
  document.getElementById('ketqua').textContent = 'Chưa chọn học sinh';

  vebang(danhsach);
  tinhthongke();
});

document.getElementById('nutboctham').addEventListener('click', function () {
  const oketqua = document.getElementById('ketqua');
  if (danhsach.length === 0) {
    oketqua.textContent = 'Danh sách hiện tại đang rỗng!';
    return;
  }

  const vitringau = Math.floor(Math.random() * danhsach.length);
  const hschon = danhsach[vitringau];
  oketqua.innerHTML = `🎉 <b>${hschon.ten}</b> (Điểm: ${hschon.diem.toFixed(
    1
  )})`;
});

$(document).ready(function () {
  $('#nutdongmo').click(function () {
    $('#hopthongke').slideToggle(300);
  });

  vebang(danhsach);
  tinhthongke();
});
