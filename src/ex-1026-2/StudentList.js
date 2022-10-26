import { data } from './data/student'

//json檔案導入時會自動轉成js的資料類型
import jsonData from './data/student.json'

function StudentList() {
  console.log(jsonData)
  return (
    <>
      <h1>學生資料清單</h1>
      <ul>
      {/* key值的選擇：
      1. 資料來自資料庫，優先使用資料庫中的key當key值
      2. 資料非來自資料庫，可以在資料初始化時使用uuid來產生key值，
      注意：不要寫在return中，再一引進來時就加key值 
      3. 資料為靜態資料(不會更動)，可以用索引值當key值
      */}
        {jsonData.map((v, i) => {
          return <li key={v.id}>{v.name}</li>
        })}
      </ul>
    </>
  )
}

export default StudentList
