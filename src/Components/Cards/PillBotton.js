function PillBotton ({type, text, click}) {
    let myClasses = [
        "w-full", 
        "flex",
        "items-center",
        "justify-center",
        "px-8",
        "py-4",
        "my-4",
        "border",
        "border-transparent",
        "text-base",
        "font-meduim",
        "rounded-md",
        "text-white",
        "text-white",
        "bg-black",
        "hover:bg-red-700",
        "md:py-2",
        "md:text-lg",
        "md:px-5"
    ];
    
    return(
        <button className={myClasses.join(" ")} type={type} onClick={click}>{text}</button>
    );
}

export default PillBotton;