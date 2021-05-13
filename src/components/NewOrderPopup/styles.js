import { StyleSheet,Dimensions } from 'react-native';

const styles = StyleSheet.create({
  main: {
    position: 'absolute',
    bottom: 0,
    width: Dimensions.get('window').width,
    padding: 10,
    height: Dimensions.get('window').height,
    justifyContent: 'space-between',
    backgroundColor: '#00000090',
    
  },
  popupContainer: {
    backgroundColor: 'black',
    borderRadius: 10,
    height: 250,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  time: {
    color: 'green',
    fontSize: 36
  },
  distance: {
    color: 'green',
    fontSize: 26
  },
  gasUpType: {
    color: 'yellow',
    fontSize: 20,
    marginHorizontal: 15,
   
  },
  line: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userBackground: {
    backgroundColor: 'green',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60
  },
  cancleButton: {
    backgroundColor: 'black',
    padding: 20,
    borderRadius: 50,
    // borderEndColor:"red",
    width: 210,
    alignItems: 'center',
    position:"relative",
    left:"20%",
    top:"50%"
  },
  cancelButton: {
    color: 'red',
    fontWeight: 'bold',
  },

});

export default styles;
