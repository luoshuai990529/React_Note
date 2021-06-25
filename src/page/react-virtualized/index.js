import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'react-virtualized/styles.css';
// You can import any component you want as a named export from 'react-virtualized', eg
import { List, AutoSizer, CellMeasurer, CellMeasurerCache } from 'react-virtualized';
const cache = new CellMeasurerCache({ defaultHeight: 30, fixedWidth: true });
function App(props, context) {
	const listHeight = 300;
	const ListRef = useRef(null);
	const VirRef = useRef(null);
	const [list, setList] = useState([]);
	const [scrollToIndex, setScrollToIndex] = useState(0);
	const [currentIndex, setCurrentIndex] = useState(0);
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
		parent,
		isScrolling, // The List is currently being scrolled
		isVisible, // This row is visible within the List (eg it is not an overscanned row)
		style, // Style object to be applied to row (to position it)
	}) {
		// let height = 200;
		if (index % 2 === 0) {
			// height = 250;
		}
		return (
			<CellMeasurer cache={cache} columnIndex={0} key={key} parent={parent} rowIndex={index}>
				{/* <div key={key} style={{ ...style, height: `${height}px`, border: '1px solid black' }}> */}
				<div style={{ ...style }}>
					第{list[index]}行
					{index % 2 === 0 ? (
						<div>
							<p>换行====={list[index]}</p>
							<p>换行====={list[index]}</p>
							<p>换行====={list[index]}</p>
							<p>换行====={list[index]}</p>
							<p>换行====={list[index]}</p>
						</div>
					) : (
						<div>
							<p>200</p>
						</div>
					)}
				</div>
				{/* </div> */}
			</CellMeasurer>
		);
	}
	const elementIsVisibleInViewport = (el, parent) => {
		const { top, left, bottom, right } = el.getBoundingClientRect();
		const { top: parentTop, bottom: parentBottom } = parent.getBoundingClientRect();
		const isVisible = bottom > 0 && bottom > parentTop && bottom < parentBottom;
		return isVisible;
		// return partiallyVisible
		// 	? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) && ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
		// 	: top >= 0 && left >= 0 && bottom <=
		//     innerHeight && right <= innerWidth;
	};
	const onScroll = ({ clientHeight, scrollHeight, scrollTop }) => {
		VirRef.current&&VirRef.current.timeId && clearTimeout(VirRef.current.timeId);
		if (VirRef.current) {
			VirRef.current.timeId = setTimeout(() => {
				const dateList = document.querySelectorAll('.ReactVirtualized__Grid__innerScrollContainer>div');
				const visibleList = [...dateList].filter((item) => {
					const bol = elementIsVisibleInViewport(item, VirRef.current);
					return bol;
				});
				console.log('当前展示的item:', visibleList[0]);
				console.log('当兵前高度---', scrollTop);
			}, 20);
		}

		// console.log('当前可见的Item:',visibleList);
		if (ListRef.current) {
			// const obj = ListRef.current.getOffsetForRow({ alignment: 'start' ,index:currentIndex});
			// console.log('getOffsetForRow', obj);
		}
	};
	const backTop = () => {
		console.log('回到顶部“', ListRef.current);
		ListRef.current.scrollToRow(0);
		setCurrentIndex(0);
		// setScrollToIndex(0);
	};
	const lastPage = () => {
		// setScrollToIndex(currentIndex-1);
	};
	const nextPage = () => {
		const count = currentIndex + 1;
		console.log('currentIndex---', currentIndex);
		setCurrentIndex(count);
		setScrollToIndex(count);
	};
	return (
		<React.Fragment>
			<h1>当前行数</h1>
			<div ref={VirRef} className='virtualized' style={{ wordBreak: 'normal', border: '1px solid black', width: '240px', height: '300px' }}>
				<AutoSizer disableHeight>
					{({ width }) => (
						<List
							ref={ListRef}
							scrollToAlignment='start'
							height={listHeight}
							overscanRowCount={10}
							noRowsRenderer={_noRowsRenderer}
							rowCount={list.length}
							rowHeight={cache.rowHeight}
							rowRenderer={_rowRenderer}
							scrollToIndex={scrollToIndex}
							width={width}
							onScroll={onScroll}
						/>
					)}
				</AutoSizer>
				<button onClick={backTop}>回到顶部</button>
				<button onClick={lastPage}>上一页</button>
				<button onClick={nextPage}>下一页</button>
			</div>
		</React.Fragment>
	);
}

export default App;
