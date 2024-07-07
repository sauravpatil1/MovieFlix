import {ScrollView, StyleSheet} from 'react-native';
import Constants from '../../../common/Constants';
import Button from '../../../common/components/Button';
import {IGenre} from '../interface';
import {gerns} from '../../../apiData';

interface IProps {
  gerneList: IGenre[];
  selectedIdsSet: Set<number>;
  setShouldReload: (reload: any) => void;
}

function GenreList(props: IProps) {
  const {gerneList = gerns.genres, selectedIdsSet, setShouldReload} = props;
  if (!gerneList) return null;
  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}>
      {gerneList.map(item => {
        const {id, name} = item;
        return (
          <Button
            title={name}
            style={styles.button}
            active={selectedIdsSet.has(id)}
            key={id}
            onPress={() => {
              if (selectedIdsSet.has(id)) {
                selectedIdsSet.delete(id);
              } else {
                selectedIdsSet.add(id);
              }
              setShouldReload((prev: boolean) => !prev);
            }}
          />
        );
      })}
    </ScrollView>
  );
}

export default GenreList;

const styles = StyleSheet.create({
  container: {
    marginStart: Constants.dimens.size_16,
    marginVertical: Constants.dimens.size_16,
  },
  button: {
    marginEnd: Constants.dimens.size_8,
  },
});
