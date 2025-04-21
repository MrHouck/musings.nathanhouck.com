import { motion } from "motion/react"

export const PostPanel = ({ title, date, description, id }) => {

    return (

        <motion.a
            className="flex flex-col basis-[250px] max-w-[350px] h-[250px] p-4 bg-[var(--card)] rounded-lg gap-3 grow"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            href={`/post/${id}`}
        >
            
            <div className="text-base font-light self-start">
                <h1 className="text-lg">{title}</h1>
                <h4 className="text-sm text-[var(--tertiary)]">{date}</h4>
            </div>
            <div>
                <p className="line-clamp-5 text-[var(--secondary)]">{description}</p>
            </div>

        </motion.a>
    )
}