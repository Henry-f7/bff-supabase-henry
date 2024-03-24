import { NoteProps } from "@/utils/interfaces/interfaceComponents";
import ActionButton from "./ActionButton";
import NoteHeader from "./NoteHeader";
import NoteContent from "./NoteContent";

export default function Note(props: NoteProps) {
    const { title, content } = props;
    return (
        <div className="max-w-sm p-6 bg-amber-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <NoteHeader className="mb-3" title={title} />
            <div className="border-t border-gray-400 py-2">
                <NoteContent className="mb-3" content={content} />
            </div>
            <ActionButton type="edit" title="Edit" />
            <ActionButton type="delete" title="Delete" />
        </div>
    )
}