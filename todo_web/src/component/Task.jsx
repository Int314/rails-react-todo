import { Checkbox, Flex, Text } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

// 関数コンポーネントの定義
const Task = (props) => {
  return (
    <Flex mb="16px" justifyContent={"space-between"} alignItems={"center"}>
      <Checkbox
        isChecked={props.isDone} // チェックボックスの初期値を設定
        size="lg"
        colorScheme="blue"
        onChange={() => {
          props.toggleIsDone(props.id, props.index); // チェックボックスの状態を更新
        }}
      >
        <Text>{props.name}</Text>
      </Checkbox>
      <CloseIcon onClick={() => props.destroyTask(props.id)} />
    </Flex>
  );
};

// Taskコンポーネントをエクスポート
export default Task;
