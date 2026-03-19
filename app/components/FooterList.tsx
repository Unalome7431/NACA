
interface FooterListProps {
  title: string
  listItem: string[]
}

export default function FooterList({ title, listItem }: FooterListProps) {

  return (
    <ul className="space-y-0.5">
      <p className="font-semibold pb-2 text-lg">{title}</p>
      {
        listItem.map((list, index) => {
          return (
            <li key={index} className="hover:underline hover:cursor-pointer not-lg:underline">{list}</li>
          )
        })
      }
    </ul>
  )
}