import React from 'react';
import lifecycle from 'recompose/lifecycle';
import compose from 'recompose/compose';
import withLoading from './withLoading';

function page({content}){
	return (
	<div>
		페이지 로딩이 완료되었습니다.
		{content}
		</div>
	);
}

export const withLoadData = lifecycle({
	state : {isLoading : true, content: ''},
	componentDidMount : function() {
		if(this.props.loadData){
			this.props.loadData().then(content=>this.setState({isLoading : false, content}));
		}
	},
});

export const PageWithLoadData = withLoadData(page);
export const PageWithLoadDataAndLoading = compose(withLoadData, withLoading('서버 요청 중'))(page);