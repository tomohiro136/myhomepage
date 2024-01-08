'use strict';

{

    // 今日の日時についてここから
      // JavaScriptを使って本日の日付を取得する
      let today = new Date();
      let year = today.getFullYear();
      let month = today.getMonth() + 1; // 0から始まるため+1する
      let day = today.getDate();

      // 日付をHTML要素に表示する
      let dateElement = document.getElementById("date");
      dateElement.innerHTML = year + "年" + month + "月" + day + "日";

    // 今日の日時についてここまで


    // 今日の時間についてここから
    function showTime() {
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        minutes = checkTime(minutes);
        seconds = checkTime(seconds);
    
        document.getElementById('time').innerHTML = hours + ":" + minutes + ":" + seconds;
        setTimeout(showTime, 1000);
    }
    
    function checkTime(i) {
        if (i < 10) {i = "0" + i};
        return i;
    }
    
    showTime();
    
    // 今日の時間についてここまで

    // ハンバーガーメニュー
    const open =document.getElementById('open');
    const overlay =document.querySelector('.over-lay');
    const close =document.getElementById('close');

    open.addEventListener('click',() => {
        overlay.classList.add('show');
        open.classList.add('hide');
    });

    close.addEventListener('click',() => {
        overlay.classList.remove('show');
        open.classList.remove('hide');
    });

    class Score{
        constructor(subject,result){
            this.subject=subject;
            this.result=result;
        }
    }


    class User{

        constructor(name,score){
            this.name =name;
            this.score=score;        
        }

        getuserString(){
            return `${this.name} ${this.score}`;
        }

    }

    const user1 =new User('Taro',new Score(`math`,70));
    const user2 =new User('JIRO',new Score(`Englsih`,80));



    console.log(user1.getuserString());
    console.log(user2.getuserString());
  

    
}
