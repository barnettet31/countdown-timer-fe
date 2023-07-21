export function TimeContainer({children}:{children:React.ReactNode}) {
    return(
        <div className="flex justify-between gap-4">
            {children}
        </div>
    )
}