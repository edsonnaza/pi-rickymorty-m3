 import classes from './filterChars.module.scss';
 import { useSelector, useDispatch } from 'react-redux';
 import { orderCards, filterCardsByGender } from '../../redux/actions';
  const FilterChars = () => {
    const myFavorites = useSelector((state)=>state.myFavorites);
    const dispatch = useDispatch();

    const orderChangeHandler = (ev) =>{
        const orderValue=ev.target.value;
        dispatch(orderCards(orderValue));

    }

    const orderByGenderHandler = (ev)=>{
       const genderValue= ev.target.value;
       dispatch(filterCardsByGender(genderValue));

    }
  return (
    <div className={classes.selectFilter}>

      <label htmlFor='order'>Filters</label>
      <select onChange={orderChangeHandler} id='order'>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      
      <label htmlFor='order'>Gender</label>
      <select onChange={orderByGenderHandler} id='order'>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unKnown">UnKnown</option>
      </select>


    </div>
  );
};

export default FilterChars;
