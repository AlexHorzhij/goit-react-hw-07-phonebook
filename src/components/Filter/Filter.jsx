import { SelectTitle, SelectInput, FilterWrapper, Button } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { contactFilter } from 'redux/contactsSlice';


export function Filter() {
    const serchName = useSelector(state => state.contacts.filter);
    const dispatch = useDispatch();

    const findContact = (e) => {
        const serchName = e.target.value;
        dispatch(contactFilter(serchName));
    };

    const clearSearch = () => {
        dispatch(contactFilter(""));
    };


    return <><SelectTitle> Find contacts by name</SelectTitle> 
        <FilterWrapper>
            <SelectInput type="text" name="serch" value={serchName} onChange={findContact} ></SelectInput>
            <Button onClick={clearSearch}>X</Button>
        </FilterWrapper>
        </>
};