
function Button({
    children,
    type = 'button',
    bgColor = 'bg-black',
    textColor = 'text-white',
    classname = '',
    ...props
}) {
    return <button className={` transition-all duration-300 text-center ${bgColor} ${type} ${textColor} ${classname}`} {...props}>
        {children}
    </button>
}

export default Button
