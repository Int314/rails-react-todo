import { Checkbox, Box, Text } from "@chakra-ui/react";

// 関数コンポーネントの定義
const Task = (props) => {
  return (
    <Box mb="16px">
      <Checkbox
        isChecked={props.isDone} // チェックボックスの初期値を設定
        size="lg"
        colorScheme="blue"
        onChange={() => {
          props.toggleIsDone(props.index); // チェックボックスの状態を更新
        }}
      >
        <Text>{props.name}</Text>
      </Checkbox>
    </Box>
  );
};

// Taskコンポーネントをエクスポート
export default Task;
