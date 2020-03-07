import React,{Component} from 'react';

class TodoItem extends Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    render(){
        console.log('child render')
        const { content } = this.props
        return (
          <li onClick={this.handleClick}>{content}</li>
        )
    }
    //当一个组件从父组件接受参数
    //如果这个组件第一次存在于父组件中,不会被执行
    //如果这个组件之前已经存在父组件中,才会执行
    componentWillReceiveProps(){
      console.log('child componentWillReceiveProps')
    }
    //当这个组件即将从页面中剔除的时候,才会执行
    componentWillUnmount(){
      console.log('child componentWillUnmount')
    }
    // 在父组件的输入时,父组件会自动调用render,导致子组件render一直更新,增加了没有必要的性能消耗。
    // 使用shouldComponentUpdate,判断content是否变化,来决定更新。
    shouldComponentUpdate(nextProps,nextState){
        console.log('nextProps.content',nextProps.content);
        console.log('this.props.content',this.props.content);
        if(nextProps.content!==this.props.content){
            return true;
        }
        return false;
        
    }
    handleClick(){
        const { deleteItem,index } = this.props
         deleteItem(index)
    }
}

export default TodoItem