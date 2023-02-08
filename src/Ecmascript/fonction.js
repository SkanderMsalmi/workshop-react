function Search(tab,id){
    for (let i=0;i<tab.length;i++){
        if (tab[i].id===id) return tab[i];
    }
    return null;
}
export default Search;
