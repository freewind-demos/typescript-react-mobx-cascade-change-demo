import {observer} from 'mobx-react';
import React, {FC} from 'react'
import {Store} from './store';

type Props = {
  counter: Store
}

export const Hello: FC<Props> = observer(({counter}: Props) => {
  console.log("### counter.selectedParent", counter.selectedValue1)

  return <div>
    <div>
      <div>
        Value1:
        <select value={counter.selectedValue1}
                onChange={(event) => counter.selectedValue1 = event.target.value}>
          <option value={''}/>
          <option value={'parent-aaa'}>parent-aaa</option>
          <option value={'parent-bbb'}>parent-bbb</option>
        </select>
      </div>
      <div>
        Value2:
        <select value={counter.selectedValue2}
                onChange={(event) => counter.selectedValue2 = event.target.value}>
          <option value={''}/>
          <option value={'child1-aaa'}>child1-aaa</option>
          <option value={'child1-bbb'}>child1-bbb</option>
        </select>
      </div>
    </div>
    <hr/>
    <div>
      <div>Value1: {counter.selectedValue1}</div>
      <div>Value2: {counter.selectedValue2}</div>
    </div>
  </div>
})

