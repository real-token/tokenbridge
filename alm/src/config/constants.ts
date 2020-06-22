export const HOME_BRIDGE_ADDRESS: string = process.env.REACT_APP_COMMON_HOME_BRIDGE_ADDRESS || ''
export const FOREIGN_BRIDGE_ADDRESS: string = process.env.REACT_APP_COMMON_FOREIGN_BRIDGE_ADDRESS || ''

export const HOME_RPC_URL: string = process.env.REACT_APP_COMMON_HOME_RPC_URL || ''
export const FOREIGN_RPC_URL: string = process.env.REACT_APP_COMMON_FOREIGN_RPC_URL || ''

export const HOME_NETWORK_NAME: string = process.env.REACT_APP_ALM_HOME_NETWORK_NAME || ''
export const FOREIGN_NETWORK_NAME: string = process.env.REACT_APP_ALM_FOREIGN_NETWORK_NAME || ''

export const HOME_EXPLORER_TX_TEMPLATE: string = process.env.REACT_APP_ALM_HOME_EXPLORER_TX_TEMPLATE || ''
export const FOREIGN_EXPLORER_TX_TEMPLATE: string = process.env.REACT_APP_ALM_FOREIGN_EXPLORER_TX_TEMPLATE || ''

export const HOME_RPC_POLLING_INTERVAL: number = 5000
export const FOREIGN_RPC_POLLING_INTERVAL: number = 15000
export const BLOCK_RANGE: number = 50

export const TRANSACTION_STATUS = {
  SUCCESS_MULTIPLE_MESSAGES: 'SUCCESS_MULTIPLE_MESSAGES',
  SUCCESS_ONE_MESSAGE: 'SUCCESS_ONE_MESSAGE',
  SUCCESS_NO_MESSAGES: 'SUCCESS_NO_MESSAGES',
  FAILED: 'FAILED',
  NOT_FOUND: 'NOT_FOUND'
}

export const CONFIRMATIONS_STATUS = {
  SUCCESS: 'SUCCESS',
  SUCCESS_MESSAGE_FAILED: 'SUCCESS_MESSAGE_FAILED',
  EXECUTION_FAILED: 'EXECUTION_FAILED',
  EXECUTION_PENDING: 'EXECUTION_PENDING',
  EXECUTION_WAITING: 'EXECUTION_WAITING',
  FAILED: 'FAILED',
  PENDING: 'PENDING',
  WAITING: 'WAITING',
  UNDEFINED: 'UNDEFINED'
}

export const VALIDATOR_CONFIRMATION_STATUS = {
  SUCCESS: 'Success',
  FAILED: 'Failed',
  PENDING: 'Pending',
  WAITING: 'Waiting',
  NOT_REQUIRED: 'Not required',
  UNDEFINED: 'UNDEFINED'
}
