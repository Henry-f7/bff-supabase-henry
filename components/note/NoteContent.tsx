import { NoteContentProps } from "@/utils/interfaces/interfaceComponents";

export default function NoteContent(props: NoteContentProps){
    const { content, className } = props;

    return(
        <div>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{content}</p>
        </div>
    )
}
