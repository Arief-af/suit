let mySuit = prompt('Pilih suit : batu, gunting, kertas');
let enemy = ['batu','gunting','kertas']
let ai = Math.floor(Math.random() * 3)
console.log('created by ariefafn');
if (mySuit == 'batu' && ai == 1) {
    document.getElementById("result").innerHTML = 'Kamu Menang!';
    document.getElementById("mySuit").innerHTML = 'Kamu : '+mySuit
    document.getElementById("musuh").innerHTML = 'Musuh : '+enemy[ai]
    console.log('Kamu Menang!');
    console.log('Kamu : '+mySuit);
    console.log('Musuh : '+enemy[ai]);
}else if (mySuit == 'batu' && ai == 2) {
    document.getElementById("result").innerHTML = 'Kamu Kalah!';
    document.getElementById("mySuit").innerHTML = 'Kamu : '+mySuit
    document.getElementById("musuh").innerHTML = 'Musuh : '+enemy[ai]
    console.log('Kamu Kalah!');
    console.log('Kamu : '+mySuit);
    console.log('Musuh : '+enemy[ai]);
}else if (mySuit == 'batu' && ai == 0) {
    document.getElementById("result").innerHTML = 'Seri!'
    document.getElementById("mySuit").innerHTML = 'Kamu : '+mySuit;
    document.getElementById("musuh").innerHTML = 'Musuh : '+enemy[ai]
    console.log('Seri!');
    console.log('Kamu : '+mySuit);
    console.log('Musuh : '+enemy[ai]);
}else if (mySuit == 'gunting' && ai == 1) {
     document.getElementById("result").innerHTML = 'Kamu Menang!';
    document.getElementById("mySuit").innerHTML = 'Kamu : '+mySuit
    document.getElementById("musuh").innerHTML = 'Musuh : '+enemy[ai]
    console.log('Seri!');
    console.log('Kamu : '+mySuit);
    console.log('Musuh : '+enemy[ai]);
}else if (mySuit == 'gunting' && ai == 2) {
     document.getElementById("result").innerHTML = 'Kamu Menang!';
    document.getElementById("mySuit").innerHTML = 'Kamu : '+mySuit
    document.getElementById("musuh").innerHTML = 'Musuh : '+enemy[ai]
    console.log('Kamu Menang!');
    console.log('Kamu : '+mySuit);
    console.log('Musuh : '+enemy[ai]);
}else if (mySuit == 'gunting' && ai == 0) {
    document.getElementById("result").innerHTML = 'Kamu Kalah!';
    document.getElementById("mySuit").innerHTML = 'Kamu : '+mySuit
    document.getElementById("musuh").innerHTML = 'Musuh : '+enemy[ai]
    console.log('kamu Kalah!');
    console.log('Kamu : '+mySuit);
    console.log('Musuh : '+enemy[ai]);
}else if (mySuit == 'kertas' && ai == 1) {
     document.getElementById("result").innerHTML = 'Kamu Kalah!';
    document.getElementById("mySuit").innerHTML = 'Kamu : '+mySuit
    document.getElementById("musuh").innerHTML = 'Musuh : '+enemy[ai]
    console.log('Kamu Kalah!');
    console.log('Kamu : '+mySuit);
    console.log('Musuh : '+enemy[ai]);
}else if (mySuit == 'kertas' && ai == 2) {
     document.getElementById("result").innerHTML = 'Seri!';
    document.getElementById("mySuit").innerHTML = 'Kamu : '+mySuit
    document.getElementById("musuh").innerHTML = 'Musuh : '+enemy[ai]
    console.log('Seri!');
    console.log('Kamu : '+mySuit);
    console.log('Musuh : '+enemy[ai]);
}else if (mySuit == 'kertas' && ai == 0) {
     document.getElementById("result").innerHTML = 'Kamu Menang!';
    document.getElementById("mySuit").innerHTML = 'Kamu : '+mySuit
    document.getElementById("musuh").innerHTML = 'Musuh : '+enemy[ai]
    console.log('kamu Menang!');
    console.log('Kamu : '+mySuit);
    console.log('Musuh : '+enemy[ai]);
}else{
    document.getElementById("result").innerHTML = 'harap pilih kertas, gunting, batu';
    console.log('harap pilih kertas, gunting, batu');
}