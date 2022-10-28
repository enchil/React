import Counter from './ex-1025-2/Counter'
import JsxValue from './ex-1026-1/JsxValue'
import StudentList from './ex-1026-2/StudentList'
import Menu from './pratice/Q1/Menu'
import Demo from './ex-1026-3/Demo'
import Parent from './ex-1027-1/Parent'
import ParentPropTypes from './ex-1027-2/Parent'
import ParentFlow from './ex-1027-3/Parent'

export const examples = [
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
  {
    name: 'pratice 練習Ｑ1',
    path: './pratice/Q1/Menu',
    component: Menu,
  },
  {
    name: '1026-3 Demo',
    path: './ex-1026-3/Demo',
    component: Demo,
  },
]
