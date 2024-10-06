const HeaderBox = ({ title = 'title', ...props }: HeaderBoxProps) => {
  return (
    <div className='header-box'>
      <h1 className='header-box-title'>
        {title}
        {props.type === 'greeting' && (
          <span className='text-bankGradient'>
              &nbsp;{props.user}
          </span>
        )}
      </h1>
      <p className='header-box-subtext'>{props.subtext}</p>
    </div>
  )
}

export default HeaderBox
