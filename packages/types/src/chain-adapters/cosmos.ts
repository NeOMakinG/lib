export type BuildTxInput = {
  gas: string
  fee: string
}

export enum TransactionType {
  Send = 'MsgSend',
  Delegate = 'MsgDelegate'
}

export type Account = {
  sequence: string
  accountNumber: string
}

export type FeeData = {
  gasLimit: string
}
