import { NoteHeaderProps } from "@/utils/interfaces/interfaceComponents"

export default function NoteHeader(props: NoteHeaderProps) {
    const { className, title } = props;
    return (
        <div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </div>
    )
}
