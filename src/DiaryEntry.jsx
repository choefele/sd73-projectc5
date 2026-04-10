export default function DiaryEntry({ title, date, imageUrl, content }) {
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);

  return (
    <li className="list-row">
      <div>
        <img className="size-10 rounded-box" src={imageUrl} alt={title} />
      </div>
      <div>
        <div>{formattedDate}</div>
        <div className="text-xs uppercase font-semibold opacity-60">
          {title}
        </div>
      </div>
      <p className="list-col-wrap text-xs">{content}</p>
    </li>
  );
}
