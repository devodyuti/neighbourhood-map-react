import React from 'react';
import {ListItem, Input} from 'react-native-elements';
import {Icon} from 'react-native-vector-icons';
import {connect} from 'react-redux';
import {searchActions} from  './actions/searchActions';
import {View,TextInput,BackHandler} from 'react-native';
import {callFourSquare} from './actions/callFourSquare';

class Query extends React.Component {

    state = {
        text:''
    }

    constructor(){
        super();
       
    }

    componentDidMount(){
        BackHandler.addEventListener('hardwareBackPress',()=>{
            this.props.navigation.navigate('map');
        });
    }

    goToMenuPage = (item)=> {
        this.setState({text:''});
        this.props.searchActions('');
        this.props.callFourSquare(this.props.latLong.latitude,this.props.latLong.longitude,item,this.callback)
    }
    
    callback = ()=> {
        this.props.navigation.navigate('menu');
    }

    callService(text) {
        this.setState({text})
        this.props.searchActions(text);

    }

    renderList() {
        return this.props.search!==undefined && this.props.search.map((item,i)=> {
            return <ListItem
                        key={i}
                        title={item}
                        onPress = {()=>{ this.goToMenuPage(item)}}
                    />
        });

    }

    render() {
        return(
            <View>
                <View>

                </View>
                <TextInput
                    style={{justifyContent:'center',marginLeft:20,marginRight:20,marginTop:30}}
                    onChangeText = {text=>this.callService(text)}
                    value={this.state.text}
                />
                {this.renderList()}
            </View>
        );
    }
}

const mapStateToProps = (state)=> {
    return {
        search:state.search.query,
        latLong:state.latLong
    }
}

export default connect(mapStateToProps,{searchActions,callFourSquare})(Query);