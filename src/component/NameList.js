import React from "react";
import Person from "./Person";

function NameList()
{
    const persons=[
        {
            id:1,
            name:'bruce',
            age:30,
            skill:'react'
        },
        {
            id:2,
            name:'clark',
            age:25,
            skill:'angular'
        },
        {
            id:3,
            name:'Diana',
            age:28,
            skill:'vue'
        },
    ]
    const PersonList=persons.map(person=>(
       <Person key={person.name} person={person}/>)
        )
    return<div> {PersonList}</div>
}
    export default NameList
