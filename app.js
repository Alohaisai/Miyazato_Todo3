// console.log(localStorage);
let data = [];

// 2回目に読み込むとき
if(localStorage.getItem('task')){
  // ローカルストレジに保存したデータを取得
  data = JSON.parse(localStorage.getItem('task'));
}

// クリックイベント
document.getElementById('add').addEventListener('click',
  function(){
    data.push(document.getElementById('task').value);
    createDOM(document.getElementById('task').value);
    localStorage.setItem('task', JSON.stringify(data));
    //タスクのvalueを初期化
    task.value= '';
  }
);

// dataに格納されたHTMLを描画する
for (const value of data) {
  // HTMLを追加する関数を実行
  createDOM(value);
}

// HTMLを追加する関数
function createDOM( value ){
  // liタグを作成
  let list = document.createElement('li');
  // リストタグ内にvalueを格納
  list.textContent = value;

  let button = document.createElement('button');
  button.textContent = '削除';
  list.appendChild(button);

  console.log(list);

  button.addEventListener('click', function(){
    this.parentNode.remove();
    // クリックした文字列に該当する配列を削除
    // 削除の文字が邪魔なのでelement.slice( 0, -2 ) 最後から二文字削除
    // 配列を削除　splice
    data.splice(data.indexOf(this.parentNode.textContent.slice( 0, -2 )), 1);
    //データを再度保存
    localStorage.setItem('task', JSON.stringify(data));
  })
  // listの子要素として追加
  document.getElementById('list').appendChild(list);
}