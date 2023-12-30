import './App.css';

import { loremIpsum } from 'lorem-ipsum';
import { List, AutoSizer } from 'react-virtualized';

const rowCount = 5000;
const listHeight = 400;
const rowHeight = 600;
const rowWidth = 700;

let Real = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
});

const list = Array(rowCount).fill().map((val, idx) => {
  return {
    id: idx,
    name: loremIpsum({
      count: 1,
      units: 'sentences',
      sentenceLowerBound: 1,
      sentenceUpperBound: 1
    }),
    image: 'yourimage',
    text: loremIpsum({
      count: 1,
      units: 'sentences',
      sentenceLowerBound: 1,
      sentenceUpperBound: 2
    }),
    yaer: Math.floor(Math.random() * (2024 - 2013 + 1) + 2013),
    price: Real.format(Math.floor(Math.random() * (250000 - 80000 + 1) + 80000))
  }
});

function renderRow({ index, key, style }) {



  style = {...style, marginBottom: '50px'}

  return (
    <div key={key} style={style} className="row">
      <div className="image">
        <img src={list[index].image} alt="" />
      </div>
      <div className="content">
        <div><b>{list[index].name}</b> - {list[index].text}</div>
        <div>{list[index].yaer}</div>
        <div>{list[index].price}</div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div className="list">
        <AutoSizer>
          {
            ({ width, height }) => (<List
                width={width}
                height={height}
                rowHeight={rowHeight}
                rowRenderer={renderRow}
                rowCount={list.length}
                overscanRowCount={3} />
            )
          }
        </AutoSizer>
      </div>
    </div>
  );
}

export default App;