import React, {ReactNode} from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';

interface IProps {
  data: any[];
  columns: number;
  containerStyle?: ViewStyle;
  renderCell: (cellData: any, index: number) => ReactNode;
}

const Grid = ({data, columns, renderCell, containerStyle}: IProps) => {
  const renderRow = (rowData: any, rowIndex: number) => (
    <View key={rowIndex} style={styles.row}>
      {rowData.map((cellData: any, cellIndex: number) => (
        <View key={cellIndex} style={styles.cell}>
          {renderCell(cellData, rowIndex * columns + cellIndex)}
        </View>
      ))}
    </View>
  );

  const formattedData = [];
  for (let i = 0; i < data.length; i += columns) {
    formattedData.push(data.slice(i, i + columns));
  }

  return (
    <View style={[styles.grid, containerStyle]}>
      {formattedData.map((rowData, rowIndex) => renderRow(rowData, rowIndex))}
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Grid;
