let mySuit = prompt('Pilih suit : batu, gunting, kertas')
let enemy = ['batu','gunting','kertas']
let ai = Math.floor(Math.random() * 3)
console.log('created by ariefafn');
if (mySuit == 'batu' && ai == 1) {
    console.log('Kamu Menang!');
    console.log('Kamu : '+mySuit);
    console.log('Musuh : '+enemy[ai]);
}else if (mySuit == 'batu' && ai == 2) {
    console.log('Kamu Kalah!');
    console.log('Kamu : '+mySuit);
    console.log('Musuh : '+enemy[ai]);
}else if (mySuit == 'batu' && ai == 0) {
    console.log('Seri!');
    console.log('Kamu : '+mySuit);
    console.log('Musuh : '+enemy[ai]);
}else if (mySuit == 'gunting' && ai == 1) {
    console.log('Seri!');
    console.log('Kamu : '+mySuit);
    console.log('Musuh : '+enemy[ai]);
}else if (mySuit == 'gunting' && ai == 2) {
    console.log('Kamu Menang!');
    console.log('Kamu : '+mySuit);
    console.log('Musuh : '+enemy[ai]);
}else if (mySuit == 'gunting' && ai == 0) {
    console.log('kamu Kalah!');
    console.log('Kamu : '+mySuit);
    console.log('Musuh : '+enemy[ai]);
}else if (mySuit == 'kertas' && ai == 1) {
    console.log('Kamu Kalah!');
    console.log('Kamu : '+mySuit);
    console.log('Musuh : '+enemy[ai]);
}else if (mySuit == 'kertas' && ai == 2) {
    console.log('Seri!');
    console.log('Kamu : '+mySuit);
    console.log('Musuh : '+enemy[ai]);
}else if (mySuit == 'kertas' && ai == 0) {
    console.log('kamu Menang!');
    console.log('Kamu : '+mySuit);
    console.log('Musuh : '+enemy[ai]);
}else{
    console.log('harap pilih kertas, gunting, batu');
}