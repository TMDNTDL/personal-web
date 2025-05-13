
// By doing (source, name), react will combine two argument into one object
export const SkillsStack = ({ source, name }) => {
  return (
    <div className="item">
      <img src={source} alt="image" />
      <h5>{name}</h5>
    </div>
  )
}