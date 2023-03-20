import Link from 'next/link'

const Success = () => {
  return (
    <div>
      <h1 className='text-3xl'>order complete</h1>

      <Link href='/'>click here to browser other products</Link>
    </div>
  )
}
export default Success
