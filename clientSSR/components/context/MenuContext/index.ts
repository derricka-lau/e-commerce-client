import { createContext, Context} from 'react';
import route from '../../abstractions/Iroute';


const MenuContext: Context<route[]>= createContext([
    {
        section: 'Processors',
        imgLink: '',
        id: 1,
        pageLink: 'store/processors'
    },
    {
        section: 'Motherboards',
        imgLink: '',
        id: 2,
        pageLink: 'store/motherboards'
    },
    {
        section: 'Memory',
        imgLink: '',
        id: 3,
        pageLink: 'store/memory'
    },
    {
        section: 'Graphics Card',
        imgLink: 'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/graphic-cards/rtx-2080-super/geforce-rtx-2080-super-gallery-thumbnail-d-D.png',
        id: 4,
        pageLink: 'store/graphics'
    },
    {
        section: 'Cases and Coolings',
        imgLink: '',
        id: 5,
        pageLink: 'store/cases&coolings'
    }
  ]);

export default MenuContext;

