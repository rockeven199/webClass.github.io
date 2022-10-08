function navBar(DomEle) {
    // 判断元素1点击还是元素2点击
    if (DomEle.classList.contains("nav-part-title")) {
        // 判断类是不是第一次增加
        if (!DomEle.classList.contains("animate__slideOutup")&&!DomEle.classList.contains("animate__slideInDown")) {
            DomEle.nextElementSibling.style.zIndex = "9";
            DomEle.classList.add("animate__slideOutUp");
            DomEle.nextElementSibling.classList.add("animate__slideInDown");
        }else{
            DomEle.nextElementSibling.style.zIndex="9";
            DomEle.classList.replace("animate__slideInDown","animate__slideOutUp");
            DomEle.nextElementSibling.classList.replace("animate__slideOutUp","animate__slideInDown");
        }
    }else{
        DomEle.previousElementSibling.classList.replace("animate__slideOutUp","animate__slideInDown");
        DomEle.classList.replace("animate__slideInDown","animate__slideOutUp");
    }
}