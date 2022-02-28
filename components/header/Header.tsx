import Link from "next/link"
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <header>
      <nav>
        <div className="left-nav">
          <ul>
            <li className={router.asPath === "/" ? "active" : ""}>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className={router.asPath === "/about" ? "active" : ""}>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li className={router.asPath === "/contents" ? "active" : ""}>
              <Link href="/contents">
                <a>Contents</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="right-nav">
          <span className={router.asPath === "/login" ? "active" : ""}>
            <Link href="/login">
              Log In
            </Link>
          </span>
          <span className={router.asPath === "/signup" ? "active" : ""}>
            <Link href="/signup">
              Sign Up
            </Link>
          </span>
        </div>
      </nav>
    </header>
  )
}

export default Header;