function addItem (name, image, content) { 
    const div = document.createElement("div");
    /*div 요소 노드를 만들어줌*/
    div.classList.add("item");
    /*item이라는 클래스를 추가함*/
    div.innerHTML = `
            <img src="${image}" alt="${name}" />
            <span>${content}</span>
        `;
    /*item안에 넣을 이미지와 내용을 넣어줌*/
    document.getElementById("container").appendChild(div);
    /*item에 이미지, 내용 넣기 완료*/

    const span = document.createElement("span");
    /*변수 span에 span 요소 추가*/
    span.innerHTML = name;
    /*span에 넣을 내용을 알려줌*/
    document.getElementById("sidebar").appendChild(span); /*sidebar에 새 컨텐츠의 이름 추가 완료*/
}

function addItemHandle(e) {
    e.preventDefault(); /*submit을 눌렀을 때 창이 새로고침 되는 것을 막아준다.*/
    const name = document.getElementById("name").value;
    const image = document.getElementById("image").value;
    const content = document.getElementById("content").value;
    /*폼에 입력된 name, image, content 값을 addItem으로 전달하기 위해 변수할당.*/
    addItem(name, image, content);
    closeModal();   
}

document.getElementById("modal").addEventListener("submit", addItemHandle); 
/*submitbtn을 click하는 이벤트가 생기면 addItemHandle을 실행한다.*/
