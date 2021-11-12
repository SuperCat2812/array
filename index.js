let a = [1, 2, 87, -88, 99];
let h;
for (let i = 0; i <= a.length; i+=2){
  h=i % 2;
  if (h == 0) {
    console.log(a[i]);
  }
}
for (let i = 1; i < 6; i++){
  let g ="text" + i;
  let p = document.getElementById(g);
  p.textContent = i;
}