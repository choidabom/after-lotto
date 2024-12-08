import { useItems } from '@/app/_hooks/useItems';
import { getImageName, getKoreanName } from '@/app/_utils/get-category-info';
import Image from 'next/image';

const AddedItemList = () => {
  const { getItems } = useItems();
  const items = getItems();

  return (
    <div className='flex justify-center w-full items-center h-[671px] mt-6 mb-14 bg-gray'>
      {items.length ? (
        <ul className='bg-gray w-full px-10 overflow-y-auto h-full'>
          {items.map(({ id, name, category, price }) => (
            <li
              key={id}
              className='flex flex-col gap-2 border-b border-light-gray py-6 last:border-none'
            >
              <div className='flex w-fit gap-1 items-center rounded-full bg-black px-4 py-2 text-white'>
                <Image
                  src={getImageName(category)}
                  width={16}
                  height={16}
                  alt={name}
                  className='w-4'
                />
                <span className='text-base leading-normal text-white'>
                  {getKoreanName(category)}
                </span>
              </div>

              <div className='flex items-center gap-4 text-white'>
                <p className='flex-1 font-bold'>{name}</p>
                <p>{price.toLocaleString()} 원</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className='text-text-gray'>아이템을 추가해주세요!</div>
      )}
    </div>
  );
};

export default AddedItemList;
