import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <img src="/image-1.png" />
            </div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/ninjas">Ninja Listing</Link>
        </nav>
    );
}

export default Navbar;