import qs from "query-string";
import { useNavigate, useSearchParams } from "react-router-dom";


const CategoryBox = ({label, icon:Icon, selected}) => {
    const [params, setParams ]= useSearchParams()
    const navigate = useNavigate()
    const handleClick =()=>{
        let currentQuery = {}
        if(params){
            currentQuery = qs.parse(params.toString())
        }
            const updateQuery = {...currentQuery, category: label}

            const url =qs.stringifyUrl({
                url:'/',
                query: updateQuery,
            })
            navigate(url)
            

        
    }
    return (
    <div onClick={handleClick} className={`flex flex-col justify-center items-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer ${selected ? 'border-b-neutral-800 text-neutral-800' : ''}`}>
            <Icon size={26}></Icon>
           <div className="text-sm font-medium">
            {label}
           </div>
            

       
        </div>
    );
};

export default CategoryBox;