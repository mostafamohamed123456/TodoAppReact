import React, { Fragment } from "react";

const TodoItem = (props)=>{
    let {showItem} = props;
    let {deleteItems} = props;
    let itemLength = showItem.length;
    let itemList = itemLength ? (
        showItem.map(item=>{
            return(
                <Fragment>
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td onClick={ () => deleteItems(item.id)} className="delete">&times;</td>
                    </tr>
                </Fragment>
            );
        })
    ) : <tr><td className="empty-todolist">Their Is No Item To Show</td></tr>
    return(
        <table>
            <thead key={showItem.id}>
                <td>Username</td>
                <td>Age</td>
                <td>Action</td>
            </thead>
            {itemList}
        </table>
    );
}

export default TodoItem;