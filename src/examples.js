import Counter from './ex-1025-2/Counter'
import JsxValue from './ex-1026-1/JsxValue'
import StudentList from './ex-1026-2/StudentList'
//import Menu from './pratice/Q1/Menu'
import Demo from './ex-1026-3/Demo'
import Parent from './ex-1027-1/Parent'
import ParentPropTypes from './ex-1027-2/Parent'
import ParentFlow from './ex-1027-3/Parent'
import InputDemo from './ex-1028-1/InputDemo'
import HTML5Form from './ex-1028-2/HTML5Form'
import BMI from './ex-1031-1/BMI'
import BirthSelect from './ex-1031-2/BirthSelect'
import TodoApp from './ex-1031-3/TodoApp'
import TodoApphard from './ex-1031-3/TodoApphard'
import TodoAppclean from './ex-1031-3/TodoAppclean'
import MultipleInput from './ex-1101-1/MultipleInput'
import HTML5ValidForm from './ex-1102-1/HTML5ValidForm'
import Lifecycle from './ex-1102-2/Lifecycle'
import User from './ex-1102-3/User'
import FileUploadSample from './ex-1102-4/FileUploadSample'
import ImageDemo from './ex-1103-1/ImageDemo'
import UserDemo from './ex-1103-2/UserDemo'
import UserPage from './ex-1104-1/UserPage'
import BS5Test from './ex-1104-2/BS5Text'

export const examples = [
  {
    name: '1104-2 Bootstrap5 測試',
    path: './ex-1104-2/BS5Text',
    component: BS5Test,
  },
  {
    name: '1104-1 User從伺服載入資料-分頁',
    path: './ex-1104-1/UserPage',
    component: UserPage,
  },
  {
    name: '1103-2 從伺服器載入資料 分頁 搜尋',
    path: './ex-1103-2/UserDemo',
    component: UserDemo,
  },
  {
    name: '1103-1 圖片使用說明',
    path: './ex-1103-1/ImageDemo',
    component: ImageDemo,
  },
  {
    name: '1102-4 圖檔上傳到伺服器',
    path: './ex-1102-4/FileUploadSample',
    component: FileUploadSample,
  },
  {
    name: '1102-3 從伺服器載入資料',
    path: './ex-1102-3/User',
    component: User,
  },
  {
    name: '1102-2 生命週期方法',
    path: './ex-1102-2/Lifecycle',
    component: Lifecycle,
  },
  {
    name: '1102-1 HTML5表單驗證',
    path: './ex-1102-1/HTML5ValidForm',
    component: HTML5ValidForm,
  },
  {
    name: '1101-1 多個表單元素共用一個state',
    path: './ex-1101-1/MultipleInput',
    component: MultipleInput,
  },
  {
    name: '1031-4 Todo List clean 拆元件整理',
    path: './ex-1031-3/TodoAppclean',
    component: TodoAppclean,
  },
  {
    name: '1031-3 Todo List hard 可編輯儲存',
    path: './ex-1031-3/TodoApphard',
    component: TodoApphard,
  },
  {
    name: '1031-3 Todo List',
    path: './ex-1031-3/TodoApp',
    component: TodoApp,
  },
  {
    name: '1031-2 作業 出生年月日下拉式選單',
    path: './ex-1031-2/BirthSelect',
    component: BirthSelect,
  },
  {
    name: '1031-1 作業 BMI計算表單',
    path: './ex-1031-1/BMI',
    component: BMI,
  },
  {
    name: '1028-2 各種可控表單元件',
    path: './ex-1028-2/HTML5Form',
    component: HTML5Form,
  },
  {
    name: '1028-1 可控不可控Demo',
    path: './ex-1028-1/InputDemo',
    component: InputDemo,
  },
  {
    name: '1027-3 ParentFlow三種資料流',
    path: './ex-1027-3/Parent',
    component: ParentFlow,
  },
  {
    name: '1027-2 PropTypes屬性',
    path: './ex-1027-2/Parent',
    component: ParentPropTypes,
  },
  {
    name: '1027-1 prop屬性',
    path: './ex-1027-1/Parent',
    component: Parent,
  },
  {
    name: 'ex-1025-2 計數器',
    path: './ex-1025-2/Counter',
    component: Counter,
  },
  {
    name: '1026-1 JsxValue 表達式',
    path: './ex-1026-1/JsxValue',
    component: JsxValue,
  },
  {
    name: '1026-2 學生列表清單',
    path: './ex-1026-2/StudentList',
    component: StudentList,
  },
  // {
  //   name: 'pratice 練習Ｑ1',
  //   path: './pratice/Q1/Menu',
  //   component: Menu,
  // },
  {
    name: '1026-3 Demo',
    path: './ex-1026-3/Demo',
    component: Demo,
  },
]
