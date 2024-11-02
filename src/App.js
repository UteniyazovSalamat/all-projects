import React from 'react';
import UserInfo from './components/userInfo/UserInfo';
// import Posts from './components/JSONplaceholder/Posts/Posts';
// import Users from './components/JSONplaceholder/Users/Users';
// import Todo from './components/todo/Todo';
// import Vacancy from './components/vacancy/Vacancy';
// import Accordion from './components/accordion/Accordion';

const App = () => {
    return (
        <>
            {/* <Accordion /> */}
            {/* <Vacancy /> */}
            {/* <Todo /> */}
            {/* <Users /> */}
            {/* <Posts /> */}
            <UserInfo />
        </>
    );
};

export default App;

// import {useState} from "react";
//
// const App = () => {
//     const [text, setText] = useState('');
//     const [size, setSize] = useState(20);
//     const [color, setColor] = useState('black');
//     const [selectedStyle, setSelectedStyle] = useState({});
//
//     const handleChangeText = (e) => {
//         setText(e.target.value);
//     }
//
//     const handleChangeSize = (e) => {
//         setSize(+e.target.value);
//     }
//
//     const handleSelectColor = (e) => {
//         setColor(e.target.value);
//     }
//
//     const handleClickSave = (e) => {
//         e.preventDefault();
//         setSelectedStyle(selectedStyle);
//     }
//
//     return (
//         <div style={{display: 'flex', flexDirection: 'column'
//             ,justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
//             <form style={{display: 'flex', gap: 10}}>
//                 <input onChange={handleChangeText} type="text" value={text} />
//                 <input onChange={handleChangeSize} type="number" value={size} />
//                 <select onChange={handleSelectColor}>
//                     <option>black</option>
//                     <option>red</option>
//                     <option>green</option>
//                 </select>
//                 <button onClick={handleClickSave}>save</button>
//             </form>
//             <h1 style={{fontSize: size, color: color}}>{text}</h1>
//         </div>
//     );
// };
//
// export default App;
