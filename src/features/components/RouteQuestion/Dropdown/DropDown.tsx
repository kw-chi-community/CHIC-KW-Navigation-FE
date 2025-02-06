import { useState, useEffect } from "react"
import { ChevronUp, ChevronDown, Search } from "lucide-react"
import type { FloorOption } from "./floorOptions"

interface DropdownProps {
  options: FloorOption[]
  selectedOption: string | null
  onOptionSelect: (option: string) => void
  placeholder?: string
  searchPlaceholder?: string
}

export default function DropDown({
  options,
  selectedOption,
  onOptionSelect,
  placeholder = "선택해주세요",
  searchPlaceholder = "검색...",
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [internalOptions, setInternalOptions] = useState<FloorOption[]>([])

  useEffect(() => {
    console.log("Options received:", options)
    if (Array.isArray(options)) {
      setInternalOptions(options)
    } else {
      console.error("Options is not an array:", options)
      setInternalOptions([])
    }
  }, [options])

  const filteredOptions = internalOptions.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="relative w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-full bg-white border border-gray-200 rounded-lg py-3 px-4 
          text-left flex justify-between items-center transition-colors
          ${isOpen ? "text-gray-800" : "text-gray-500"}
          hover:bg-gray-50
        `}
      >
        <span>{selectedOption || placeholder}</span>
        {isOpen ? <ChevronUp className="h-5 w-5 text-gray-500" /> : <ChevronDown className="h-5 w-5 text-gray-500" />}
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder={searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border-b border-gray-200 p-3 pl-10 focus:outline-none"
            />
          </div>

          <ul className="max-h-110 overflow-auto">
            {filteredOptions.map(({ id, label }) => (
              <li
                key={id}
                className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                onClick={() => {
                  onOptionSelect(label)
                  setIsOpen(false)
                  setSearchTerm("")
                }}
              >
                {label}
              </li>
            ))}
            {filteredOptions.length === 0 && (
              <li className="px-4 py-3 text-gray-500 text-center">검색 결과가 없습니다</li>
            )}
          </ul>
        </div>
      )}
    </div>
  )
}

