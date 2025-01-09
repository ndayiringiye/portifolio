import contents from "../Abouts.json"
const About = () => {
    console.log(contents)
  return (
    <div>
        
        {contents.map(content => (
            <div>
            <h1 key={content.id}>{content.logo}</h1>
            <p>{content.describe}</p>
            </div>

        ))}
    </div>
  )
}

export default About