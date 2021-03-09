function Form({children}){
    return (
        
        <form>
            <h2 className="text-center text-3xl leading-9 font-extrabold text-gray-700">Iniciar Sesión</h2>
            <br/> 
            <div className="flex justify-center">
                <div className="lg:w 1/3 md:w 2/3 w:full">
                {children}
                </div>
            </div>
        </form>
    );
}

export default Form;