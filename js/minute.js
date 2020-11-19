// 定数の設定
let i = 0;
// localStorage.clear(); // localstorageの中を全てを削除

$(function () {
   //0.Enterキーで次々保存
   $('#text_area').keypress(function (e) {
      if (e.which == 13) {
         //時刻情報の取得
         const date = new Date();
         const year = date.getFullYear();
         const month = date.getMonth();
         const day = date.getDate();
         const hour = date.getHours();
         const minutes = date.getMinutes();
         const seconds = date.getSeconds();
         const time = `${hour}:${minutes}:${seconds}`;
         console.log(time);

         const data = {
            //title, text を配列に格納
            title: $('#input').val(), //.val()でtitle取得
            text: $('#text_area').val(),
         };
         const jsonData = JSON.stringify(data); //配列をJSONdata(文字列)変換
         localStorage.setItem('memo' + i, time + ' ' + jsonData); // localstorageに保存
         //   localStorage.setItem(time, jsonData); // localstorageに保存→keyを時刻にしてみる
         i++; //key名の末尾＋１
         const title = $('#input').val(''); // .val('')で上書き
         const text = $('#text_area').val(''); // テキストエリア削除　.val('')で上書き

         return false;
      }
   });

   $('#text_area').keypress(function (e) {
      if (event.ctrlKey) {
         if (e.which == 49) {
            //発言者情報の取得
            const talker = $('#member1').val();

            //この分岐、ORでやって更にif,caseを重ねようとすると、2回目のifの中で終わってしまう。できないか？
            //    if (e.which == 49||e.which == 50||e.which == 51||e.which == 52) {
            //   switch (e.which) {
            //     case 49:
            //        const talker = $('#member1').val();
            //        break;
            //     case 50:
            //        const talker = $('#member2').val();
            //        break;
            //     case 51:
            //        const talker = $('#member3').val();
            //        break;
            //     case 52:
            //        const talker = $('#member4').val();
            //        break;
            //    }

            //時刻情報の取得
            const date = new Date();
            const year = date.getFullYear();
            const month = date.getMonth();
            const day = date.getDate();
            const hour = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();
            const time = `${hour}:${minutes}:${seconds}`;
            console.log(time);

            //.val()でtext取得
            const data = $('#text_area').val();

            const jsonData = JSON.stringify(data); //配列をJSONdata(文字列)変換
            localStorage.setItem('memo' + i, time + ' ' + talker + ' ' + jsonData); // localstorageに保存
            i++; //key名の末尾＋１
            //  const title = $('#input').val(''); // .val('')で上書き
            const text = $('#text_area').val(''); // テキストエリア削除　.val('')で上書き

            return false;
         } else if (e.which == 50) {
            //発言者情報の取得
            const talker = $('#member2').val();

            //時刻情報の取得
            const date = new Date();
            const year = date.getFullYear();
            const month = date.getMonth();
            const day = date.getDate();
            const hour = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();
            const time = `${hour}:${minutes}:${seconds}`;
            console.log(time);

            //.val()でtext取得
            const data = $('#text_area').val();

            const jsonData = JSON.stringify(data); //配列をJSONdata(文字列)変換
            localStorage.setItem('memo' + i, time + ' ' + talker + ' ' + jsonData); // localstorageに保存
            i++; //key名の末尾＋１
            //  const title = $('#input').val(''); // .val('')で上書き
            const text = $('#text_area').val(''); // テキストエリア削除　.val('')で上書き

            return false;
         } else if (e.which == 51) {
            //発言者情報の取得
            const talker = $('#member3').val();

            //時刻情報の取得
            const date = new Date();
            const year = date.getFullYear();
            const month = date.getMonth();
            const day = date.getDate();
            const hour = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();
            const time = `${hour}:${minutes}:${seconds}`;
            console.log(time);

            //.val()でtext取得
            const data = $('#text_area').val();

            const jsonData = JSON.stringify(data); //配列をJSONdata(文字列)変換
            localStorage.setItem('memo' + i, time + ' ' + talker + ' ' + jsonData); // localstorageに保存
            i++; //key名の末尾＋１
            //  const title = $('#input').val(''); // .val('')で上書き
            const text = $('#text_area').val(''); // テキストエリア削除　.val('')で上書き

            return false;
         } else if (e.which == 52) {
            //発言者情報の取得
            const talker = $('#member4').val();

            //時刻情報の取得
            const date = new Date();
            const year = date.getFullYear();
            const month = date.getMonth();
            const day = date.getDate();
            const hour = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();
            const time = `${hour}:${minutes}:${seconds}`;
            console.log(time);

            //.val()でtext取得
            const data = $('#text_area').val();

            const jsonData = JSON.stringify(data); //配列をJSONdata(文字列)変換
            localStorage.setItem('memo' + i, time + ' ' + talker + ' ' + jsonData); // localstorageに保存
            i++; //key名の末尾＋１
            //  const title = $('#input').val(''); // .val('')で上書き
            const text = $('#text_area').val(''); // テキストエリア削除　.val('')で上書き

            return false;
         }
      }
   });

   //1.Save クリックイベント　※出席者情報登録
   $('#save1').on('click', function () {
      // saveボタンクリックイベント
      const data = {
         //出席者情報をを配列に格納
         list1: $('#member1').val(), //.val()でmember情報取得
         list2: $('#member2').val(), //.val()でmember情報取得
         list3: $('#member3').val(), //.val()でmember情報取得
         list4: $('#member4').val(), //.val()でmember情報取得
      };
      const jsonData = JSON.stringify(data); //配列をJSONdata(文字列)変換
      localStorage.setItem('member_list_storage', jsonData); // localstorageに保存
      //   const title = $('#input').val(''); // .val('')で上書き
      //   const text = $('#text_area').val(''); // テキストエリア削除　.val('')で上書き
   });

   //    //1-2.load クリックイベント ※出席者情報のみ
   $('#load1').on('click', function () {
      // clearボタンクリックイベント
      if (localStorage.getItem('member_list_storage')) {
         const jsonData = localStorage.getItem('member_list_storage');
         const data = JSON.parse(jsonData);
         const list1 = $('#member1').val(data.list1); // .val('')で上書き
         const list2 = $('#member2').val(data.list2); // .val('')で上書き
         const list3 = $('#member3').val(data.list3); // .val('')で上書き
         const list4 = $('#member4').val(data.list4); // .val('')で上書き
      }
   });

   //2.clear クリックイベント(入力画面のみ)
   $('#clear').on('click', function () {
      // clearボタンクリックイベント
      const list1 = $('#member1').val(''); // .val('')で上書き
      const list2 = $('#member2').val(''); // .val('')で上書き
      const list3 = $('#member3').val(''); // .val('')で上書き
      const list4 = $('#member4').val(''); // .val('')で上書き
      const text = $('#text_area').val(''); // .val('')で上書き
   });

   //2.All clear クリックイベント(localStorageもクリア)
   $('#clear_all').on('click', function () {
      // clearボタンクリックイベント
      localStorage.clear(); // localstorageの中を全てを削除
      //   localStorage.removeItem('memo1'); // localstorageのmemoを削除
      const list1 = $('#member1').val(''); // .val('')で上書き
      const list2 = $('#member2').val(''); // .val('')で上書き
      const list3 = $('#member3').val(''); // .val('')で上書き
      const list4 = $('#member4').val(''); // .val('')で上書き
      const text = $('#text_area').val(''); // .val('')で上書き
      i = 0; //keyのカウントリセット
   });

   //3.ページ読み込み：保存データ取得表示
   if (localStorage.getItem('memo1')) {
      const jsonData = localStorage.getItem('memo1');
      const data = JSON.parse(jsonData);
      console.log(data);
      console.log(jsonData);
      const title = $('#input').val(data.title); //
      const text = $('#text_area').val(data.text); //
   }
});

// let t = 0;
// let out; //配列を長さの定義なく,あとから編集する用においておくには？
// $('#output').on('click', function () {
//    // outputボタンクリックイベント(議事録データ出力)
//    // 一回jasonDataに配列として保存した後に、それらを出力すればよい？JSONdataをまんま出力すればよい？
//    if (localStorage.getItem('memo1')) {

//       });
//       const jsonData = localStorage.getItem('member_list_storage');
//       const data = JSON.parse(jsonData);
//    }
// });

var select = document.getElementById('js-speaker-select');
select.onchange = function () {
   const num = select.value;
   $('#speakerOutput').html(num);
   console.log(num);
};
