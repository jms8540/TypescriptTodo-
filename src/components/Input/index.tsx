import { type } from 'os';
import {InputHTMLAttributes, } from 'react';
// 1번재 type과 interface 차이

// 1
// type MyType = {color: string};
// type Color = string;
// const MyDate: MyType = {color: 'red'};
// const MyColor: Color = 'red';

// 2
// interface MyInterface {
//   color: string;
// } //무조건 오브젝트 형식으로 들어감 'interface'
// const MyDate2: MyInterface = {color: 'red'};

// 2번재 type과 interface 차이
// type OpacityDate = {opacity: number};
// type MyType = {color: string};

// type MyMixType = MyType & OpacityDate;

// const data: MyMixType = {color: 'red', opacity: 1}

// interface Human {
//   name: string;
//   old: number;
// }

// interface MS {
//   job: string;
// }

// const ms: MS = {name: "ms", old: 18, job: "asdlkjfal;"}

// interface MyOpacity {
//   opacity: number;
// }

// interface MyInterface extends MyOpacity{
//   color: string;
// }
// const data2: MyInterface = {color: 'red', opacity: 1}

// function Input(porps: InputHTMLAttributes<HTMLInputElement>) {
//   return <input {...porps}/>;
// }


// interface InputHTMLAttributes {
//  value: string;
//  target: data;
// }

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
}

function Input(props: InputProps){
  return <input {...props}/>
}


export default Input;
