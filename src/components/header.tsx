import { Link, NavLink } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";

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
            <nav>
                <ul className="flex items-center gap-4">
                    <li>
                        <NavLink className="navlink" to={'/about'}>About</NavLink>
                    </li>
                    <li>
                        <NavLink className="navlink" to={'/projects'}>Projects</NavLink>
                    </li>
                </ul>
            </nav>
            <ModeToggle />
        </div>
    </header>
  )
}
