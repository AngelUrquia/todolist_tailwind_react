import FormField from '../../Forms/FormField';
import { MdAdd } from 'react-icons/md';

function NewTodo({onChange, value, onAddNew}) {
    return(
     <section className="TodoAddNew">
        <section className="flex justify-between w-screen items-start px-4 border rounded-md">
        <FormField  
        type="text"
        id="txtNTodo"
        fname="txtNTodo"
        onChange={onChange}
        value={value}
        caption="Nuevo Todo"
        className="block uppercase tracking-wide text-gray-700 text-center font-bold mb-8"
        labelClassName="flex"
        onKeyUp={(e) => {if (e.keyCode == 13) {onAddNew(e);}}}
        />
        <MdAdd size={"3rem"} onClick={onAddNew}></MdAdd>
        </section>
    </section>
    );
}

export default NewTodo;