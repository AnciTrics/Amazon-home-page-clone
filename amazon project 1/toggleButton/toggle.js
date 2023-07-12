
var outer = document.getElementById('toggle-outter');
var inner = document.getElementById('toggle-inner');
var body = document.getElementsByTagName('body')[0];
var para = document.getElementById('id');
var count = 2;
function trans(){
    if(count % 2 == 0){
    outer.style.backgroundImage = "url('space-3262811_640.jpg')";
    inner.style.backgroundColor = '#E7CEA6';
    outer.style.boxShadow = '0px 0px 3px #5A96E3';
    inner.style.boxShadow = '0px 0px 5px #A1C2F1';
    inner.style.left = '64px';
    para.style.color ='white';
    para.style.transition= 'all 0.5 ease-in-out'
    inner.style.transition = 'all 0.5s ease-in-out'
    outer.style.transition = 'all 0.5s ease-in-out'
    body.style.backgroundColor = 'black';
    body.style.transition = 'all 0.5s ease-in-out'
    }else{
        outer.style.backgroundImage = "url('moon-6374508_640.jpg')";
        inner.style.backgroundColor = '#0A6EBD';
        outer.style.boxShadow = '0px 0px 5px #A1C2F1';
        inner.style.boxShadow = '0px 0px 3px #5A96E3';
        inner.style.left = '4px';
        para.style.color ='black';
        para.style.transition= 'all 0.5 ease-in-out'
        inner.style.transition = 'all 0.5s ease-in-out'
        outer.style.transition = 'all 0.5s ease-in-out'
        body.style.backgroundColor = 'white';
        body.style.transition = 'all 0.5s ease-in-out'
    }
count++;
}
outer.addEventListener('click',trans);