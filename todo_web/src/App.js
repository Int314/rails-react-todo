import React, { useState, useEffect } from 'react';
import Task from './component/Task';
import {
  Flex,
  Center,
  Box,
  CheckboxGroup,
  Text,
  Input,
  Button
} from "@chakra-ui/react";
import axios from 'axios';

const App = () => {
  // useStateフックを使用してtasksという状態変数を定義
  // tasksの初期値は空の配列
  // setTasksはtasksの値を更新するための関数
  // 本来は`const [tasks, setTasks] = useState(initialTasks);`と書く
  const [tasks, setTasks] = useState([]);

  const [name, setName] = useState("");

  // axiosを使用してRailsとAPI通信を行い、tasksの値を取得する
  const fetch = async () => {
    const res = await axios.get("http://localhost:3001/tasks");
    setTasks(res.data);
  };

  // コンポーネントの初回レンダリング時に実行
  // 第2引数に空の配列を渡すことで初回レンダリング時のみ実行される
  useEffect(() => {
    fetch();
  }, []);

  // タスクを作成する関数
  const createTask = async () => {
    await axios.post("http://localhost:3001/tasks", {
      name: name,
      is_done: false,
    });
    setName("");
    fetch();
  };

  // タスクを削除する関数
  const destroyTask = async (id) => {
    await axios.delete(`http://localhost:3001/tasks/${id}`);
    fetch();
  }

  // タスクのis_doneを更新する関数
  const toggleIsDone = async (id, index) => {
    const isDone = tasks[index].is_done;
    console.log(tasks[index]);
    console.log(isDone);
    await axios.put(`http://localhost:3001/tasks/${id}`, {
      is_done: !isDone,
    });
    fetch();
  }

  return (
    <Box mt="64px">
      <Center>
        <Box>
          <Box mb="24px">
            <Text fontSize="24px" fontWeight="bold">タスク一覧</Text>
          </Box>
          <Flex mb="24px">
            <Input
              placeholder="タスク名を入力"
              value={name}
              onChange={(e) => setName(e.target.value)} // 値が変化したときにnameの値を更新
            />
            <Box ml="16px">
              <Button colorScheme="teal" onClick={createTask}>
                タスクを作成
              </Button>
            </Box>
          </Flex>
          <CheckboxGroup>
            {/* useStateで定義したtasksの値をmap関数で展開 */}
            {tasks.map((task, index) => {
              return (
                <Task
                  id={task.id}
                  key={index} // Reactではリストの要素にはkeyを設定する必要がある
                  index={index} // toggleIsDone関数の引数として使用する
                  name={task.name}
                  isDone={task.is_done}
                  toggleIsDone={toggleIsDone}
                  destroyTask={destroyTask}
                />
              );
            })}
          </CheckboxGroup>
        </Box>

      </Center>
    </Box>
  );
}

export default App;
