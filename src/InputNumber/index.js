import React from 'react';
import PropTypes from 'prop-types';
class InputNumber extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value1: 111
        }
    }
    static propTypes = {
        value: PropTypes.number,
        bindChange: PropTypes.func,
        defaultValue: PropTypes.number,
    }
    render(){
        const {
            value,
            defaultValue,
            bindChange,
            ...rest
        } = this.props;

        return(
            <div>
            { !defaultValue && <input type="number" placeholder="受控组件" value={this.state.value1}  {...rest}
                onChange={(e)=>{
                    this.setState({ value1: e.target.value })
                    bindChange(e);
                }} /> }
            { defaultValue && <input type="number" placeholder="非受控组件" value={defaultValue} {...rest} 
                onChange={(e)=>{
                    bindChange(e);
                }} /> }
            </div>
        )
    }
}
export default InputNumber;