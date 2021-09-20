import React , {useState} from 'react'

function FlexibleSearchCombo({
    search_bar_input,
    search_results_container,
    selected_results_container,
    getSearchData,
    selectedItems,
    setSelectedItems
}) {
    const [input , set_input] = useState('');
    const [loading , set_loading] = useState(false);
    const [search_results , set_search_results] = useState([]);
    const refresh_search = async (keyword)=>{
        set_input(keyword);
        set_loading(true);
        const new_search_results = await getSearchData(keyword);
        set_search_results(new_search_results);
        set_loading(false);
        return new_search_results;
    }
    return (
        <div className="search-combo-wrapper">
            {search_bar_input(input , refresh_search)}
            {search_results_container(search_results , selectedItems , setSelectedItems , loading)}
            {selected_results_container(selectedItems , setSelectedItems)}
        </div>
    )
}

export default FlexibleSearchCombo
