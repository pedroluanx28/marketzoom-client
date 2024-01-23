import { SearchInput } from '@/Components/SearchInput';

export function Header() {
    return (
        <div className="bg-transparent d-flex justify-content-between align-items-center">
            <img src="./Logo.png" alt="Image Logo" />
            <SearchInput />
        </div>
    )
}