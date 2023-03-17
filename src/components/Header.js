import Image from 'next/image'

const Header = () => {
  return (
    <header>
      {/* Top Nav */}

      <div>
        <div>
          <Image width={150} height={40} src='https://imgur.com/24P5af7' />
        </div>
      </div>

      {/* Bottom Nav */}
      <div></div>
    </header>
  )
}
export default Header
