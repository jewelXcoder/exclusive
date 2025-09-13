
const SectionHead = ({ children }) => {
  return (
    <div>
      <div className='flex items-center'>
        <div className='w-[20px] h-[40px] rounded bg-primary'>
        </div>
        <p className='font-primary font-semibold text-primary ml-4'>{children}</p>
      </div>
    </div>
  )
}

export default SectionHead
