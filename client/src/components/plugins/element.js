import {
  Container,
  Header,
  Aside,
  Main,
  Menu,
  Submenu,
  MenuItem,
  TableColumn,
  Table,
  Button,
  Dialog,
  Form,
  Input,
  Select,
  Option,
  FormItem,
  Tag,
  Collapse,
  CollapseItem
} from 'element-ui'

const EleComp = {
  Container,
  Header,
  Aside,
  Main,
  Menu,
  Submenu,
  MenuItem,
  TableColumn,
  Table,
  Button,
  Dialog,
  Form,
  Input,
  Select,
  Option,
  FormItem,
  Tag,
  Collapse,
  CollapseItem
}

export default (Vue) => {
  for(let c of Object.keys(EleComp)) {
    Vue.use(EleComp[c])
  }
}