let input = document.querySelector('#input');
let list = document.querySelector('#list');

input.addEventListener('keypress', function(event) {
	if (event.key == 'Enter') {
		let li = document.createElement('li');
		
		let task = document.createElement('span');
		task.classList.add('task');
		task.textContent = this.value;
        input.value = '';
		task.addEventListener('dblclick', function() {
			let text = this.textContent;
			this.textContent = '';
			
			let edit = document.createElement('input');
			edit.value = text;
			this.appendChild(edit);
			
			let self = this;
			edit.addEventListener('keypress', function(event) {
				if (event.key == 'Enter') {
					self.textContent = this.value;
				}
			});
		});
		li.appendChild(task);
		
		let remove = document.createElement('span');
		remove.classList.add('remove');
		remove.textContent = 'удалить';
        remove.addEventListener('click', function() {
            li.textContent = ``
        });
		
		
		let mark = document.createElement('span');
		mark.classList.add('mark');
		mark.textContent = 'сделано';
        mark.addEventListener('click', function() {
            li.style.color = `green`
        });
		li.appendChild(mark);
		li.appendChild(task);
		list.appendChild(li);
        li.appendChild(remove);
       

	} 
});







let images = ["1.png", '2.png', '3.png']
let slider = document.querySelector(`#slider`)
let img = slider.querySelector(`img`)
let i = 0
img.src = `images/` + images[0]
let timerId = setInterval(function func() { 
    img.src = `images/` + images[i]
        i++; 
if(i >= 3){ 
    i = 0 
}else if(i < 0){
    i = 0 
}
}, 2000); 
 
 
left.addEventListener('click', function() { 
    if(i == 0){ 
        i = 1 
    }else if(i == 1){
        i = 2 
    }else if(i == 2){
        i = 0 
    }
}); 
right.addEventListener('click', function() { 
    if(i == 0){ 
        i = 2 
    }else if(i == 1){
        i = 0 
    }else if(i == 2){
        i = 1 
    } 
});




let check = document.querySelector(`#check`)

let answers = [`я`, `учитель`, `университет`]

check.addEventListener(`click`, function(){
    let wqizs = document.querySelectorAll(`#test input`)

    let j = 0
    for (let wqiz of wqizs){
        if(wqiz.value == answers[j]){
        wqiz.classList.add(`right`)
    }else {
        wqiz.classList.add(`wrong`)
    }
    j++
    }
})






























let ru = document.querySelector(`#ru`);
let jp = document.querySelector(`#jp`);
let trn = document.querySelector(`#go`);
trn.addEventListener(`click`, (obj)=>{
     obj = {
        идти: '行く(いきます)',
        я: '私(わたし)',//1tom
        ты: `あなた`,
        учитель: "先生(せんせい)",
        студунт: "学生(がくせい)",
        работник: `会社員(かいしゃいん)`,
        банкир: `銀行員   ぎんこいん`,
        врач: `医者  いしゃ`,
        учёный: `研究者  けんきゆうしや`,
        инжинер: `エンジニア`,
        университет: `大学  たいがく`,
        больница: `病院  びょういん`,
        эдектричество: `電気  でんき`,
        кто: `たれ`,
        да: `はい`,
        нет: `いいえ`,
    }
   
 
 
jp.value = obj[ru.value]

})
document.querySelector("img[src='294685464211211.jpg']").click()











































        // if(ru.value == `идти`){
    //     jp.value = `行く(いきます)`
    // }
    // if(ru.value == `я`){
    //     jp.value = `私(わたし)`
    // }
    // if(ru.value == `мы`){
    //     jp.value = `私(わたし)`
    // }
    // if(ru.value == `ты`){
    //     jp.value = `あなた`
    // }
    // if(ru.value == `я`){
    //     jp.value = `私(わたし)`
    // }
    // if(ru.value == `я`){
    //     jp.value = `私(わたし)`
    // }
    // if(ru.value == `я`){
    //     jp.value = `私(わたし)`
    // }
    // if(ru.value == `я`){
    //     jp.value = `私(わたし)`
    // }
    // if(ru.value == `я`){
    //     jp.value = `私(わたし)`
    // }
    // if(ru.value == `я`){
    //     jp.value = `私(わたし)`
    // }
    // if(ru.value == `я`){
    //     jp.value = `私(わたし)`
    // }
