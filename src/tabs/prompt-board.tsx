import '@assets/styles/base.scss'
import 'react-toastify/dist/ReactToastify.css'

import {ToastContainer} from 'react-toastify'
import css from 'styled-jsx/css'

import {ROUTE} from '@/config'
import useConfig from '@/hooks/use-config'
import {withAIContext} from '@/components/with-ai-context'

import EntryPanel from './prompt-board/entry-panel'
import PresetPanel from './prompt-board/preset-panel'
import CustomPanel from './prompt-board/custom-panel'

const PANEL = {
  [ROUTE.PROMPT_BOARD_ENTRY_PANEL]: EntryPanel,
  [ROUTE.PROMPT_BOARD_PRESET_PANEL]: PresetPanel,
  [ROUTE.PROMPT_BOARD_CUSTOM_PANEL]: CustomPanel,
}

export default withAIContext(function Index() {
  const {config} = useConfig()

  const Panel = PANEL[config.latestRoute]
  return (
    <div className="container">
      <Panel />
      <ToastContainer limit={1} />

      <style jsx>{styles}</style>
      <style jsx global>
        {globalStyles}
      </style>
    </div>
  )
})

const styles = css`
  .container {
    position: relative;
    width: 400px;
    padding: 20px;
    background-color: #f7f3ea;
    transform: translate3d(0, 0, 0);
  }
`

const globalStyles = css.global`
  .svg-icon:hover * {
    fill: #000;
  }
`
