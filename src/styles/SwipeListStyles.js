import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  brewItem: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    height: 60,
  },
  hiddenButtons: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnLeft: {
    right: 75,
    height: 60,
  },
  backRightBtnRight: {
    height: 60,
    right: 0,
  },
  kombucha: {
    height: 40,
    width: 40,
  },
 });

 export default styles;