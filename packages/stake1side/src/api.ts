import { HDWallet } from '@shapeshiftoss/hdwallet-core'

// for chains like osmosis that take time to unstake
export type PendingInfo = {
  timeInitiated: string
  completionTimeEstimate: string
  amount: string
  txid: string
}

export type StakingInfo = {
  stakedAmount: string
  rewardAmount: string
  apr: number
  // for chains like osmosis that take time to unstake
  pendingUnstakes?: PendingInfo[]
}

export type StakeActionInput = {
  amount: string
  wallet: HDWallet
  addressNList: number[] // maybe this shouldnt be addressNList?
}

export interface Staker {
  stake(input: StakeActionInput): Promise<string>
  unstake(input: StakeActionInput): Promise<string>
  claim(input: StakeActionInput): Promise<string>
  getInfo(address: string): Promise<StakingInfo>
}
