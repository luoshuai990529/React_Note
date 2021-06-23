import React, { useState ,useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'react-virtualized/styles.css';
// You can import any component you want as a named export from 'react-virtualized', eg
import { List, AutoSizer } from 'react-virtualized';
function App() {
	const listHeight = 300;
	const listRowHeight = 50;
	const overscanRowCount = 10;
	const rowCount = 1000;
	const scrollToIndex = undefined;
	const [list, setList] = useState([]);
	useEffect(() => {
		let arr = [];
		for (let i = 0; i < 100; i++) {
			arr.push(i);
		}
		setList(arr);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	function _noRowsRenderer() {
		return <div>No rows</div>;
	}

	function _rowRenderer({
		key, // Unique key within array of rows
		index, // Index of row within collection
		isScrolling, // The List is currently being scrolled
		isVisible, // This row is visible within the List (eg it is not an overscanned row)
		style, // Style object to be applied to row (to position it)
	}) {
		return (
			<div key={key} style={style}>
				{list[index]}
			</div>
		);
	}
	return (
		<React.Fragment>
			<div className='virtualized' style={{ wordBreak: 'normal', border: '1px solid black', width: '240px', height: '300px' }}>
				<AutoSizer disableHeight>
					{({ width }) => (
						<List
							ref='List'
							height={listHeight}
							overscanRowCount={overscanRowCount}
							noRowsRenderer={_noRowsRenderer}
							rowCount={list.length}
							rowHeight={listRowHeight}
							rowRenderer={_rowRenderer}
							scrollToIndex={scrollToIndex}
							width={width}
						/>
					)}
				</AutoSizer>
			</div>
		</React.Fragment>
	);
}

export default App;
