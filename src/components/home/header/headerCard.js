
import HeaderCardItem from './headerCardItem';

const HeaderCard = ({ items }) => {
    const header = true;
    return (
        <div  data-aos="fade-down"
        data-aos-easing="ease-out-cubic"
        data-aos-duration={items.time} className='shadow-xl md:w-full w-[90%] mx-auto rounded-lg p-[1px] md:mb-0 mb-10'>
            <div className=' '>
                <img className='object-cover w-[100%]' src={items.img} alt="" />
            </div>
            <div className='ml-8 my-8 '>
                <h1 className='text-tertiary tracking-[6px] mb-5'>{items.title}</h1>
                <div>
                    {
                        items.item.map(item =>
                            <HeaderCardItem key={item.id} item={item} header={header}/>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default HeaderCard;