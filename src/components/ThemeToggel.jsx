import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className=" relative w-20 h-10 rounded-full bg-base-300 p-1 transition-all duration-700 cursor-pointer"
        >
            <div
                className={` absolute top-1 w-8 h-8 rounded-full bg-base-100 shadow-lg flex items-center justify-center transition-all duration-300 
                    ${
                        theme === "dark"? "translate-x-10" : "translate-x-0"
                    }
                `}
            >
                {theme === "light" ? (
                    <Moon size={16} className="text-primary" />
                ) : (
                    <Sun size={16} className="text-warning" />
                )}
            </div>
        </button>
    );
}