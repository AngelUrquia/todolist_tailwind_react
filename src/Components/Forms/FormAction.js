function FormAction({caption, onClick}){
    let myClasses = [
        "w-full", 
        "flex",
        "items-center",
        "justify-center",
        "px-6",
        "py-4",
        "my-4",
        "border",
        "border-transparent",
        "text-base",
        "font-bold",
        "rounded-md",
        "text-white",
        "text-white-600",
        "bg-black",
        "hover:bg-red-400",
        "md:py-2",
        "md:text-lg",
        "md:px-8"
    ];



    return(
        <button className={myClasses.join(" ")} onClick={onClick}>{caption}</button>
    );

}

export default FormAction;