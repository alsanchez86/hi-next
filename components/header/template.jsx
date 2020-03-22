import Link from 'next/link';

export default () =>

<div className="header">
    <Link href="/">
        <a>
            Home
        </a>
    </Link>

    <Link href="/blog">
        <a>
            Blog
        </a>
    </Link>

    <Link href="/shows">
        <a>
            Shows
        </a>
    </Link>

    <Link href="/quote">
        <a>
            Quote
        </a>
    </Link>

    <Link href="/about">
        <a>
            About
        </a>
    </Link>

    <Link href="/dummy">
        <a>
            Dummy
        </a>
    </Link>
</div>