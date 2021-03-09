function FormField ({type,id,fname,onChange, caption, value, error, labelClassName,...attr}){
    return(
        <section>
            <label className={labelClassName} className="block uppercase tracking-wide text-gray-700 text-center font-bold mb-2" >{caption}</label>
            <input
                type={type}
                id={id}
                name={fname}
                onChange={onChange}
                value={value}
                {...attr}
            />
            {(error && true) ? (<section>{error}</section>): null}
        </section>
    );
}

export default FormField;