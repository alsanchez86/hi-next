import Link from 'next/link';

export default () =>

<div className="header">
    <Link href="/">
        <a>
            Index
        </a>
    </Link>

    <Link href="/dummy">
        <a>
            Dummy
        </a>
    </Link>
</div>