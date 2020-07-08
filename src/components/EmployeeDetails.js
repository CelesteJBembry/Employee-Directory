import React from "react";

function EmployeeDetails(props) {
    return (
    <tr>
        <th>Image: </th>
        <td>Name: {props.name} </td>
        <td>Phone: {props.phone} </td>
        <td>Email: {props.email}</td>
        <td>DOB: {props.dob} </td>
    </tr>
    );
    }
export default EmployeeDetails;


// {
//     "gender": "female",
//     "name": {
    //     "title": "Miss",
    //     "first": "Brittany",
    //     "last": "Brooks"
//     },
//     "location": {
    //     "street": {
    //     "number": 9028,
    //     "name": "Hunters Creek Dr"
    //     },
    //     "city": "Modesto",
    //     "state": "Minnesota",
    //     "country": "United States",
    //     "postcode": 90299,
    //     "coordinates": {
    //     "latitude": "51.2709",
    //     "longitude": "166.0100"
    //     },
    //     "timezone": {
    //     "offset": "+8:00",
    //     "description": "Beijing, Perth, Singapore, Hong Kong"
    //     }
//     },
//     "email": "brittany.brooks@example.com",
//     "login": {
    //     "uuid": "213de697-ebab-4994-98aa-b675e4fdb3c9",
    //     "username": "purplepanda471",
    //     "password": "papito",
    //     "salt": "TPQMMsuH",
    //     "md5": "4cbdeab1af5591a8b23edac6632df915",
    //     "sha1": "a5401e2350ffc861b5d66da15ddca8e45fd4c0e8",
    //     "sha256": "7b43b2f0eddb88821f04ef3e9d0c457903d6b030fdd37bfa3cd38a992340ee83"
    //    },
//     "dob": {
    //     "date": "1968-10-20T04:49:42.385Z",
    //     "age": 52
//     },
//     "registered": {
    //     "date": "2007-11-28T19:42:35.949Z",
    //     "age": 13
//     },
//     "phone": "(298)-728-5420",
//     "cell": "(849)-445-5827",
//     "id": {
    //     "name": "SSN",
    //     "value": "714-26-9965"
//     },
//     "picture": {
    //     "large": "https://randomuser.me/api/portraits/women/86.jpg",
    //     "medium": "https://randomuser.me/api/portraits/med/women/86.jpg",
    //     "thumbnail": "https://randomuser.me/api/portraits/thumb/women/86.jpg"
//     },
//     "nat": "US"
//     },