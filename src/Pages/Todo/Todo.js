/** @jsxImportSource @emotion/react */
import React, { useRef } from 'react';
import * as S from './style.js'
import { useState } from 'react';
import RemoveModal from '../../Components/Modal/RemoveModal/RemoveModal.js';
import TodoList from '../../Components/TodoList/TodoList.js';
import ModifyModal from '../../Components/Modal/ModifyModal/ModifyModal.js';
import AddTodo from '../../Components/AddTodo/AddTodo.js';


const Todo = () => {
    const [openRemove, setOpenRemove] = useState(false);
    const [openModify, setOpenModify] = useState(false);
    
    const[removeTodo, setRemoveTodo] = useState ({
        id: 0,
        date:'',
        time: '',
        content: ''
    });
    
    const[modifyTodo, setModifyTodo] = useState ({
        id: 0,
        date:'',
        time: '',
        content: ''
    });
    
    const [input, setInput] = useState({
        id:0,
        date:'',
        time: '',
        content:''
    });
    
    const nowDate = new Date();
    
    const convertDay = (day) => {
        return day === 0 ? "일" 
            : day === 1 ? "월" 
            : day === 2 ? "화" 
            : day === 3 ? "수" 
            : day === 4 ? "목" 
            : day === 5 ? "금" : "토" 
    }

    const [todoList, setTodoList] = useState([])
    const todoId = useRef(1);

    const onChange = (e) => {
        console.log(e.target.value)
        setInput({
            ...input,
            date: `${nowDate.getFullYear()}.${nowDate.getMonth() + 1}.${nowDate.getDate()}(${convertDay(nowDate.getDay())})`,
            time: `${nowDate.getHours()}:${nowDate.getMinutes()}:${nowDate.getSeconds()}`,
            content: e.target.value
        });
    }

    const onKeyup = (e) => {
        if(e.keyCode === 13) {
            onAdd();
        }
    }

    const onAdd = () => {
        if(input.content===''){
            return
        }
        const todo = {
            ...input,
            id: todoId.current++
        }
        setTodoList([...todoList, todo]);
        setInput({...input, content:''});
    }

    const onRemove = (id) => {
        setTodoList(todoList.filter(
            todo => {
                return todo.id !==id;
            }
        ));
        setOpenRemove(false);
    }

    const onModify = (modifyTodo) => {
        setTodoList(
            todoList.map(
                todo=> {
                    if(todo.id === modifyTodo.id){
                        todo.content = modifyTodo.content;
                    }
                    return todo;
                }
            )
        );
        setOpenModify(false);
        updateLocalStorage();
    }

    const removeCloseModal = (id) => {
        setRemoveTodo(todoList.filter(
            todo => todo.id === id
        )[0]);
        setOpenRemove(false);
    }

    const modifyCloseModal = (id) => {
        setModifyTodo(todoList.filter(
            todo => todo.id === id
        )[0]);
        setOpenModify(false);
    }
 
    const removeOpenModal = (id) =>{
        setRemoveTodo(todoList.filter(
            todo => todo.id === id
        )[0]);
        setOpenRemove(true);
    };

    const modifyopenModal = (id) =>{
        setModifyTodo(todoList.filter(
            todo => todo.id === id
        )[0])
        setOpenModify(true);
    };

    const constructor = () => {
        if(localStorage.getItem("todoList") == null) {
            setTodoList([])
        }else {
            setTodoList(JSON.parse(localStorage.getItem("todoList")));
        }
    }

    const updateLocalStorage = () => {
        localStorage.setItem("todoList", JSON.stringify(todoList));
    }


    return (
        <>
                
                <main css={S.mainContainer}>
                <header css={S.mainHeader}>
                    <h1 css={S.mainTitle}>TODO</h1>
                    <AddTodo onChange={onChange} onKeyup={onKeyup} value={input.content} onAdd={onAdd} />
                </header>
                <ul css={S.todoContentList}>

                {todoList.map(
                    todo => {
                        return(
                            <TodoList todo={todo} removeOpenModal={removeOpenModal} modifyopenModal={modifyopenModal}/>
                        )
                    }
                )}
                </ul>
            </main>
        
        {openRemove ? (<RemoveModal onRemove={onRemove} removeCloseModal={removeCloseModal} removeTodo={removeTodo} updateLocalStorage={updateLocalStorage}/>): 
        openModify ? (<ModifyModal onModify={onModify} modifyCloseModal={modifyCloseModal} modifyTodo={modifyTodo} updateLocalStorage={updateLocalStorage}/>):''}
    </>
    );
};

export default Todo;