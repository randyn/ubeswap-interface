import { LightQuestionHelper } from 'components/QuestionHelper'
import { RowBetween, RowFixed } from 'components/Row'
import React from 'react'
import { TYPE } from 'theme'

export interface PoolRewardProps {
  helperText?: React.ReactNode
  statName: string
  statValue?: string
}

enum PoolStatTypes {
  TOTAL_DEPOSITED,
  UBE_REWARD_RATE,
  DUAL_REWARD_RATE,
  APR,
  NEXT_RATE,
  USER_RATE,
  USER_STAKE,
}

interface PoolStat {
  helperText?: string
  type: PoolStatTypes
  value: string
}

export default function PoolStatRow({ helperText, statName, statValue }: PoolRewardProps) {
  return (
    <RowBetween>
      <RowFixed>
        <TYPE.white>{statName}</TYPE.white>
        {helperText && <LightQuestionHelper text={helperText} />}
      </RowFixed>
      <TYPE.white>{statValue ? statValue : '-'}</TYPE.white>
    </RowBetween>
  )
}
