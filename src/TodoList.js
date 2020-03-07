import React,{Component, Fragment} from 'react';
import TodoItem from './TodoItem'
class TodoList extends Component{
      constructor(props){
          super(props)
          this.state={
              inputValue:'hello world',
              list:['学习React']
          }
      }
      //在组件即将被挂载到页面上的时刻自动执行(最新版本将被废弃)
      componentWillMount(){
          console.log('componentWillMount')
      }
      render(){
          console.log('parent render')
            return (
              <Fragment>
                 {/**Fragment React 占位符*/}
                <div>
                      <input value={this.state.inputValue}
                          onChange={this.handleInputChange.bind(this)}
                      />
                      <button onClick={this.handleBtnClick.bind(this)}>提交</button>
                </div>
                <ul>
                      {
                        this.state.list.map((item,index)=>{
                            return (
                                  <Fragment key={index}>
                                    <TodoItem  content={item} index={index} deleteItem={this.handeleItemDelete.bind(this)}/>
                                    {
                                      /*
                                        <li 
                                          key={index} 
                                          onClick={this.handeleItemDelete.bind(this,index)}
                                        >
                                          {item}
                                        </li>
                                    */
                                    }
                                  </Fragment>
                                  )
                        })
                      }
                </ul>
               </Fragment>
            )
      }
      //组件被挂载到页面之后,自动执行。
      componentDidMount(){
          // ajax 请求可以写在这个生命周期里
          console.log('componentDidMount')
      }
      //组件被更新之前,自动执行,一定要有返回值。
      shouldComponentUpdate(){
          console.log('shouldComponentUpdate')
          return true;
      }
      //组件被更新之前,自动执行,但是它在shouldComponentUpdate之后执行。
      //如果shouldComponentUpdate返回true才会执行
      //如果返回 false,这个函数就不会被执行
      componentWillUpdate(){
        console.log('componentWillUpdate')
      }
      //组件更新完成之后执行
      componentDidUpdate(){
        console.log('componentDidUpdate')
      }
      componentWillReceiveProps(){
        console.log('componentWillReceiveProps')
      }
      handleInputChange(e){
          //事件绑定中this指向的不是当前的React对象
          // 第一种方法通过bind改变this指向
          // 第二种方法 handleInputChange=()=>{} 使用箭头函数改变this指向
          // React改变state中的值 使用setState()
          // setState两种写法 两种写法的区别自行百度一下。
          // this.setState({
          //     inputValue:e.target.value
          // })
          const inputValue = e.target.value;
          this.setState(()=>{
              return {
                  inputValue
              }
          })
          // this.setState(()=>({
          //     inputValue
          // }))
      }
      handleBtnClick(){
          // this.setState({
          //     list:[...this.state.list,this.state.inputValue],
          //     inputValue:''
          // })
          this.setState((prevState)=>({
              list:[...prevState.list,prevState.inputValue],
              inputValue:''
          }))
      }
      handeleItemDelete(index){
         // this.state.list.splice(index,1) , 不建议这样做。
        // const list = [...this.state.list];
        // list.splice(index,1);
        // this.setState({
        //     list
        // })
         this.setState((prevState)=>{
              const list = [...prevState.list];
              list.splice(index,1);
              return {list}
         })   
      }
}

export default TodoList;