import React from 'react';

function FormPage(props) {
//
//     const sayHello= () => {
//         alert("hello world")
//     }
//
//     const getUsers= () => {
//         alert("Arianna " + " Dastan " + " Alim")
//     }
//
//     const handleChange= (e) => {
//         console.log(e.target.value)
//     }
//
//     const handleBlur= (e) => {
//         console.log(e.target.value)
//     }
//
    const world = (e) => {
        alert("hello world")
    }


    return (
        <>
            <button onClick={world}>click</button>

            {/*<h1>Обработчики событий</h1>*/}
            {/*<button onClick={sayHello}>sayHello</button>*/}
            {/*<button onDoubleClick={getUsers}>getUsers</button>*/}


            {/*<h1>---------</h1>*/}
            {/*<input*/}
            {/*    type="text"*/}
            {/*    placeholder="onchange"*/}
            {/*    onChange={handleChange}*/}
            {/*/>*/}
            {/*<input*/}
            {/*    type="text"*/}
            {/*    placeholder="onblur"*/}
            {/*    onBlur={handleBlur}*/}
            {/*/>*/}
        </>
    );
}

export default FormPage