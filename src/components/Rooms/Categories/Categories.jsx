
import Container from '../../Container';
import { categories } from './CategoriesData';
import CategoryBox from './CategoryBox';

const Categories = () => {
    return (
      <Container>
          <div className='flex justify-between items-center overflow-x-auto pt-4'>
            {categories.map((category,idx)=> <CategoryBox key={idx} icon={category.icon} label={category.label} ></CategoryBox>)}
        </div>
      </Container>
    );
};

export default Categories;