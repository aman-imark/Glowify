// styles.js

import { StyleSheet } from 'react-native';
import ColorCodes from './src/utils/ColorCodes';


const font = {
  fontFamily: 'DMSans-ExtraLight',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorCodes.white,
  },
  containerCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerStart: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
    width: '100%'
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  centeredView: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Adjust background color as needed
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  logoImg: {
    width: 150, // Adjust the width of the logo as needed
    height: 100, // Adjust the height of the logo as needed
    resizeMode: 'contain', // Adjust the resizeMode as needed
    alignSelf: 'center'
  },
  backgroundImg: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain'
  },
  button: {
    borderRadius: 8,
    borderColor: '#D5D5D5',
    borderWidth: 1
  },

  buttonNoBg: {
    // borderRadius: 8,
    // borderColor: '#D5D5D5',
    // borderWidth: 1
  },

  nrow:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50
  },
  rowB: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 35
  },
  iconContainer: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconContainerB: {
    width: 60,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: ColorCodes.lightGrey,
    borderStyle: 'solid',
    borderRadius: 8
  },
  iconImage: {
    width: 24, // Set the width of the image
    height: 24, // Set the height of the image
  },
  iconImageB: {
    width: 30, // Set the width of the image
    height: 30, // Set the height of the image
  },
  textContainer: {  
    alignItems: 'start',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: 500,
    fontSize: 18,
    textAlign: 'center',
    width: '100%',
  },
  buttonAText: {
    fontWeight: 600,
    fontSize: 16,
    textAlign: 'center',
    width: '100%',
    color: '#5317A6'
  },


  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#D5D5D5', // Adjust the color of the faded line
  },
  text: {
    fontSize: 16,
    color: '#333',
  },

  orText: {
    marginHorizontal: 10,
    color: 'rgba(0, 0, 0, 0.5)', // Adjust the color of the "OR" text
  },
  headerTitle: {
    fontSize: 30,
    color: '#333',
    fontWeight: 600
  },
  subHeaderTitle: {
    fontSize: 20,
    color: '#333',
    fontWeight: 600
  },
  lgTitle: {
    fontSize: 45,
    color: '#333',
    fontWeight: 800
  },
  mdTitle: {

  },
  smTitle: {

  },  
  h1: {
    fontSize: 45,
    color: '#333',
    fontWeight: 800
  },
  h2: {
    fontSize: 30,
    color: '#333',
    fontWeight: 600
  },
  h3: {
    fontFamily: font.fontFamily,
    fontSize: 22,
    color: '#333',
    fontWeight: 600
  },
  h4: {
    fontSize: 20,
    color: '#333',
    fontWeight: 500,
  },
  h5: {
    fontSize: 18,
    color: '#333',
    fontWeight: 500,
  },
  h6: {
    fontSize: 16,
    color: '#333',
    fontWeight: 500,
  },
  p1: {
    fontSize: 14,
    color: '#333',
    fontWeight: 500
  },
  p2: {
    fontSize: 12,
    color: '#333',
    fontWeight: 500
  },
  lineHeightA: {
    lineHeight: 24
  },
  tc: {
    textAlign: 'center'
  },
  ma: {
    margin: 'auto'
  },
  npd: {

  },
  nmr: {

  },
  mrtl: {
    marginTop: 10,
    marginBottom: 10
  },

  inputTitle: {
    fontSize: 15,
    color: '#333',
    fontWeight: 600
  },
  inputContainer: {
    backgroundColor: '#fff', // Set your desired background color
    borderRadius: 8,
    borderColor: '#D5D5D5',
    borderWidth: 1,
    paddingHorizontal: 8,
    flexDirection: 'row', // To align the icon and TextInput horizontally
    alignItems: 'center', // To center the items vertically
  },
  input: {
    height: 50,
    paddingHorizontal: 12,
  },
  border: {
    borderWidth: 0.5,
    borderColor: 'red',
    borderStyle: 'solid'
  },


  // for flex (three part)
  containerF: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topSection: {
    flex: 0.15,
  },
  middleSection: {
    flex: 0.78,
  },
  bottomSection: {
    flex: 0.09,
  },
});

export default styles;
