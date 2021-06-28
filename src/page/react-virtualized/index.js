import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
// import 'react-virtualized/styles.css';
// You can import any component you want as a named export from 'react-virtualized', eg
import { List, AutoSizer, CellMeasurer, CellMeasurerCache } from 'react-virtualized';
const cache = new CellMeasurerCache({ defaultHeight: 205, fixedWidth: true });
function App(props, context) {
	const listHeight = 300;
	const ListRef = useRef(null);
	const VirRef = useRef(null);
	const [list, setList] = useState([]);
	const [scrollToIndex, setScrollToIndex] = useState(0);
	const [currentIndex, setCurrentIndex] = useState(0);
	useEffect(() => {
		let arr = [];
		for (let i = 0; i < 1000; i++) {
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
        // console.log(index,'isScrolling---',isScrolling);
        // console.log(index,'isVisible---',isVisible);
		// CellMeasurer 适配动态高度
		return (
			<CellMeasurer cache={cache} columnIndex={0} key={key} parent={parent} rowIndex={index}>
				<div style={{ ...style }} data-index={index}>
					<span>第{list[index]}行</span>
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

	// 判断元素是否在可见范围内
	// return partiallyVisible
	// 	? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) && ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
	// 	: top >= 0 && left >= 0 && bottom <=
	//     innerHeight && right <= innerWidth;
	const elementIsVisibleInViewport = (el, parent) => {
		const { bottom } = el.getBoundingClientRect();
		const { top: parentTop, bottom: parentBottom } = parent.getBoundingClientRect();
		const isVisible = bottom > 0 && bottom > parentTop + 5 && bottom < parentBottom;
		return isVisible;
	};
	const onScroll = ({ clientHeight, scrollHeight, scrollTop }) => {
		VirRef.current && VirRef.current.timeId && clearTimeout(VirRef.current.timeId);
		if (VirRef.current) {
			VirRef.current.timeId = setTimeout(() => {
				const dateList = document.querySelectorAll('.ReactVirtualized__Grid__innerScrollContainer>div');
				const visibleList = [...dateList].filter((item) => {
					const bol = elementIsVisibleInViewport(item, VirRef.current);
					return bol;
				});
				const index = parseInt(visibleList[0].getAttribute('data-index'));
				// console.log('当前展示的item:',visibleList[0] );
				setCurrentIndex(index);
			}, 30);
		}
	};
	const backTop = () => {
		setCurrentIndex(0);
		setScrollToIndex(0);
	};
	const lastPage = () => {
		if (currentIndex === 0) {
			return;
		}
		const count = currentIndex - 1;
		setCurrentIndex(count);
		setScrollToIndex(count);
	};
	const nextPage = () => {
		const count = currentIndex + 1;
		console.log('count---', count);
		setCurrentIndex(count);
		setScrollToIndex(count);
	};
	return (
		<React.Fragment>
			<h1>当前行数{currentIndex}</h1>
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
