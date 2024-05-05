import SocialLink from "./socialLink";

const socialLinks: { title: string, linkText: string, url: string }[] = [
    { title: "Send me an email", linkText: "pro@thomaskoiko.com", url: "mailto:pro@thomaskoiko.com" },
    { title: "Linkedin", linkText: "in/thomas-couacault", url: "https://www.linkedin.com/in/thomas-couacault/" }
];

export default function SocialLinks() {
    return <div className="mt-12">
        {socialLinks.map((link, index) => (
            <SocialLink key={index} {...link} />
        ))}
    </div>
}