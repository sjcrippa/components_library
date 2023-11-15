import Link from "next/link"

export default function Navbar() {
  const links = [
    { name: 'Documentation', href: '/docs' },
    { name: 'Components', href: '/docs/components' },
    { name: 'About', href: '/about' }
  ]
  return (
    <>
      <div className="w-full flex items-center gap-10 py-7">
        <Link
          href='/'
          className="text-2xl text-light font-bold">
          LOGO
        </Link>
        <ul className="text-light flex gap-5">

          {links.map((link) => {
            return (
              <Link
                key={link.name}
                href={link.href}
                className="text-light text-sm"
              >
                <p>{link.name}</p>
              </Link>
            )
          })}
        </ul>
      </div>
    </>
  )
}