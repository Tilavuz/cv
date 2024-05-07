import { Link, NavLink } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="z-10 dark:backdrop-blur py-6 shadow dark:shadow-white select-none fixed left-0 top-0 w-full backdrop-blur">
        <div className="container flex items-center justify-between">
            <div>
                <Link to={'/'} className="flex">
                    <span className="font-mono block">T</span>
                    <span className="font-mono animate-bounce block">I</span>
                    <span className="font-mono block">LAV</span>
                </Link>
            </div>
            <nav className="hidden sm:block">
                <ul className="flex items-center gap-4">
                    <li>
                        <NavLink className="navlink hover:underline-offset-4 hover:underline" to={'/about'}>About</NavLink>
                    </li>
                    <li>
                        <NavLink className="navlink hover:underline-offset-4 hover:underline" to={'/projects'}>Projects</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="flex-1 flex justify-end px-2 sm:hidden">
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Menu />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                <NavLink className="navlink hover:underline-offset-4 hover:underline" to={'/about'}>About</NavLink>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <NavLink className="navlink hover:underline-offset-4 hover:underline" to={'/projects'}>Projects</NavLink>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <ModeToggle />
        </div>
    </header>
  )
}
