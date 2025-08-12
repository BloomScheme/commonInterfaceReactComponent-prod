import * as React from "react";

import styled, { css } from "styled-components";
import OkDialogButton from "../OkDialogButton";
import { setObjectPropertyWithPath, Property, PropertyObject } from "./utils";

const Temp:React.FC<{}> = (props) => {
    return <div>

    </div>
}

export default Temp

// const Border = styled.div`
//   display: block;
//   border: 1px solid black;
// `;

// const Pad = styled.div`
//   display: block;
//   margin-left: 40px;
//   margin-bottom: 20px;
// `;

// export type PropertyProcessor = {
//   type: string;
//   creator?: (
//     parent: PropertyObject,
//     parentPropertyPath: string,
//     updater: () => void
//   ) => React.ReactNode;
//   editor?:(
//     property: Property<any>,
//     parent: PropertyObject,
//     parentPropertyPath: string,
//     updater: () => void
//   ) => React.ReactNode,
//   renderer?: (
//     property: Property<any>,
//     meta: {
//       propertyPath: string;
//       objectRenderer: (
//         object: PropertyObject,
//         propertyPath: string
//       ) => React.ReactNode;
//       updater: () => void;
//     }
//   ) => React.ReactNode;
// };

// export const defaultPropertyProcessors: PropertyProcessor[] = [
//   {
//     type: "children",
//     creator: (parent, parentPropertyPath, updater) => {
//       return (
//         <button
//           onClick={() => {
//             let childrenProperty = parent.properties.find(
//               (property) => property.type == "children"
//             );
//             if (!childrenProperty) {
//               childrenProperty = parent.addProperty("children", []);
//             }
//             childrenProperty.data.push(new PropertyObject());
//           }}
//         >
//           create child
//         </button>
//       );
//     },
//     renderer: (
//       property: Property<{ name: string; children: PropertyObject[] }>,
//       { propertyPath, objectRenderer }
//     ) => (
//       <div>
//         {property.data.name}:
//         <Pad>
//           {property.data.children.map((propertyObject, index) =>
//             objectRenderer(propertyObject, `${propertyPath}/${name}[${index}]`)
//           )}
//         </Pad>
//       </div>
//     ),
//   },
//   {
//     type: "primitive",
//     creator: (parent, parentPropertyPath, updater) => {
//       const [targetType, setTargetType] = React.useState("");
//       const [value, setValue] = React.useState<any>(null);
//       const [name, setName] = React.useState("");
//       const [editable, setEditable] = React.useState(true);

//       const primitiveTypes = [
//         "undefined",
//         "null",
//         "boolean",
//         "number",
//         "string",
//       ];

//       let inputType = "string";
//       switch (targetType) {
//         case "undefined":
//         case "null": {
//           break;
//         }

//         case "boolean": {
//           inputType = "checkbox";
//           break;
//         }

//         case "number": {
//           inputType = "number";
//           break;
//         }

//         default:
//           break;
//       }

//       return (
//         <div>
//           name:
//           <input
//             value={name}
//             onChange={(e) => {
//               setName(e.target.value);
//             }}
//           />
//           <select
//             size={primitiveTypes.length}
//             onChange={(e) => {
//               setTargetType(e.target.value);
//             }}
//           >
//             {primitiveTypes.map((primitiveType) => (
//               <option
//                 selected={primitiveType == targetType}
//                 value={primitiveType}
//               >
//                 {primitiveType}
//               </option>
//             ))}
//           </select>
//           {targetType != "checkbox" ? (
//             <input
//               type={targetType}
//               value={value}
//               onChange={(e) => {
//                 setValue(e.target.value);
//               }}
//             />
//           ) : (
//             <input
//               type="checkbox"
//               checked={editable}
//               onChange={(e) => {
//                 setValue(e.target.checked);
//               }}
//             />
//           )}
//           editable:
//           <input
//             type="checkbox"
//             checked={editable}
//             onChange={(e) => {
//               setEditable(e.target.checked);
//             }}
//           />
//           <button
//             onClick={() => {
//               parent.addProperty("primitive", {
//                 name,
//                 data: value,
//                 editable,
//               });
//             }}
//           >
//             create
//           </button>
//         </div>
//       );
//     },
//     renderer: (
//       property: Property<{
//         name: string;
//         data: undefined | null | boolean | number | string;
//         editable?: boolean;
//       }>,
//       { propertyPath, objectRenderer }
//     ) => (
//       <div>
//         {property.data.name}:{property.data}
//         {property.data.editable ? <button>edit</button> : null}
//       </div>
//     ),
//   },
// ];

// export const propertyCreator = (
//   type: string,
//   onChange: (value: any) => void,
//   context: {
//     object: PropertyObject;
//     objectPath: string;
//     updater: () => void;
//   }
// ) => {
//   <div>
//     create:{type}
//     <div></div>
//   </div>;
// };

// // export const propertyCreatorGenerator = (
// //   creators:{
// //     type:string;
// //     creator:
// //   }[]
// // ) => {}

// type Props = {
//   initialObject?: PropertyObject;
//   propertyCreator: (
//     object: PropertyObject,
//     objectPath: string,
//     updater: () => void
//   ) => React.ReactNode;

//   propertyProcessors?: PropertyProcessor[];

//   parentDataRenderer: (
//     object: PropertyObject,
//     propertyPath: string
//   ) => React.ReactNode;

//   useChildren?: boolean;
// };

// const ObjectBuilder: React.FC<Props> = ({
//   initialObject = new PropertyObject(),
//   propertyProcessors = defaultPropertyProcessors,
//   propertyCreator,
//   parentDataRenderer,
// }) => {
//   const [rootObject, setRootObject] = React.useState(initialObject);

//   const updater = () => {
//     setRootObject(rootObject);
//   };

//   const objectRenderer = (object: PropertyObject, propertyPath: string) => {
//     return (
//       <Border>
//         {parentDataRenderer(object, propertyPath)}

//         <Pad>
//           <Pad>
//             {object.properties.map((property, index) => {
//               const propertyProcessor = propertyProcessors.find(
//                 (propertyRenderer) => propertyRenderer.type == property.type
//               );
//               if (propertyProcessor) {
//                 return propertyProcessor.renderer(property, {
//                   propertyPath: `${propertyPath}/properties[${index}]`,
//                   objectRenderer,
//                   updater,
//                 });
//               }
//               return (
//                 <div>
//                   index: {index} type:{property.type} has no renderer
//                 </div>
//               );
//             })}
//             {propertyCreator(object, propertyPath, () => {
//               setRootObject(rootObject);
//             })}
//           </Pad>
//         </Pad>
//       </Border>
//     );
//   };

//   return objectRenderer(initialObject, "");
// };

// export default ObjectBuilder;
