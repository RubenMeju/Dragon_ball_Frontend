import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const settings = {
  className: '',
  dots: false,
  infinite: false,
  arrows: false,
  speed: 500,
  slidesToShow: 3.4,
  slidesToScroll: 3,
  initialSlide: 0,
  rows: 1
}

const CharacterSlider = ({ selectedCharacter, setItemTransformation }) => {
  const handleClick = (item) => {
    console.log('click', item)
    setItemTransformation(item)
  }

  return (
    <div className="h-[20%]">
      <p className=" text-xl text-black">Transformaciones</p>

      <Slider {...settings}>
        {selectedCharacter?.transformations.map((item) => (
          <div key={item.id} className="h-28 p-2 cursor-pointer">
            <img
              src={item.image}
              alt={`Slide ${item.id}`}
              className="m-auto h-full w-full bg-red-600 object-contain p-2 bg-gradient-to-r from-[#ff8929] via-[#ffa420] to-[#ff8929] hover"
              onClick={() => handleClick(item)}
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default CharacterSlider
