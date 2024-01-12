
import { useSearchParams } from 'react-router-dom';
import Container from '../../Container';
import { categories } from './CategoriesData';
import CategoryBox from './CategoryBox';

const Categories = () => {
  const [params, setParams] = useSearchParams()
  const category = params.get('category')
  console.log(category);
  return (
    <Container>
      <div className='flex justify-between items-center overflow-x-auto pt-4'>
        {categories.map((item, idx) => <CategoryBox key={idx} icon={item.icon} label={item.label} selected={category === item.label} ></CategoryBox>)}
      </div>
    </Container>
  );
};

export default Categories;