import { cva } from "class-variance-authority"

export const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap rounded-xl border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			size: {
				m: "w-[110px] h-[40px] text-sm",
				l: "w-[200px] h-[40px]  text-base",
				xl: "w-[330px] h-[55px]  text-base",
			},	
			color: {
				gray: "bg-gray-400 text-white hover:bg-gray-500",
				black: "bg-black text-white hover:bg-gray-800",
				red: "bg-[#7D170A] text-white hover:bg-red-900",
			},
		},
		defaultVariants: {
			size: "l",
			color: "red",
		},
	},
)
