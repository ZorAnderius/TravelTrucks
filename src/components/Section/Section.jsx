const Section = ({ style = '', children }) => {
  return (
      <section className={style}>{children}</section>
  )
}

export default Section