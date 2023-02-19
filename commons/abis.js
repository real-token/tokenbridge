const HOME_ERC_TO_NATIVE_ABI = require('../contracts/artifacts/contracts/upgradeable_contracts/erc20_to_native/HomeBridgeErcToNative.sol/HomeBridgeErcToNative.json').abi
const FOREIGN_ERC_TO_NATIVE_ABI = require('../contracts/artifacts/contracts/upgradeable_contracts/erc20_to_native/XDaiForeignBridge.sol/XDaiForeignBridge.json').abi
const ERC20_ABI = require('../contracts/artifacts/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol/ERC20.json').abi
const BLOCK_REWARD_ABI = require('../contracts/artifacts/contracts/mocks/BlockRewardMock.sol/BlockRewardMock.json').abi
const BRIDGE_VALIDATORS_ABI = require('../contracts/artifacts/contracts/upgradeable_contracts/BridgeValidators.sol/BridgeValidators.json').abi
const REWARDABLE_VALIDATORS_ABI = require('../contracts/artifacts/contracts/upgradeable_contracts/RewardableValidators.sol/RewardableValidators.json').abi
const HOME_AMB_ABI = require('../contracts/artifacts/contracts/upgradeable_contracts/arbitrary_message/HomeAMB.sol/HomeAMB.json').abi
const FOREIGN_AMB_ABI = require('../contracts/artifacts/contracts/upgradeable_contracts/arbitrary_message/ForeignAMB.sol/ForeignAMB.json').abi
const BOX_ABI = require('../contracts/artifacts/contracts/mocks/Box.sol/Box.json').abi
const HOME_AMB_ERC_TO_ERC_ABI = require('../contracts/artifacts/contracts/upgradeable_contracts/amb_erc677_to_erc677/HomeAMBErc677ToErc677.sol/HomeAMBErc677ToErc677.json').abi
const FOREIGN_AMB_ERC_TO_ERC_ABI = require('../contracts/artifacts/contracts/upgradeable_contracts/amb_erc677_to_erc677/ForeignAMBErc677ToErc677.sol/ForeignAMBErc677ToErc677.json').abi

const { BRIDGE_MODES } = require('./constants')

const OLD_AMB_USER_REQUEST_FOR_SIGNATURE_ABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: 'encodedData',
        type: 'bytes'
      }
    ],
    name: 'UserRequestForSignature',
    type: 'event'
  }
]

const OLD_AMB_USER_REQUEST_FOR_AFFIRMATION_ABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: 'encodedData',
        type: 'bytes'
      }
    ],
    name: 'UserRequestForAffirmation',
    type: 'event'
  }
]

function getBridgeABIs(bridgeMode) {
  let HOME_ABI = null
  let FOREIGN_ABI = null
  if (bridgeMode === BRIDGE_MODES.ERC_TO_NATIVE) {
    HOME_ABI = HOME_ERC_TO_NATIVE_ABI
    FOREIGN_ABI = FOREIGN_ERC_TO_NATIVE_ABI
  } else if (bridgeMode === BRIDGE_MODES.ARBITRARY_MESSAGE) {
    HOME_ABI = HOME_AMB_ABI
    FOREIGN_ABI = FOREIGN_AMB_ABI
  } else if (bridgeMode === BRIDGE_MODES.AMB_ERC_TO_ERC) {
    HOME_ABI = HOME_AMB_ERC_TO_ERC_ABI
    FOREIGN_ABI = FOREIGN_AMB_ERC_TO_ERC_ABI
  } else {
    throw new Error(`Unrecognized bridge mode: ${bridgeMode}`)
  }

  return { HOME_ABI, FOREIGN_ABI }
}

module.exports = {
  getBridgeABIs,
  HOME_ERC_TO_NATIVE_ABI,
  FOREIGN_ERC_TO_NATIVE_ABI,
  ERC20_ABI,
  BLOCK_REWARD_ABI,
  BRIDGE_VALIDATORS_ABI,
  REWARDABLE_VALIDATORS_ABI,
  HOME_AMB_ABI,
  FOREIGN_AMB_ABI,
  OLD_AMB_USER_REQUEST_FOR_AFFIRMATION_ABI,
  OLD_AMB_USER_REQUEST_FOR_SIGNATURE_ABI,
  BOX_ABI
}
