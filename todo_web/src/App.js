import React, { useState, useEffect } from 'react';
import Task from './component/Task';
import { Center, Box, CheckboxGroup, Text } from "@chakra-ui/react";

const App = () => {
  // タスクの初期値
  const initialTasks = [
    { name: "洗濯をする", isDone: false },
    { name: "電話をする", isDone: true },
    { name: "料理をする", isDone: true },
    { name: "Rubyの資格勉強をする", isDone: false },
    { name: "RailsとReactでTodoアプリを作る", isDone: false },
  ];

  // useStateフックを使用してtasksという状態変数を定義
  // tasksの初期値は空の配列
  // setTasksはtasksの値を更新するための関数
  // 本来は`const [tasks, setTasks] = useState(initialTasks);`と書く
  const [tasks, setTasks] = useState([]);

  // コンポーネントの初回レンダリング時に実行
  // 第2引数に空の配列を渡すことで初回レンダリング時のみ実行される
  useEffect(() => {
    // タスクの初期値をセット
    setTasks(initialTasks);
  }, []);

  // タスクのisDoneの状態を更新する関数
  const toggleIsDone = (index) => {
    // tasksのコピーを作成
    // stateの値をsetState以外で直接更新してはいけないため
    const tasksCopy = [...tasks];
    const isDone = tasksCopy[index].isDone;
    tasksCopy[index].isDone = !isDone;
    setTasks(tasksCopy);
  };

  return (
    <Box mt="64px">
      <Center>
        <Box>
          <Box mb="24px">
            <Text fontSize="24px" fontWeight="bold">タスク一覧</Text>
          </Box>
          <CheckboxGroup>
            {/* useStateで定義したtasksの値をmap関数で展開 */}
            {tasks.map((task, index) => {
              return (
                <Task
                  key={index} // Reactではリストの要素にはkeyを設定する必要がある
                  index={index} // toggleIsDone関数の引数として使用する
                  name={task.name}
                  isDone={task.isDone}
                  toggleIsDone={toggleIsDone}
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
