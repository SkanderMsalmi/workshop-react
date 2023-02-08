import Search from './fonction';
import React, { useEffect, useState } from 'react';

var ID=0;
const Tab=[];
function Words() {
const [searchResult, setSearchResult] = useState(null);
const passingGrades=()=>{
  Tab.map((s) => {
    if (s.grade<50) {
        s.grade+=15; 
        }
    });
        return Tab.filter((s) => {return s.grade>=50}).reduce((a, b) => a + b.grade, 0);

}
const [passingGrade, setPassingGrade] = useState(passingGrades());
useEffect(() => {
 
Tab.push({
    id:ID++,name:"John",grade:80},
    {id:ID++,name:"Jane",grade:12},
    {id:ID++,name:"Jim",grade:46});
setPassingGrade(passingGrades())}
, []);
  const str= ["Hello","World","This","Is","A","Test"];
    const input=["a","b","c","d","e","f","a","b","b","a","c","f"];
  

    const numberOfOccurences = () => {
      console.log(input.reduce((a, b) => {
        if (b in a) {
            a[b]++;
        } else {
            a[b] = 1;
        }
        return a;
    }, {}))  
    }
  const findLongestWord = () => {
    let str2=[];
    str.map((item) => {str2.push({mot:item,longueur:item.length})});
    return str2.reduce((a, b) => a.longueur >= b.longueur ? a: b);
  }

  return (<>
    <h2> {findLongestWord().mot} </h2>
   <h2>{numberOfOccurences()}</h2>
   <h2>Total of passing grades = {passingGrade}</h2>
   <input type="text" placeholder="Name" id="name"/>
  <input type="text" placeholder="Grade" id="grade"/>
  <button onClick={()=>{if(document.getElementById('name').value && document.getElementById('grade').value){Tab.push({id:ID++,name:document.getElementById('name').value,grade:parseInt(document.getElementById('grade').value)});setPassingGrade(passingGrades())}}}>Add</button><br/>
   <input defaultValue={0} type="number" name="searchID" id="searchID" />
   <button onClick={()=>{setSearchResult(Search(Tab,document.getElementById('searchID').value));setPassingGrade(passingGrades())}}>Search</button>

    <h2>{searchResult?.name} {searchResult?.grade}</h2>
  </>
  );
}

export default Words;
