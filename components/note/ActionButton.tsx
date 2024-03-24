import { ButtonProps } from "@/utils/interfaces/interfaceComponents";

export default function ActionButton(props: ButtonProps) {
    const { type, title } = props;
    const buttonType = type === "edit" ? "bg-blue-700" : "bg-red-700";

    return (
        <button type="button" className={`text-white ${buttonType} hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-7000 focus:outline-none dark:focus:ring-blue-800`}>
            {title}
        </button>
    )
}
