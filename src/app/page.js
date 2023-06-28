// `app/page.js` is the UI for the `/` URL
import Button from '@/app/components/Search'
import {search} from './functions'
export default function Page() {
  return <><Button {...{search}}/></>
}