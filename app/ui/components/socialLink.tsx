export default function SocialLink({title, linkText, url}: {title: string, linkText: string, url: string}) {
    return <div className="my-14 md:my-20">
        <p className="text-md md:text-2xl mb-2 text-zinc-100">{title}</p>
        <a className="text-2xl md:text-5xl" href={url} rel="noreferrer">{linkText}</a>
    </div>
}