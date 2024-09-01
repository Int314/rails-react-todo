import Task from './component/Task';
import { Center, Box, CheckboxGroup, Text } from "@chakra-ui/react";

const App = () => {
  return (
    <Box mt="64px">
      <Center>
        <Box>
          <Box mb="24px">
            <Text fontSize="24px" fontWeight="bold">タスク一覧</Text>
          </Box>
          <CheckboxGroup>
            <Task name="洗濯をする" />
            <Task name="電話をする" />
            <Task name="料理をする" />
            <Task name="掃除をする" />
            <Task name="RailsとReactでTodoアプリを作る" />
          </CheckboxGroup>
        </Box>

      </Center>
    </Box>
  );
}

export default App;
