import {Pressable, StyleSheet, Text, TextStyle, ViewStyle} from 'react-native';
import Constants from '../Constants';
import Colors from '../Colors';

interface IProp {
  title: string;
  onPress?: () => void;
  style?: ViewStyle;
  activeStyle?: ViewStyle;
  textStyle?: TextStyle;
  active?: boolean;
}

function Button(props: IProp) {
  const {title, onPress, style, activeStyle, textStyle, active} = props;
  return (
    <Pressable
      style={[
        styles.button,
        active && styles.activeButton,
        style,
        active && activeStyle,
      ]}
      onPress={onPress}>
      <Text style={[styles.title, active && textStyle]}>{title}</Text>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    padding: Constants.dimens.size_8,
    backgroundColor: Colors.grey,
    flexWrap: 'wrap',
    alignSelf: 'baseline',
    borderRadius: Constants.dimens.size_2,
  },
  activeButton: {
    backgroundColor: Colors.darkRed,
  },
  title: {
    color: Colors.white,
    fontWeight: 'bold',
  },
});
