import { Checkbox, Box, Text } from "@chakra-ui/react";

// 関数コンポーネントの定義
const Task = (props) => {
  return (
    <Box mb="16px">
      <Checkbox size="lg" colorScheme="blue">
        <Text>{props.name}</Text>
      </Checkbox>
    </Box>
  );
};

// Taskコンポーネントをエクスポート
export default Task;
