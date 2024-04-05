import { ToDo } from './models/ToDo.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Quote, Temperature } from './models/DataModels.js'

class ObservableAppState extends EventEmitter {

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null

  /** @type {ToDo[]} */
  toDos = []

  /** @type {Quote} */
  activeQuote = null

  /** @type {Temperature} */
  activeTemp = null
}

export const AppState = createObservableProxy(new ObservableAppState())