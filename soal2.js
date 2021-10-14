const dumbWaysJos = 21.1;
const dumbWaysMantap = 30;

const bigDiscount = (discountName, money) => {
  let price;
  let discount;
  if (discountName === dumbWaysJos) {
    if (money >= 80000 && money >= 50000) {
      discount = (21.1 / 100) * money;

      if (discount <= 20000) {
        price = money - discount;
        return `Uang yang harus dibayar = Rp.${price}
              discount = Rp.${Math.round(discount)}
              Kembalian = Rp.${Math.round(discount)}`;
      } else if (discount >= 20000) {
        discount = 20000;
        price = money - discount;
        return `Uang yang harus dibayar = Rp.${price}
              discount = Rp.${Math.round(discount)}
              Kembalian = Rp.${Math.round(discount)}`;
      }
    } else {
      return "Yuk belanja lebih banyak lagi biar bisa dapat DISKON";
    }
  } else if (discountName === dumbWaysMantap) {
    if (money > 80000) {
      discount = (30 / 100) * money;
      if (discount < 40000) {
        price = money - discount;
        console.log("no");
        return `Uang yang harus dibayar = Rp.${price}
              discount = Rp.${discount}
              Kembalian = Rp.${discount}`;
      } else {
        discount = 40000;
        price = money - discount;
        console.log("ya");
        return `Uang yang harus dibayar = Rp.${price}
              discount = Rp.${discount}
              Kembalian = Rp.${discount}`;
      }
    } else {
      return "Gunakan voucher dumbwaysJos untuk total belanja dibawah Rp.80.000";
    }
  } else {
    return `Voucher yang anda masukkan salah`;
  }
};

console.log(bigDiscount(dumbWaysMantap, 70000));
